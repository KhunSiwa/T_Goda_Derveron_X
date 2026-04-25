<template>
  <section class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2">
        <Gallery :images="(hotel.images && hotel.images.length) ? hotel.images : [hotel.image]" />
        <div class="mt-4 bg-white p-6 rounded shadow">
          <h1 class="text-2xl font-bold">{{ hotel.name }}</h1>
          <div class="text-gray-600">{{ hotel.location.city }}, {{ hotel.location.country }}</div>
          <p class="mt-4 text-gray-700">{{ hotel.description }}</p>

          <h3 class="mt-6 font-semibold">Amenities</h3>
          <div class="flex flex-wrap gap-3 mt-2">
            <span v-for="(a, i) in hotel.amenities" :key="i" class="px-3 py-1 bg-gray-100 rounded">{{ a }}</span>
          </div>

          <h3 class="mt-6 font-semibold">Reviews</h3>
          <div class="space-y-4 mt-3">
            <div v-for="r in hotel.reviews" :key="r.id" class="p-3 bg-gray-50 rounded">
              <div class="font-semibold">{{ r.user }} <span class="text-sm text-gray-500">— {{ r.rating }}★</span></div>
              <div class="text-gray-600">{{ r.comment }}</div>
            </div>
          </div>
        </div>
      </div>

      <aside class="lg:col-span-1">
        <div class="bg-white p-6 rounded shadow">
          <h4 class="font-semibold">Rooms</h4>
          <table class="w-full mt-4 text-left">
            <thead>
              <tr class="text-sm text-gray-600">
                <th>Room</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="room in hotel.rooms" :key="room.type" class="border-t">
                <td class="py-3">{{ room.type }} <div class="text-xs text-green-600">{{ room.benefits.join(' · ') }}</div></td>
                <td class="py-3 font-semibold">${{ room.price }}</td>
                <td class="py-3"><button class="bg-indigo-600 text-white px-3 py-1 rounded hover:opacity-90">Book Now</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import mock from '../data/mockHotels'
import Gallery from '../components/Gallery.vue'

const route = useRoute()
const id = route.params.id

// Find hotel by id from mock data
const hotel = computed(() => mock.find(h => String(h.id) === String(id)) || mock[0])
</script>
