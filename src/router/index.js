import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import SearchResults from '../pages/SearchResults.vue'
import HotelDetail from '../pages/HotelDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/search', name: 'SearchResults', component: SearchResults },
  { path: '/hotel/:id', name: 'HotelDetail', component: HotelDetail, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
