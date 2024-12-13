import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

// Views for your pages
import HomeView from '../views/HomeView.vue'
import ApplicationView from '@/views/ApplicationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/app',
      name: 'application',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'main',
          component: ApplicationView,
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: ApplicationView,
        },
        {
          path: '/profile',
          name: 'profile',
          component: ApplicationView,
        },
      ],
    },
  ],
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = true // Replace with your auth logic
  if (to.path !== '/' && !isAuthenticated) {
    next('/') // Redirect to login if not authenticated
  } else {
    next() // Proceed to the route
  }
})

export default router
