<template>
    <div class="container mx-auto p-4">
      <!-- User Timezone Selection -->
      <div class="mb-8">
        <label class="block mb-2">Your Timezone</label>
        <select v-model="userTimezone" class="select select-bordered">
          <option v-for="tz in timezones" :key="tz" :value="tz">{{ tz }}</option>
        </select>
      </div>
  
      <!-- Team Members Timezones -->
      <div class="mb-8">
        <h3 class="text-xl mb-4">Team Members Timezones</h3>
        <div v-for="(member, index) in teamMembers" :key="index" class="flex gap-2 mb-2">
          <select v-model="member.timezone" class="select select-bordered flex-1">
            <option v-for="tz in timezones" :key="tz" :value="tz">{{ tz }}</option>
          </select>
          <button @click="removeMember(index)" class="btn btn-error">Remove</button>
        </div>
        <button @click="addMember" class="btn btn-secondary bg-gray-500 text-white">Add Team Member</button>
      </div>
  
      <!-- Meeting Time Selection -->
      <div class="mb-8">
        <label class="block mb-2">Select Meeting Time (Your Timezone)</label>
        <input 
          type="datetime-local" 
          v-model="meetingTime"
          class="input input-bordered"
        />
      </div>
  
      <!-- Results Display -->
      <div v-if="meetingTime" class="bg-gray-600 p-4 rounded-lg">
        <h3 class="text-xl mb-4 text-white">Meeting Times</h3>
        <div class="mb-4">
          <pre class="bg-base-100 p-4 rounded text-white text-3xl" >{{ messageContent }}</pre>
        </div>
        <div class="flex gap-2">
          <button @click="copyMessage" class="btn bg-white">Copy Message</button>
          <button @click="shareMessage" class="btn btn-info bg-white">Share</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  import { useClipboard } from '@vueuse/core'
  import * as dateFnsTz from 'date-fns-tz'

    const { utcToZonedTime, zonedTimeToUtc, format } = dateFnsTz

  
  const timezones = Intl.supportedValuesOf('timeZone')
  
  const userTimezone = ref(Intl.DateTimeFormat().resolvedOptions().timeZone)
  const teamMembers = ref([{ timezone: '' }])
  const meetingTime = ref('')
  
  const { copy: copyToClipboard } = useClipboard()
  
  const addMember = () => {
    teamMembers.value.push({ timezone: '' })
  }
  
  const removeMember = (index) => {
    teamMembers.value.splice(index, 1)
  }
  
  const messageContent = computed(() => {
    if (!meetingTime.value) return ''
    
    const date = new Date(meetingTime.value)
    const lines = []
  
    lines.push(`Meeting Time:`)
    lines.push(`- ${userTimezone.value}: ${formatInTimeZone(date, userTimezone.value, 'yyyy-MM-dd HH:mm zzz')}`)
    
    teamMembers.value.forEach(member => {
      lines.push(`- ${member.timezone}: ${formatInTimeZone(date, member.timezone, 'yyyy-MM-dd HH:mm zzz')}`)
    })
  
    return lines.join('\n')
  })
  
  const copyMessage = () => {
    copyToClipboard(messageContent.value)
    alert('Copied to clipboard!')
  }
  
  const shareMessage = async () => {
    try {
      await navigator.share({
        title: 'Meeting Time',
        text: messageContent.value
      })
    } catch (err) {
      // Fallback for browsers without Web Share API
      copyMessage()
    }
  }
  
  // Helper function to format dates
  const formatInTimeZone = (date, tz, formatStr) => {
    return format(utcToZonedTime(zonedTimeToUtc(date, userTimezone.value), tz), formatStr, { timeZone: tz })
  }
  </script>