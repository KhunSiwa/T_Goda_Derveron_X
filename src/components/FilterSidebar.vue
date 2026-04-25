<template>
  <div class="bg-white p-4 rounded shadow">
    <h4 class="font-semibold mb-3">Filters</h4>
    <div>
      <label class="text-sm text-gray-600">Price range</label>
      <div class="flex gap-2 mt-2">
        <input type="number" min="0" v-model.number="store.filters.minPrice" class="w-1/2 border rounded px-2 py-1" placeholder="Min" />
        <input type="number" min="0" v-model.number="store.filters.maxPrice" class="w-1/2 border rounded px-2 py-1" placeholder="Max" />
      </div>
      <div class="text-xs text-gray-500 mt-1">Showing up to ${{ store.filters.maxPrice }}</div>
    </div>

    <div class="mt-4">
      <label class="text-sm text-gray-600">Minimum rating</label>
      <select v-model.number="store.filters.rating" class="w-full border rounded mt-2 px-2 py-1">
        <option :value="0">Any</option>
        <option :value="3">3★+</option>
        <option :value="4">4★+</option>
        <option :value="4.5">4.5★+</option>
      </select>
    </div>
  </div>
</template>

<script setup>
// FilterSidebar binds directly to the reactive store so changes
// propagate immediately to computed filters in SearchResults.
import store from '../store'
</script>
