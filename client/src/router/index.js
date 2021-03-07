import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import('../views/Jobs.vue'),
  },
  {
    path: '/job/edit/:id?',
    name: 'Edit',
    component: () => import('../views/JobEdit.vue'),
  },
  {
    path: '/job/:id',
    name: 'Job-Desc',
    component: () => import('../views/JobDetails.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
