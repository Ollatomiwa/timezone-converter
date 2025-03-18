<template>
    <section class="bg-base-200 py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Section Title -->
        <h2 class="text-3xl font-bold mb-4">
          Stay Updated with Timezone Converter
        </h2>
  
        <!-- Description -->
        <p class="text-base-600 mb-8">
          Subscribe to our newsletter to receive the latest updates, tips, and tricks for managing timezones effectively. Never miss a feature update or productivity hack!
        </p>
  
        <!-- Subscription Form -->
        <form class="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-6 py-3 rounded-lg border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
          <button
            type="submit"
            class="btn btn-primary bg-orange-400 text-white px-8 py-3 rounded-lg hover:bg-gray-400 transition-colors"
          >
            Subscribe
          </button>
        </form>
  
        <!-- Privacy Note -->
        <p class="text-sm text-base-500 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  </template>
  
  <script setup>
  // No script logic needed for this section
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>