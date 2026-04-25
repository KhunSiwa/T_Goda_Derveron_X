<template>
  <div class="bg-white rounded shadow overflow-hidden hover:shadow-lg transition">
    <img :src="hotel.image" class="w-full h-44 object-cover" />
    <div class="p-4">
      <div class="flex items-center justify-between">
        <div>
          <div class="font-semibold">{{ hotel.name }}</div>
          <div class="text-sm text-gray-600">{{ (hotel.location && hotel.location.city) || hotel.city || 'Unknown' }}</div>
        </div>
        <div class="text-right">
            <div class="font-bold text-indigo-600">${{ hotel.discountedPrice ?? hotel.price }} <span class="text-xs font-normal text-gray-500">/ night</span></div>
            <div v-if="hotel.discountedPrice && hotel.price && hotel.price > hotel.discountedPrice" class="text-xs line-through text-gray-400">${{ hotel.price }}</div>
        </div>
      </div>
      <div class="mt-3 flex items-center justify-between">
          <div class="text-sm text-yellow-500">{{ hotel.rating }} ★</div>
        <router-link :to="`/hotel/${hotel.id}`" class="text-indigo-600 hover:underline">View</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// HotelCard is a presentational component showing hotel summary
// It expects a `hotel` object and uses a router link to detail page.
import { defineProps } from 'vue'
const props = defineProps({ hotel: Object })
</script>
