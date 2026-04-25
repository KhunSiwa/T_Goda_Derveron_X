<template>
  <section class="container mx-auto px-4 py-8">
    <div class="flex flex-col lg:flex-row gap-6">
      <aside class="w-full lg:w-1/4">
        <FilterSidebar />
      </aside>

      <div class="w-full lg:w-3/4">
        <div class="mb-4">
          <div class="text-sm text-gray-600">Showing {{ filtered.length }} stays</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <HotelCard v-for="h in filtered" :key="h.id" :hotel="h" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import store from '../store'
import mock from '../data/mockHotels'
import FilterSidebar from '../components/FilterSidebar.vue'
import HotelCard from '../components/HotelCard.vue'

// Computed filtered list reacting to store.searchQuery and store.filters
const filtered = computed(() => {
  const q = store.searchQuery.trim().toLowerCase()
  return mock.filter(h => {
    const city = (h.location && h.location.city) || h.city || ''
    const matchesQuery = !q || h.name.toLowerCase().includes(q) || city.toLowerCase().includes(q)
    const price = h.discountedPrice != null ? h.discountedPrice : h.price
    const matchesMin = price >= (store.filters.minPrice || 0)
    const matchesMax = price <= (store.filters.maxPrice || Infinity)
    const matchesRating = h.rating >= store.filters.rating
    return matchesQuery && matchesMin && matchesMax && matchesRating
  })
})
</script>
