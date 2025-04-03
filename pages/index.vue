<template>
  <div class="bg-white dark:bg-gray-800">
    <main>
      <section class="bg-[#000000c7] py-[70px] text-center">
        <div class="row justify-content-md-center">
          <div class="col col-md-8">
            <h1
              class="text-2xl lg:text-8xl font-extrabold mb-1 text-white"
              ref="herotext"
            >
              <span class="text-orange-400">TIMEZONE </span>
              <span class="text-dodgeroll-gold">CONVERTER</span>
            </h1>
            <p class="text-[15px] lg:text-xl mb-5 text-white" ref="subtext">
              FIX TEAM MEETINGS WITH MEMBERS ON DIFFERENT TIME ZONES ON
              APPROPRIATE TIME FOR ALL
            </p>
            <NuxtLink
              to="/converter"
              class="bg-orange-400  text-white px-6 py-3 rounded-full font-semibold hover:bg-dodgeroll-gold transition duration-900 inline-block"
            >
              GET STARTED
              <Icon
                name="material-symbols:arrow-circle-right"
                class="bg-white size-3"
              />
            </NuxtLink>
          </div>
          <div class="flex mt-6 justify-center items-center gap-4  md:block">
            <NuxtImg
              sizes="xs:100vw sm:400px"
              src="hero3.png"
              format="webp"
              alt="Hero Page"
              class="inline-block"
            ></NuxtImg>
            <NuxtImg
              sizes="xs:100vw sm:900px"
              src="hero4.png"
              format="webp"
              alt="Hero Page"
              class="inline-block"
            ></NuxtImg>
          </div>
        </div>
      </section>
    </main>
    <About />
    <hr />
    <Newsletter />
  </div>
</template>
