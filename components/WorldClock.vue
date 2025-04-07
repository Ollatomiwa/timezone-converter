<template>
    <div class="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 class="text-xl font-bold text-white mb-4">🌐 World Clock</h2>
      
      <!-- Clock Display -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div 
          v-for="(clock, index) in clocks" 
          :key="index"
          class="bg-gray-700 p-3 rounded-lg flex items-center gap-2"
        >
          <span class="text-2xl">{{ clock.emoji }}</span>
          <div class="flex-1 min-w-0">
            <h3 class="font-bold text-white truncate">{{ clock.city }}</h3>
            <p class="text-orange-400 text-sm">{{ formatTime(clock.timezone) }}</p>
            <p class="text-xs text-gray-400 truncate">{{ clock.timezone }}</p>
          </div>
          <button 
            @click="removeClock(index)"
            class="text-gray-400 hover:text-white p-1"
            aria-label="Remove clock"
          >
            <Icon name="mdi:close" size="16" />
          </button>
        </div>
      </div>
  
      <!-- Add City -->
      <div class="mt-4 relative">
        <input
          v-model="cityQuery"
          @input="searchCities"
          placeholder="Search city..."
          class="w-full p-2 rounded bg-gray-700 text-white text-sm"
        />
        <ul 
          v-if="citySuggestions.length"
          class="absolute z-10 bg-gray-800 w-full mt-1 rounded shadow-lg max-h-60 overflow-y-auto border border-gray-600"
        >
          <li
            v-for="(city, index) in citySuggestions"
            :key="index"
            @click="addClock(city)"
            class="p-2 hover:bg-gray-700 cursor-pointer text-white text-sm flex items-center gap-2"
          >
            <span>{{ city.emoji }}</span>
            <span class="truncate">
              {{ city.name }}, {{ city.countryName }} ({{ city.currentTimeFormat }})
            </span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useNow } from '@vueuse/core'
  import { timeZonesNames } from '@vvo/tzdb'
  
  // Predefined clocks (using IANA timezone names)
  const presetClocks = [
    { city: 'New York', timezone: 'America/New_York', emoji: '🇺🇸' },
    { city: 'London', timezone: 'Europe/London', emoji: '🇬🇧' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo', emoji: '🇯🇵' },
    { city: 'Sydney', timezone: 'Australia/Sydney', emoji: '🇦🇺' }
  ]
  
  const clocks = ref([...presetClocks])
  const cityQuery = ref('')
  const now = useNow({ interval: 60000 }) // Update every minute
  
  // Search through IANA timezones
  const citySuggestions = computed(() => {
    if (cityQuery.value.length < 2) return []
    
    return timeZonesNames
      .filter(tz => tz.toLowerCase().includes(cityQuery.value.toLowerCase()))
      .slice(0, 5)
      .map(tz => ({
        name: tz.split('/').pop()?.replace(/_/g, ' ') || tz,
        timezone: tz,
        countryName: tz.split('/')[0],
        currentTimeFormat: formatTime(tz),
        emoji: getEmoji(tz.split('/')[0])
      }))
  })
  
  // Format time for a timezone
  const formatTime = (timezone) => {
    try {
      return new Date().toLocaleTimeString('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit'
      })
    } catch {
      return 'N/A'
    }
  }
  
  const addClock = (city) => {
    if (clocks.value.length >= 6) return
    clocks.value.push({
      city: city.name,
      timezone: city.timezone,
      emoji: city.emoji
    })
    cityQuery.value = ''
  }
  
  const removeClock = (index) => {
    clocks.value.splice(index, 1)
  }
  
  // Simplified emoji lookup
  const getEmoji = (country) => {
    const emojiMap = {
      America: '🇺🇸',
      Europe: '🇪🇺',
      Asia: '🇦🇸',
      Africa: '🇦🇴',
      Australia: '🇦🇺',
      Pacific: '🇵🇼'
    }
    return emojiMap[country] || '🌐'
  }
  </script>