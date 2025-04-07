<template>
  <div class="bg-white dark:bg-[#000000c7]">
    <main>
      <section class="bg-[#000000c7] py-[70px]">
        <div class="container mx-auto px-4">
          <div class="flex flex-col lg:flex-row items-center">
            <!-- Text content (left on large screens, full width on smaller screens) -->
            <div class="w-full lg:w-1/2 lg:pr-8 text-center lg:text-left">
              <h1
                class="text-2xl lg:text-8xl font-extrabold mb-1 text-white"
                ref="herotext"
              >
                <span class="text-orange-400">TIMEZONE </span>
                <span class="text-dodgeroll-gold">CONVERTER</span>
              </h1>
              <p class="text-[19px] lg:text-xl mb-5 text-white" ref="subtext">
                The End of 'What Time Works for You?' Instant Perfect Meeting
                Times for Global Teams
              </p>
              <NuxtLink
                to="/converter"
                class="bg-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-dodgeroll-gold transition duration-900 inline-block"
              >
                GET STARTED
                <Icon
                  name="material-symbols:arrow-circle-right"
                  class="bg-white size-3"
                />
              </NuxtLink>
            </div>

            <!-- Images (right on large screens, full width on smaller screens) -->
            <div class="w-full lg:w-1/2 mt-8 lg:mt-0">
              <div class="flex flex-row justify-center lg:justify-start gap-4">
                <NuxtImg
                  sizes="xs:100vw sm:600px"
                  src="hero3.png"
                  format="webp"
                  alt="Hero Page"
                  class="max-w-[100%] lg:max-w-[58%]"
                />
                <NuxtImg
                  sizes="xs:100vw sm:600px"
                  src="hero4.png"
                  format="webp"
                  alt="Hero Page"
                  class="max-w-[100%] lg:max-w-[58%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  <About />
  <hr />
  <Newsletter />
</template>
