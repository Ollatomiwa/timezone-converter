<template>
  <div>
    <main>
      <section class="bg-[#80361B]">
        <div
          class="container flex flex-col lg:flex-row items-center lg:py-20 py-10 gap-10"
        >
          <div
            class="flex-1 sm:order-1 lg:order-1 text-center lg:text-left lg:ml-10 md:mr-6"
          >
            <h1
              class="text-2xl lg:text-8xl font-extrabold mb-6 text-white"
              ref="herotext"
            >
              <span class="text-orange-400">TIMEZONE </span>
              <span class="text-dodgeroll-gold">CONVERTER</span>
            </h1>
            <p class="text-xl lg:text-2xl mb-8 text-white" ref="subtext">
              FIX TEAM MEETINGS WITH MEMBERS ON DIFFERENT TIME ZONES ON
              APPROPRIATE TIME FOR ALL...
            </p>
            <NuxtLink
              to="/converter"
              class="bg-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-dodgeroll-gold transition duration-900 inline-block"
            >
              GET STARTED <Icon name="material-symbols:arrow-circle-right" class="bg-white size-3" />
            </NuxtLink>
          </div>
          <div class="flex-1 order-2 lg:order-2 hidden lg:block">
            <NuxtImg
              sizes="xs:100vw sm:900px"
              src="hero-brown2.png"
              format="webp"
              alt="Hero Page"
              densities="x1"
            ></NuxtImg>
          </div>
        </div>
      </section>
    </main>
  </div>
  <About />
  <hr>
  <Newsletter />
</template>
