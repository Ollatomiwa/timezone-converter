<template>
  <div class="container mx-auto p-4 max-w-[100vw] overflow-x-hidden lg:text-left sm:text-center">
    <!-- User Timezone Selection -->
    <div class="mb-8">
      <label class="block mb-2 font-bold text-2xl lg:pt-[50px] md:mt-[60px]">Your Timezone</label>
      <select v-model="userTimezone" class="select select-bordered">
        <option v-for="tz in timezones" :key="tz" :value="tz">{{ tz }}</option>
      </select>
    </div>

    <!-- Team Members Timezones -->
    <div class="mb-8">
      <h3 class="text-2xl mb-4 font-bold">Team Members Timezones</h3>
      <div
        v-for="(member, index) in teamMembers"
        :key="index"
        class="flex gap-4 lg:mb-6 mb-2 lg:w-[380px] lg:h-[40px] md:h-[40px] lg:ml-[10px] md:ml-[200px]"
      >
        <select v-model="member.timezone" class="select select-bordered flex-1">
          <option v-for="tz in timezones" :key="tz" :value="tz">
            {{ tz }}
          </option>
        </select>
        <button @click="removeMember(index)" class="btn w-[180px] h-[40px] text-white">
          <Icon name="material-symbols:delete-forever-rounded" class="bg-red-600 size-8" />
        </button>
      </div>
      <button
        @click="addMember"  
        class="btn rounded-lg w-[180px] h-[50px] bg-blue-600 text-white hover:bg-orange"
      >
        Add Team Member
      </button>
    </div>

    <!--Input field for meeting purpose/event-->
    <div class="mb-8">
      <form @submit.prevent="submitEventPurpose" class="flex flex-col sm:flex-row gap-4 justify-center max-w-[390px] md:ml-[200px] lg:ml-[1px]">
        <input
          v-model="eventPurpose"
          type="text"
          placeholder="Event purpose"
          class="flex-1 px-6 py-3 rounded-lg border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        />
        <button
          type="submit"
          class="btn btn-primary bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-gray-400 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>

    <!-- Meeting Time Selection -->
    <div class="mb-8">
      <label class="block mb-2 font-bold text-xl">Select Meeting Time (Your Timezone)</label>
      <input
        type="datetime-local"
        v-model="meetingTime"
        class="input input-bordered"
      />
    </div>

    <!-- Results Display -->
    <div v-if="meetingTime" class="bg-gray-600 p-4 rounded-lg lg:max-w-[50vw] min-w-[40px] lg:ml-[1px] md:ml-[90px]">
      <div class="mb-4">
        <pre class="bg-base-100 p-1 rounded text-white lg:text-[20px] text-[10px]">{{ messageContent }}</pre>
      </div>
      <div class="flex justify-center gap-2">
        <button @click="copyMessage" class="btn rounded-lg w-[120px] h-[50px] bg-blue-600 text-white">Copy Message</button>
        <button @click="shareMessage" class="btn rounded-lg w-[110px] h-[50px] bg-blue-600 text-white">
          Share
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useClipboard } from "@vueuse/core";
import * as dateFnsTz from "date-fns-tz";

const { toZonedTime, format } = dateFnsTz;

const timezones = Intl.supportedValuesOf("timeZone");
const userTimezone = ref(Intl.DateTimeFormat().resolvedOptions().timeZone);
const teamMembers = ref([{ timezone: userTimezone.value }]);
const meetingTime = ref("");
const eventPurpose = ref("");

const { copy: copyToClipboard } = useClipboard();

const addMember = () => {
  teamMembers.value.push({ timezone: "" });
};

const removeMember = (index) => {
  teamMembers.value.splice(index, 1);
};

const submitEventPurpose = () => {
  // The form submission is handled by the v-model binding
  // No additional action needed here as it's already reactive
};

const messageContent = computed(() => {
  if (!meetingTime.value) return "";

  const date = new Date(meetingTime.value);
  const lines = [];

  // Add event purpose if it exists
  if (eventPurpose.value) {
    lines.push(`Event: ${eventPurpose.value}`);
    lines.push(""); // Add empty line for spacing
  }

  lines.push(`Meeting Time:`);
  lines.push(
    `- ${userTimezone.value}: ${formatInTimeZone(
      date,
      userTimezone.value,
      "dd-MM-yyyy HH:mm zzz"
    )}`
  );

  teamMembers.value.forEach((member) => {
    if (member.timezone) {
      lines.push(
        `- ${member.timezone}: ${formatInTimeZone(
          date,
          member.timezone,
          "dd-MM-yyyy HH:mm zzz"
        )}`
      );
    }
  });

  return lines.join("\n");
});

const copyMessage = () => {
  copyToClipboard(messageContent.value);
  alert("Copied to clipboard!");
};

const shareMessage = async () => {
  try {
    await navigator.share({
      title: "Meeting Time",
      text: messageContent.value,
    });
  } catch (err) {
    // Fallback for browsers without Web Share API
    copyMessage();
  }
};

// Helper function to format dates
const formatInTimeZone = (date, tz, formatStr) => {
  const zonedDate = toZonedTime(date, tz);
  return format(zonedDate, formatStr, { timeZone: tz });
};
</script>