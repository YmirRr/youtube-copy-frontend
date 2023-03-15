import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/homeIndex.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */'@/views/login/loginIndex.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
