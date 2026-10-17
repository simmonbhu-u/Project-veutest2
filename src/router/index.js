import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
  
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
  
    component: () => import('../views/contact.vue')
  },
  {
    path: '/grade',
    name: 'grade',
  
    component: () => import('../views/grade.vue')
  },
  {
    path: '/gold',
    name: 'gold',
  
    component: () => import('../views/API_gold.vue')
   },
  {
    path: '/product_api',
    name: 'product_api',
  
    component: () => import('../views/product_api.vue')
   },
   {
    path: '/table_product',
    name: 'table_product',
  
    component: () => import('../views/table_product.vue')
   },
   {
    path: '/Users',
    name: 'Users',
  
    component: () => import('../views/Users.vue')
   },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
