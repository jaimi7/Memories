import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import AddMemoryPage from '../pages/AddMemoryPage.vue'
import MemoryDetailsPage from '../pages/MemoryDetailsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/memories',
    name: 'Memories',
    component: () => import('../pages/MemoriesPage.vue')
  },
  {
    path: '/memories/:id',
    name: 'Memory-Details',
    component: () => import('../pages/MemoryDetailsPage.vue')
  },
  {
    path: '/memories/add',
    name: 'Add-Memory',
    component: () => import('../pages/AddMemoryPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
