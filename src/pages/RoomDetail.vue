<template>
  <main class="min-h-screen bg-[#F8F9FA] pt-20 pb-16 text-[#191C22]">
    <section class="mx-auto max-w-[1280px] px-6">
      <div class="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="text-base font-semibold text-[#005CBD]">Room Detail</p>
          <h1 class="mt-2 text-[42px] font-extrabold leading-tight">{{ hotel.name }}</h1>
          <p class="mt-2 flex items-center text-xl text-[#4B5563]">
            <span class="mr-2 text-[#005CBD]">Location:</span>
            {{ hotel.location.city }}, {{ hotel.location.country }} - Rating {{ hotel.rating }}
          </p>
        </div>
        <div class="rounded-[14px] bg-white px-6 py-4 text-right shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
          <p class="text-sm text-[#64748B]">Starts from</p>
          <p class="text-[36px] font-extrabold leading-none text-[#B61B4A]">
            ${{ hotel.discountedPrice ?? hotel.price }}
            <span class="text-base font-medium text-[#4B5563]">/night</span>
          </p>
        </div>
      </div>

      <section class="grid gap-4 lg:grid-cols-[1fr_420px]">
        <div class="overflow-hidden rounded-[24px] bg-white shadow-[0_18px_38px_rgba(15,23,42,0.10)]">
          <img :src="galleryImages[0]" :alt="`${hotel.name} main room`" class="h-[360px] w-full object-cover" />
          <div class="grid grid-cols-2 gap-0 border-y border-white">
            <img :src="galleryImages[1]" :alt="`${hotel.name} room view`" class="h-[220px] w-full object-cover" />
            <img :src="galleryImages[2]" :alt="`${hotel.name} bathroom`" class="h-[220px] w-full object-cover border-l border-white" />
          </div>
          <img :src="galleryImages[3]" :alt="`${hotel.name} pool`" class="h-[300px] w-full object-cover" />
        </div>

        <aside class="rounded-[24px] bg-white p-7 shadow-[0_18px_38px_rgba(15,23,42,0.08)]">
          <h2 class="text-2xl font-extrabold">Choose Your Room</h2>
          <p class="mt-2 text-[#64748B]">Flexible rates with instant confirmation.</p>

          <div class="mt-7 space-y-4">
            <article v-for="room in hotel.rooms" :key="room.type" class="rounded-[16px] border border-[#E2E8F0] p-5">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h3 class="text-xl font-bold">{{ room.type }}</h3>
                  <p class="mt-2 text-sm text-green-700">{{ room.benefits.join(' - ') }}</p>
                </div>
                <p class="text-2xl font-extrabold text-[#B61B4A]">${{ room.price }}</p>
              </div>
              <button class="mt-5 h-12 w-full rounded-[10px] bg-[#005CBD] text-base font-bold text-white">Book Now</button>
            </article>
          </div>
        </aside>
      </section>

      <section class="mt-8 grid gap-6 lg:grid-cols-[1fr_420px]">
        <div class="rounded-[24px] bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
          <h2 class="text-2xl font-extrabold">About this stay</h2>
          <p class="mt-4 text-lg leading-8 text-[#4B5563]">{{ hotel.description }}</p>

          <h3 class="mt-8 text-xl font-bold">Amenities</h3>
          <div class="mt-4 flex flex-wrap gap-3">
            <span v-for="amenity in hotel.amenities" :key="amenity" class="rounded-full bg-[#EFF3FA] px-4 py-2 text-base font-semibold text-[#424753]">
              {{ amenity }}
            </span>
          </div>
        </div>

        <div class="rounded-[24px] bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
          <h2 class="text-2xl font-extrabold">Guest Reviews</h2>
          <div class="mt-5 space-y-4">
            <article v-for="review in hotel.reviews" :key="review.id" class="rounded-[14px] bg-[#F8F9FA] p-4">
              <div class="flex items-center justify-between">
                <p class="font-bold">{{ review.user }}</p>
                <p class="text-sm font-semibold text-[#E2B12F]">{{ review.rating }} stars</p>
              </div>
              <p class="mt-2 text-[#4B5563]">{{ review.comment }}</p>
            </article>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import mock from '../data/mockHotels'

const route = useRoute()
const id = route.params.id

const hotel = computed(() => mock.find(h => String(h.id) === String(id)) || mock[0])

const fallbackImages = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=80'
]

const galleryImages = computed(() => {
  const images = [hotel.value.image, ...(hotel.value.images || [])].filter(Boolean)
  return Array.from({ length: 4 }, (_, index) => images[index] || fallbackImages[index])
})
</script>
