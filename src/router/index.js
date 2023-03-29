// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'maps',
        name: 'map',
        component: () => import('@/views/Maps.vue')
      },
      {
        path: 'map-demo',
        name: 'mapdemo',
        component: () => import('@/views/MapDemo.vue')
      },
      {
        path: 'map-demo-two',
        name: 'mapdemotwo',
        component: () => import('@/views/MapDemoTwo.vue')
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue')
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
