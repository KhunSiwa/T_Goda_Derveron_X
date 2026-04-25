<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <div class="flex flex-col md:flex-row gap-3">
        <input v-model="localDestination" @input="onInput" placeholder="Where are you going?" class="flex-1 border rounded px-3 py-2" />
        <input type="date" v-model="checkIn" class="border rounded px-3 py-2" aria-label="check-in" />
        <input type="date" v-model="checkOut" class="border rounded px-3 py-2" aria-label="check-out" />
        <button @click="onSearch" class="bg-indigo-600 text-white px-4 py-2 rounded">Search</button>
      </div>
  </div>
</template>

<script setup>
// SearchBar handles local input and syncs it to the simple global store.
// This enables real-time filtering on the search results page via reactivity.
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import store from '../store'

const router = useRouter()
// Local inputs mapped to the global `store` for app-wide search state
const localDestination = ref(store.searchQuery)
const checkIn = ref(store.dateRange.from)
const checkOut = ref(store.dateRange.to)

// Keep global store in sync with local inputs for real-time filtering
watch(localDestination, val => { store.searchQuery = val })
watch(checkIn, val => { store.dateRange.from = val })
watch(checkOut, val => { store.dateRange.to = val })

const onInput = () => {
  // No-op: watchers sync values to store
}

const onSearch = () => {
  // Ensure dates are saved to store then navigate to results
  store.dateRange.from = checkIn.value
  store.dateRange.to = checkOut.value
  router.push({ name: 'SearchResults' })
}
</script>
