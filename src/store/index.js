import { reactive } from 'vue'

// Simple global reactive store for search and filters
const store = reactive({
  searchQuery: 'Bali, Indonesia',
  dateRange: { from: 'Oct 12', to: 'Oct 19, 2024' },
  travelers: '2 Adults, 1 Room',
  filters: {
    minPrice: 0,
    maxPrice: 500,
    rating: 0
  }
})

export default store
