<template>
  <main class="bg-gray-50 pt-16 w-[1280px] h-[3110px] mx-auto rotate-0 opacity-100 overflow-auto">
    <section v-bind:style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${hero})` }" class="relative w-[1200px] max-w-[calc(100%-80px)] min-h-[520px] h-[520px] mx-[40px] rounded-[16px] overflow-hidden bg-cover bg-center pt-[114px] pb-[114px] px-[16px] mb-12">
      <div class="absolute inset-0 bg-black/60" aria-hidden="true"></div>
      <div class="relative z-10 w-[768px] max-w-[90%] mx-auto text-center text-white">
        <h1 class="text-5xl md:text-6xl font-extrabold leading-tight">Escape to Your Perfect Paradise</h1>
        <p class="mt-4 text-lg md:text-xl font-medium text-white/90">Unlock exclusive prices on over 2 million properties and flights across the globe.</p>

        <div class="mt-6 relative w-[768px] max-w-[90%] h-[68px] mx-auto">
          <div class="absolute inset-0 bg-[rgba(255,255,255,0.002)] rounded-[12px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]" aria-hidden="true"></div>

          <div class="relative z-10 flex items-start gap-2 h-full bg-white rounded-[12px] p-2">
            <div class="w-[292.29px] h-[52px] bg-[#E9E9E9] border border-[#6B7FC6] rounded-[8px] flex items-center px-3">
              <span class="w-[20.5px] h-[20.5px] bg-[#727784] rounded-sm mr-3 flex-shrink-0"></span>
              <input class="bg-transparent outline-none h-full w-full px-1 py-3 text-base text-[#6B7280]" placeholder="Where to next?" />
            </div>

            <div class="w-[292.29px] h-[52px] bg-[#E9E9E9] border border-[#6B7FC6] rounded-[8px] flex items-center px-3">
              <span class="w-[18px] h-[20px] bg-[#727784] rounded-sm mr-3 flex-shrink-0"></span>
              <input class="bg-transparent outline-none h-full w-full px-1 py-3 text-base text-[#191C22]" placeholder="Oct 12 - Oct 18" />
            </div>

            <button class="w-[151.42px] h-[52px] bg-[#005CBD] rounded-[8px] text-white font-bold flex items-center justify-center">Search</button>
          </div>
        </div>
      </div>
    </section>

    <section class="grid md:grid-cols-3 gap-6 px-6 py-12 mt-8">
      <div class="bg-gray-100 rounded-lg p-6 text-center">
        <div class="w-12 h-12 mx-auto rounded-full bg-blue-100 mb-4"></div>
        <h3 class="font-bold">Best Price Guarantee</h3>
        <p class="text-sm text-gray-600 mt-2">We compare prices so you don't have to.</p>
      </div>
      <div class="bg-gray-100 rounded-lg p-6 text-center">
        <div class="w-12 h-12 mx-auto rounded-full bg-pink-100 mb-4"></div>
        <h3 class="font-bold">24/7 Support</h3>
        <p class="text-sm text-gray-600 mt-2">We're here for you anytime, anywhere.</p>
      </div>
      <div class="bg-gray-100 rounded-lg p-6 text-center">
        <div class="w-12 h-12 mx-auto rounded-full bg-yellow-100 mb-4"></div>
        <h3 class="font-bold">Secure Booking</h3>
        <p class="text-sm text-gray-600 mt-2">Your data and payments are safe with us.</p>
      </div>
    </section>

    <section class="px-4 py-12 mt-10">
      <div class="flex items-end justify-between mb-11">
        <div>
          <h2 class="text-[32px] leading-10 font-extrabold text-[#191C22]">Trending Destinations</h2>
          <p class="text-lg leading-7 text-[#4B5563]">Handpicked favorites for your next adventure</p>
        </div>
        <a class="text-[#005CBD] text-lg font-bold leading-7">View all</a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <article v-for="(d, idx) in destinationCards" :key="d.city" class="group">
          <div class="relative h-[389px] rounded-[16px] overflow-hidden bg-gray-200">
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              :style="{ backgroundImage: `url(${imageForDestination(d)})` }"
            ></div>
            <div v-if="idx === 0" class="absolute left-4 bottom-4 rounded-full bg-white/95 px-4 py-1.5 text-sm font-bold tracking-wide text-[#191C22] shadow-sm">
              TOP RATED
            </div>
          </div>
          <div class="mt-4">
            <h3 class="text-2xl leading-7 font-extrabold text-[#191C22]">{{ d.city }}, {{ d.country }}</h3>
            <p class="mt-1 text-base leading-6 text-[#4B5563]">
              Starting from <span class="font-bold text-[#005CBD]">${{ d.price }}</span>
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="relative mx-6 my-12 min-h-[424px] overflow-hidden rounded-[24px] bg-[#B61B4A] px-8 py-12 text-white md:h-[424px] md:px-[50px] md:py-[58px]">
      <div class="absolute right-[410px] top-[-10px] hidden h-[360px] w-[280px] rotate-[-45deg] rounded-[34px] bg-black/15 md:block" aria-hidden="true">
        <div class="absolute left-10 top-8 h-10 w-10 rounded-full bg-[#C61A52]"></div>
        <div class="absolute bottom-[84px] left-[72px] h-[84px] w-[84px] rotate-45 bg-[#C61A52] before:absolute before:-top-[42px] before:left-0 before:h-[84px] before:w-[84px] before:rounded-full before:bg-[#C61A52] after:absolute after:left-[42px] after:top-0 after:h-[84px] after:w-[84px] after:rounded-full after:bg-[#C61A52]"></div>
      </div>

      <img
        :src="promoBanner"
        alt=""
        class="absolute right-[42px] top-[50px] hidden h-[326px] w-[344px] rotate-[3deg] rounded-[18px] object-cover shadow-[0_28px_60px_rgba(0,0,0,0.28)] md:block"
      />

      <div class="relative z-10 max-w-[560px]">
        <h2 class="text-[46px] font-extrabold leading-[1.08] tracking-normal md:text-[50px]">
          Summer Sales: Up to 40% Off!
        </h2>
        <p class="mt-6 max-w-[540px] text-[20px] leading-8 text-white/90">
          Exclusive member deals on flights and luxury hotels for your next summer getaway. Valid until Oct 31st.
        </p>
        <div class="mt-9 flex flex-col gap-4 sm:flex-row">
          <button class="h-[58px] rounded-[12px] bg-white px-8 text-xl font-bold text-[#B61B4A] sm:min-w-[188px]">Explore Deals</button>
          <button class="h-[58px] rounded-[12px] border-2 border-white px-8 text-xl font-bold text-white sm:min-w-[224px]">Join Club T-Goda</button>
        </div>
      </div>
    </section>

    <section class="mx-6 my-12 bg-gray-200 rounded-3xl p-12">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl font-bold">Stay in the loop</h2>
        <p class="mt-2 text-gray-700">Subscribe to our newsletter for travel inspiration and deals.</p>
        <div class="mt-6 flex justify-center gap-4">
          <input class="px-6 py-4 rounded-lg border border-gray-300 w-2/3" placeholder="Your email address" />
          <button class="px-6 py-4 bg-[#005CBD] text-white rounded-lg">Subscribe</button>
        </div>
      </div>
    </section>

   
  </main>
</template>

<script setup>
import hero from '../assets/Image.png'
import promoBanner from '../assets/img-promobanner.png'

const destinationCards = [
  { city: 'Bangkok', country: 'Thailand', price: 120, imageAlias: 'thailand' },
  { city: 'Tokyo', country: 'Japan', price: 250, imageAlias: 'japan' },
  { city: 'Paris', country: 'France', price: 180, imageAlias: 'paris' },
  { city: 'London', country: 'UK', price: 210, imageAlias: 'london' }
]

// Load all images from assets folder (Vite) and expose as URLs
const images = import.meta.glob('../assets/*.{jpg,jpeg,png,webp,svg}', { eager: true, query: '?url', import: 'default' })
const imageKeys = Object.keys(images)

function slugify(text = '') {
  return text.toString().toLowerCase().replace(/[^a-z0-9]/g, '')
}

function imageForDestination(destination) {
  const keys = [destination.imageAlias, destination.city, destination.country].map(slugify)
  const match = imageKeys.find(k => {
    const normalizedKey = slugify(k)
    return keys.some(key => normalizedKey.includes(key))
  })

  return match ? images[match] : '/static/dest-placeholder.jpg'
}

</script>

<!-- Component-level styles removed to avoid overlap with Tailwind utilities.
     Global layout and design tokens are provided in `src/assets/styles.css`. -->
