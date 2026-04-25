<template>
  <main class="bg-gray-50 pt-16 pb-16 w-[1280px] mx-auto rotate-0 opacity-100">
    <section v-bind:style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${hero})` }" class="relative w-[1200px] max-w-[calc(100%-80px)] min-h-[520px] h-[520px] mx-[40px] rounded-[16px] overflow-hidden bg-cover bg-center pt-[114px] pb-[114px] px-[16px] mb-12">
      <div class="absolute inset-0 bg-black/60" aria-hidden="true"></div>
      <div class="relative z-10 w-[768px] max-w-[90%] mx-auto text-center text-white">
        <h1 class="text-5xl md:text-6xl font-extrabold leading-tight">Escape to Your Perfect Paradise</h1>
        <p class="mt-4 text-lg md:text-xl font-medium text-white/90">Unlock exclusive prices on over 2 million properties and flights across the globe.</p>

        <div class="mt-6 relative w-[768px] max-w-[90%] h-[68px] mx-auto">
          <div class="absolute inset-0 bg-[rgba(255,255,255,0.002)] rounded-[12px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]" aria-hidden="true"></div>
          <div class="relative z-10 flex items-start gap-2 h-full bg-white rounded-[12px] p-2">
            <div class="w-[292.29px] h-[52px] bg-[#E9E9E9] border border-[#6B7FC6] rounded-[8px] flex items-center px-3">
              <img :src="worldIcon" alt="" class="w-[24px] h-[24px] object-contain mr-3 flex-shrink-0" />
              <input v-model="destinationQuery" class="bg-transparent outline-none h-full w-full px-1 py-3 text-base text-[#6B7280]" placeholder="Where to next?" />
            </div>

            <div class="w-[292.29px] h-[52px] bg-[#E9E9E9] border border-[#6B7FC6] rounded-[8px] flex items-center px-3">
              <img :src="dateIcon" alt="" class="w-[24px] h-[24px] object-contain mr-3 flex-shrink-0" />
              <input v-model="dateQuery" class="bg-transparent outline-none h-full w-full px-1 py-3 text-base text-[#191C22]" placeholder="Oct 12 - Oct 19, 2024" />
            </div>

            <button
              class="w-[151.42px] h-[52px] bg-[#005CBD] rounded-[8px] text-white font-bold flex items-center justify-center gap-2"
              @click="goToSearch()"
            >
              <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" aria-hidden="true">
                <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="2.5" />
                <path d="M15.5 15.5 21 21" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
              </svg>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 gap-7 px-6 py-12 mt-8 md:grid-cols-3">
      <article
        v-for="feature in featureCards"
        :key="feature.title"
        class="flex min-h-[240px] flex-col items-center rounded-[14px] bg-[#E9E9E9] px-8 py-10 text-center"
      >
        <div class="flex h-16 w-16 items-center justify-center rounded-full" :class="feature.iconBg">
          <img :src="feature.icon" alt="" class="h-8 w-8 object-contain" />
        </div>
        <h3 class="mt-7 text-[24px] font-extrabold leading-8 text-[#191C22]">{{ feature.title }}</h3>
        <p class="mt-5 max-w-[340px] text-lg leading-7 text-[#4B5563]">{{ feature.description }}</p>
      </article>
    </section>

    <section class="px-4 py-12 mt-10">
      <div class="flex items-end justify-between mb-11">
        <div>
          <h2 class="text-[32px] leading-10 font-extrabold text-[#191C22]">Trending Destinations</h2>
          <p class="text-lg leading-7 text-[#4B5563]">Handpicked favorites for your next adventure</p>
        </div>
        <button class="text-[#005CBD] text-lg font-bold leading-7" @click="goToSearch()">View all</button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <article
          v-for="(d, idx) in destinationCards"
          :key="d.city"
          class="group cursor-pointer"
          role="button"
          tabindex="0"
          @click="goToSearch(`${d.city}, ${d.country}`)"
          @keydown.enter="goToSearch(`${d.city}, ${d.country}`)"
          @keydown.space.prevent="goToSearch(`${d.city}, ${d.country}`)"
        >
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

    <section class="relative mx-6 my-12 min-h-[424px] overflow-hidden rounded-[24px] bg-[#B61B4A] px-8 py-12 text-white md:h-[424px] md:px-[80px] md:py-[66px]">
      <div class="absolute left-[555px] top-[-2px] hidden h-[342px] w-[246px] rotate-[-45deg] rounded-[30px] bg-black/15 md:block" aria-hidden="true">
        <div class="absolute left-[52px] top-[42px] h-9 w-9 rounded-full bg-[#C61A52]"></div>
        <div class="absolute bottom-[76px] left-[86px] h-[78px] w-[78px] rotate-45 bg-[#C61A52] before:absolute before:-top-[39px] before:left-0 before:h-[78px] before:w-[78px] before:rounded-full before:bg-[#C61A52] after:absolute after:left-[39px] after:top-0 after:h-[78px] after:w-[78px] after:rounded-full after:bg-[#C61A52]"></div>
      </div>

      <img
        :src="promoBanner"
        alt=""
        class="absolute right-[48px] top-[56px] hidden h-[318px] w-[344px] rotate-[3deg] rounded-[18px] object-cover shadow-[0_28px_60px_rgba(0,0,0,0.28)] md:block"
      />

      <div class="relative z-10 max-w-[560px]">
        <h2 class="text-[46px] font-extrabold leading-[1.08] tracking-normal md:text-[52px]">
          Summer Sales: Up to 40% Off!
        </h2>
        <p class="mt-6 max-w-[540px] text-[20px] leading-8 text-white/90">
          Exclusive member deals on flights and luxury hotels for your next summer getaway. Valid until Oct 31st.
        </p>
        <div class="mt-10 grid grid-cols-1 items-center gap-5 sm:grid-cols-[184px_224px]">
          <button class="h-[58px] rounded-[12px] bg-white px-8 text-xl font-bold text-[#B61B4A] whitespace-nowrap">Explore Deals</button>
          <button class="h-[58px] rounded-[12px] border-[3px] border-solid border-white bg-transparent px-8 text-xl font-bold text-white whitespace-nowrap">Join Club T-Goda</button>
        </div>
      </div>
    </section>

    <section class="mx-6 mt-12 mb-0 flex min-h-[326px] items-center justify-center rounded-[24px] bg-[#E9EBF4] px-6 py-12">
      <div class="mx-auto w-full max-w-[740px] text-center">
        <div class="mx-auto flex h-10 w-10 items-center justify-center text-[#005CBD]">
          <svg viewBox="0 0 32 32" class="h-10 w-10" fill="none" aria-hidden="true">
            <path d="M5 8h22v16H5V8Z" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>
            <path d="m6 9 10 8 10-8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h2 class="mt-6 text-[32px] font-extrabold leading-10 text-[#191C22]">Get Travel Deals Directly</h2>
        <p class="mx-auto mt-5 max-w-[690px] text-[20px] leading-8 text-[#4B5563]">
          Subscribe to our newsletter and get early access to hidden gems and seasonal discounts. No spam, only adventure.
        </p>
        <div class="mx-auto mt-7 grid max-w-[690px] grid-cols-1 gap-4 sm:grid-cols-[1fr_188px]">
          <input class="h-[60px] rounded-[10px] border border-[#6B7FC6] bg-white px-6 text-[18px] text-[#191C22] outline-none placeholder:text-[#6B7280]" placeholder="Your email address" />
          <button class="h-[60px] rounded-[10px] bg-[#005CBD] px-6 text-[18px] font-bold text-white">Subscribe Now</button>
        </div>
        <p class="mt-5 text-sm leading-5 text-[#4B5563]">By subscribing, you agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </section>

   
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import store from '../store'
import hero from '../assets/homepage/Image.png'
import promoBanner from '../assets/homepage/img-promobanner.png'
import firstIcon from '../assets/homepage/first icon.png'
import secondIcon from '../assets/homepage/second icon.png'
import thirdIcon from '../assets/homepage/third icon.png'
import worldIcon from '../assets/homepage/world.jpeg'
import dateIcon from '../assets/homepage/date1.jpeg'

const router = useRouter()
const destinationQuery = ref(store.searchQuery)
const dateQuery = ref(`${store.dateRange.from} - ${store.dateRange.to}`)

function goToSearch(destination = destinationQuery.value) {
  store.searchQuery = destination || 'Bali, Indonesia'
  const [from = 'Oct 12', to = 'Oct 19, 2024'] = dateQuery.value.split(' - ')
  store.dateRange = { from: from.trim(), to: to.trim() }
  router.push({ name: 'SearchResults' })
}

const featureCards = [
  {
    title: 'Best Price Guarantee',
    description: "Find a lower price? We'll match it and give you a voucher for your next trip.",
    icon: firstIcon,
    iconBg: 'bg-[#CFE0F6]'
  },
  {
    title: '24/7 Global Support',
    description: 'Our world-class support team is here to help you anywhere, anytime in 40+ languages.',
    icon: secondIcon,
    iconBg: 'bg-[#F6CCD9]'
  },
  {
    title: 'Flexible Booking',
    description: 'Life happens. Most of our properties offer free cancellation for peace of mind.',
    icon: thirdIcon,
    iconBg: 'bg-[#EDD9B4]'
  }
]

const destinationCards = [
  { city: 'Bangkok', country: 'Thailand', price: 120, imageAlias: 'thailand' },
  { city: 'Tokyo', country: 'Japan', price: 250, imageAlias: 'japan' },
  { city: 'Paris', country: 'France', price: 180, imageAlias: 'paris' },
  { city: 'London', country: 'UK', price: 210, imageAlias: 'london' }
]

// Load all images from assets folder (Vite) and expose as URLs
const images = import.meta.glob('../assets/homepage/*.{jpg,jpeg,png,webp,svg}', { eager: true, query: '?url', import: 'default' })
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
