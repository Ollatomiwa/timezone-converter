<template>
    <section class="bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
      <div class=" mx-auto">
        <!-- Section Title -->
        <h2 class="text-3xl lg:text-5xl font-bold text-center mb-8">
          About Timezone Converter
        </h2>
  
        <!-- What It Is -->
        <div class="mb-8 lg:text-3xl">
          <p class="text-base-400 leading-relaxed">
            Timezone Converter is a powerful tool designed to help individuals and teams coordinate meetings and events across different time zones. Whether you're working with remote teams, scheduling international calls, or planning global events, this tool simplifies the process of finding a time that works for everyone.
          </p>
        </div>
  
        <!-- How to Use It -->
        <div class="mb-8 ">
          <h3 class="text-xl lg:text-4xl font-semibold mb-4">How to Use It</h3>
          <ol class="list-decimal list-inside text-base-600 leading-relaxed lg:text-2xl">
            <li class="mb-2">
              <strong>Select Your Timezone:</strong> Start by choosing your local timezone from the dropdown menu.
            </li>
            <li class="mb-2">
              <strong>Add Team Members:</strong> Add the timezones of your team members or participants.
            </li>
            <li class="mb-2">
              <strong>Choose a Meeting Time:</strong> Pick a date and time that works for you.
            </li>
            <li class="mb-2">
              <strong>View Converted Times:</strong> The tool will display the meeting time in each participant's local timezone.
            </li>
            <li class="mb-2">
              <strong>Share or Copy:</strong> Use the "Copy" button to copy the meeting details or the "Share" button to send them directly.
            </li>
          </ol>
        </div>
  
        <!-- Suggestions for Improvements -->
        <div class="mb-8">
          <h3 class="text-xl lg:text-4xl font-semibold mb-4">Suggestions for Improvements</h3>
          <p class="text-base-600 leading-relaxed lg:text-2xl">
            We're always looking to improve! Here are some features we're considering:
          </p>
          <ul class="list-disc list-inside text-base-600 leading-relaxed lg:text-2xl">
            <li class="mb-2">Integration with calendar apps like Google Calendar and Outlook.</li>
            <li class="mb-2">Automatic timezone detection based on IP address.</li>
            <li class="mb-2">A visual timeline to compare timezones side by side.</li>
            <li class="mb-2">Support for recurring meetings and events.</li>
          </ul>
        </div>
  
        <!-- Call to Action -->
        <div class="text-center">
          <NuxtLink to="/converter" class="bg-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-dodgeroll-gold transition duration-900 inline-block">
             GET STARTED <Icon name="material-symbols:arrow-circle-right" class="bg-white size-3" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No script logic needed for this section
  </script>