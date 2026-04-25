import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import SearchResults from '../pages/SearchResults.vue'
import RoomDetail from '../pages/RoomDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/search', name: 'SearchResults', component: SearchResults },
  { path: '/hotel/:id', name: 'RoomDetail', component: RoomDetail, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
