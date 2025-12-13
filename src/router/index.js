import HomeView from '@/views/HomeView.vue';
import ProductView from '@/views/ProductView.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/rest',
      component: ProductView,
    },
  ],
})

export default router
