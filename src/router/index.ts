import Vue from 'vue'
import Vuex from '@/store'

// VUE ROUTER
import VueRouter, { RouteConfig } from 'vue-router'
Vue.use(VueRouter)

// PAGES
import Home from '../pages/Home.vue'
const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta:{
			title:'Home'
		}
	},

	// ABOUT PAGE
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue'),
		meta: {
			title: 'About'
		}
	},

	// CONTACT PAGE
	{
		path: '/contact',
		name: 'Contact',
		component: () => import('../pages/Contact.vue'),
		meta: {
			title: 'Contact'
		}
	},

	// EYE EXAMS
	{
		path: '/exams',
		name: 'Eye Exams',
		component: () => import('../pages/Exams.vue'),
		meta: {
			title: 'Eye Exams'
		}
	},

	// Frames
	{
		path:'/frames',
		name: 'Frames',
		component: () => import('../pages/ProductList.vue'),
		meta: {
			title: 'Glasses'
		}
	},
	{
		path: '/frames/men',
		name: 'Men Frames',
		component: () => import('../pages/ProductList.vue'),
		meta: {
			title: 'Mens Glasses'
		}
	},
	{
		path: '/frames/men/:id',
		name: 'Mens Frames Product',
		component: () => import('../pages/ProductListing.vue'),
	},
	{
		path: '/frames/women',
		name: 'Women Frames',
		component: () => import('../pages/ProductList.vue'),
		meta: {
			title: 'Womens Glasses'
		}
	},
	{
		path: '/frames/women/:id',
		name: 'Womens Frames Product',
		component: () => import('../pages/ProductListing.vue'),
	},
	{
		path: '/frames/children',
		name: 'Children Frames',
		component: () => import('../pages/ProductList.vue'),
		meta: {
			title: 'Chlidrens Glasses'
		}
	},
	{
		path: '/frames/children/:id',
		name: 'Childrens Frames Product',
		component: () => import('../pages/ProductListing.vue'),
	},

	//LENS
	{
		path: '/lenses',
		name: 'Lenses',
		component: () => import('../pages/Lens.vue')
	},
	
	// SUNGLASSES
	{
		path:'/sunglasses',
		name:'Sunglasses',
		component: () => import('../pages/ProductList.vue'),
		meta: {
			title: 'Sunglasses'
		}
	},
	{
		path: '/sunglasses/men',
		name: 'Men Sunglasses',
		component: () => import('../pages/ProductList.vue'),
		meta: {
			title: 'Mens Sunglasses'
		}
	},
	{
		path: '/sunglasses/men/:id',
		name: 'Mens Sunglasses Product',
		component: () => import('../pages/ProductListing.vue'),
	},
	{
		path: '/sunglasses/women',
		name: 'Women Sunglasses',
		component: () => import('../pages/ProductList.vue'),
		meta: {
			title: 'Womens Sunglasses'
		}
	},
	{
		path: '/sunglasses/women/:id',
		name: 'Womens Sunglasses Product',
		component: () => import('../pages/ProductListing.vue'),
	},
	{
		path: '/sunglasses/children',
		name: 'Children Sunglasses',
		component: () => import('../pages/ProductList.vue'),
		meta: {
			title: 'Chlidrens Glasses'
		}
	},
	{
		path: '/sunglasses/children/:id',
		name: 'Childrens Sunglasses Product',
		component: () => import('../pages/ProductListing.vue'),
	},

	// CONTACT LENSES
	{
		path: '/contactlenses',
		name: 'ContactLenses',
		component: () => import('../pages/ContactLenses.vue'),
		meta: {
			title: 'Contact Lenses'
		}
	},
	

	// 404 PAGE
	{
		path: "*", component: () => import('../pages/PageNotFound.vue'),
		meta: {
			title: '404'
		}
	}
]

// APPLY AND EXPORT
const router = new VueRouter({
	routes,
	mode:'history',
	scrollBehavior() {
        window.scrollTo(0, 0);
    }
})

router.beforeEach((to, from, next) => {
	document.title = to.meta.title ? to.meta.title + " | Chicco Optical" : "Chicco Optical"
	document.getElementById('metaDescription')?.setAttribute('content', to.meta.description)
	Vuex.state.routeLoaded = false;
	next()
})

router.afterEach(()=>{
	Vuex.state.routeLoaded = true;
})

export default router
