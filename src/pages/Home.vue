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

    <section class="px-6 py-12 mt-10">
      <div class="flex items-end justify-between mb-6">
        <div>
          <h2 class="text-2xl font-bold">Trending Destinations</h2>
          <p class="text-sm text-gray-600">Popular places our customers love</p>
        </div>
        <a class="text-indigo-600 font-semibold">See all</a>
      </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="(d, idx) in popular" :key="d.city + idx" class="rounded-xl overflow-hidden relative h-[376px] bg-gray-200">
          <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${imageForCity(d.city)})` }"></div>
          <div class="absolute left-4 bottom-3 bg-white/90 px-3 py-1 rounded-full">
            <div class="font-bold">{{ d.city }}</div>
            <div class="text-xs text-gray-600">Starting from ${{ Math.floor(Math.random()*200+80) }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-6 my-12 rounded-3xl bg-[#B61B4A] text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="max-w-md">
        <h2 class="text-3xl font-extrabold">Special Offers — Book Today</h2>
        <p class="mt-2 text-white/90">Limited-time deals on flights and hotels.</p>
        <div class="mt-4 flex gap-4">
          <button class="bg-white text-[#B61B4A] px-6 py-3 rounded-lg font-bold">Learn more</button>
          <button class="border border-white text-white px-6 py-3 rounded-lg">Get the deal</button>
        </div>
      </div>
      <div class="w-80 h-80 bg-black/10 rounded-lg hidden md:block"></div>
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
import mock from '../data/mockHotels'
import hero from '../assets/Image.png'

// build city counts
const cityCounts = {}
mock.forEach(h => {
  const city = (h.location && h.location.city) || h.city || 'Unknown'
  if (!cityCounts[city]) cityCounts[city] = { city, count: 0 }
  cityCounts[city].count += 1
})

const popular = Object.values(cityCounts).sort((a, b) => b.count - a.count).slice(0, 8)

// Load all images from assets folder (Vite) and expose as URLs
const images = import.meta.glob('../assets/*.{jpg,jpeg,png,webp,svg}', { eager: true, as: 'url' })
const imageKeys = Object.keys(images)

function slugify(text = '') {
  return text.toString().toLowerCase().replace(/[^a-z0-9]/g, '')
}

function imageForCity(city) {
  if (!city) return '/static/dest-placeholder.jpg'
  const slug = slugify(city)
  // find a matching asset filename that contains the city slug
  const match = imageKeys.find(k => k.toLowerCase().includes(slug))
  return match ? images[match] : '/static/dest-placeholder.jpg'
}

</script>

<style scoped>
/* Home Page */
.home-page{position:relative;width:100%;min-height:100vh;background:linear-gradient(0deg,#F8F9FA,#F8F9FA),#FFFFFF;padding-top:65px}

/* Hero */
.hero{position:relative;height:520px;margin:40px;border-radius:16px;display:flex;align-items:center;justify-content:center}
.hero__content{width:768px;max-width:800px;text-align:center;color:#fff;z-index:1}
.hero__title{font-family:'Plus Jakarta Sans';font-weight:800;font-size:60px;line-height:60px;letter-spacing:-1.5px;margin:0}
.hero__subtitle{font-weight:500;font-size:20px;line-height:28px;margin-top:12px;color:rgba(255,255,255,0.9)}
.hero__search{display:flex;gap:8px;margin-top:24px;background:#fff;border-radius:12px;padding:8px;align-items:center;justify-content:center}
.search__field{display:flex;align-items:center;padding:0 12px;background:#E9E9E9;border-radius:8px;height:52px;flex:1}
.search__icon{margin-right:8px}
.search__button{padding:12px 32px;background:#005CBD;color:#fff;border-radius:8px;border:none}

/* Why choose */
.why-choose{display:flex;gap:24px;padding:48px 40px}
.feature{background:#E9E9E9;border-radius:12px;padding:24px;text-align:center;flex:1}
.feature .icon{width:48px;height:48px;border-radius:9999px;margin:0 auto 12px;background:rgba(83,146,249,0.2)}
.feature h3{font-weight:700;margin:0 0 8px}
.feature p{color:#424753;margin:0}

/* Trending */
.trending{padding:48px 40px}
.trending__header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:24px}
.trending__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.destination{border-radius:16px;overflow:hidden;position:relative;height:376px;background:#ddd}
.destination__image{background-size:cover;background-position:center;height:100%}
.destination__meta{position:absolute;left:16px;bottom:13px;background:rgba(255,255,255,0.9);padding:3.5px 12px;border-radius:9999px}
.destination__name{font-weight:700}
.destination__price{font-size:12px;color:#424753}

/* Promo */
.promo{margin:40px;border-radius:24px;padding:40px;background:#B61B4A;color:#fff;display:flex;align-items:center;justify-content:center}
.promo__actions{margin-top:16px;display:flex;gap:16px}
.btn--light{background:#fff;color:#B61B4A;padding:13.5px 32px;border-radius:12px}
.btn--outline{background:transparent;border:2px solid #fff;color:#fff;padding:12px 32px;border-radius:12px}

/* Newsletter */
.newsletter{background:#E7E8F1;border-radius:24px;padding:64px 264px;margin:40px}
.newsletter__inner{text-align:center}
.newsletter__form{display:flex;gap:12px;margin-top:16px;justify-content:center}
.newsletter__form input{padding:17px 24px;border:1px solid #6B7FC6;border-radius:12px;width:480px}
.newsletter__form button{background:#005CBD;color:#fff;padding:16px 32px;border-radius:12px;border:none}

/* Footer */
.site-footer{position:relative;height:260px;background:#F8FAFC;border-top:1px solid #E2E8F0;margin-top:40px}
.footer__inner{max-width:1280px;margin:48px auto;padding:0 24px;display:flex;justify-content:space-between;align-items:flex-start}
.footer__col .brand{font-weight:700;font-size:20px;margin-bottom:8px}
.footer__cols{display:flex;gap:32px}
.footer__cols .col h4{font-weight:700;margin-bottom:8px}
.footer__cols .col a{display:block;color:#64748B;margin-bottom:8px}

/* Responsive */
@media (max-width:1024px){
  .trending__grid{grid-template-columns:repeat(2,1fr)}
  .newsletter{padding:48px}
}
@media (max-width:640px){
  .trending__grid{grid-template-columns:repeat(1,1fr)}
  .hero__title{font-size:36px}
  .hero__search{flex-direction:column;padding:12px}
  .newsletter{padding:32px}
  .footer__inner{flex-direction:column;gap:24px}
}
</style>
