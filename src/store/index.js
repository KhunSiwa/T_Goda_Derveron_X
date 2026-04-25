import { reactive } from 'vue'

// Simple global reactive store for search and filters
const store = reactive({
  searchQuery: '',
  dateRange: { from: '', to: '' },
  filters: {
    minPrice: 0,
    maxPrice: 500,
    rating: 0
  }
})

export default store
