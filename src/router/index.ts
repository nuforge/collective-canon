import { createRouter, createWebHistory } from 'vue-router'
import TimelineManager from '@/views/TimelineManager.vue'
import AdmiralDashboard from '@/views/AdmiralDashboard.vue'
import GalaxyMap from '@/components/GalaxyMap.vue'

// Views for your pages
import HomeView from '../views/HomeView.vue'
import ApplicationView from '@/views/ApplicationView.vue'
import DashboardView from '@/views/DashboardView.vue'
import AboutView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/timelines',
    },
    {
      path: '/timelines',
      name: 'timelines',
      component: TimelineManager,
    },
    {
      path: '/admiral',
      name: 'admiral',
      component: AdmiralDashboard,
    },
    {
      path: '/galaxy',
      name: 'galaxy',
      component: GalaxyMap,
    },
    {
      path: '/app',
      name: 'application',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ApplicationView,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardView,
        },
        {
          path: '/About',
          name: 'about',
          component: AboutView,
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
