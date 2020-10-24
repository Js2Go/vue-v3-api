import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about.vue')
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
