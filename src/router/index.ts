import Vue from 'vue'

// VUE ROUTER
import VueRouter, { RouteConfig } from 'vue-router'
Vue.use(VueRouter)

// PAGES
import Home from '../pages/Home.vue'
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../pages/Contact.vue')
  },
  {
    path:'/glasses',
    name: 'Glasses',
    component: () => import('../pages/ProductList.vue')
  },
  {
    path:'/sunglasses',
    name:'Sunglasses',
    component: () => import('../pages/ProductList.vue')
  },
  {
    path: '/contactLenses',
    name: 'Contact Lenses',
    component: () => import('../pages/ProductList.vue')
  },
  {
    path:'/exams',
    name: 'Eye Exams',
    component: () => import('../pages/Exams.vue')
  },
  { path: "*", component: () => import('../pages/PageNotFound.vue')}
]

// APPLY AND EXPORT
const router = new VueRouter({
  routes,
  mode:'history'
})
export default router
