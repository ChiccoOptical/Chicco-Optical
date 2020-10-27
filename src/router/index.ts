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
  }
]

// APPLY AND EXPORT
const router = new VueRouter({
  routes,
  mode:'history'
})
export default router
