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

	// GLASSES
	{
		path:'/glasses',
		name: 'Glasses',
		component: () => import('../pages/ProductList.vue'),
		meta: {
			title: 'Glasses'
		}
	},
	{
		path: '/glasses/men',
		name: 'Men Glasses',
		component: () => import('../pages/ProductList.vue'),
		meta: {
			title: 'Mens Glasses'
		}
	},
	{
		path: '/glasses/men/:id',
		name: 'Mens Glasses Product',
		component: () => import('../pages/ProductListing.vue'),
	},
	{
		path: '/glasses/women',
		name: 'Women Glasses',
		component: () => import('../pages/ProductList.vue'),
		meta: {
			title: 'Womens Glasses'
		}
	},
	{
		path: '/glasses/women/:id',
		name: 'Womens Glasses Product',
		component: () => import('../pages/ProductListing.vue'),
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
		name: 'Women Glasses',
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

	// CONTACT LENSES
	{
		path: '/contactlenses',
		name: 'ContactLenses',
		component: () => import('../pages/ProductList.vue'),
		meta: {
			title: 'Contact Lenses'
		}
	},
	{
		path: '/contactlenses/men',
		name: 'Men Contact Lenses',
		component: () => import('../pages/ProductList.vue'),
		meta: {
			title: 'Mens Glasses'
		}
	},
	{
		path: '/contactlenses/men/:id',
		name: 'Mens Contact Lenses Product',
		component: () => import('../pages/ProductListing.vue'),
	},
	{
		path: '/contactlenses/women',
		name: 'Women Contact Lenses',
		component: () => import('../pages/ProductList.vue'),
		meta: {
			title: 'Womens Glasses'
		}
	},
	{
		path: '/contactlenses/women/:id',
		name: 'Womens Contact Lenses Product',
		component: () => import('../pages/ProductListing.vue'),
	},

	// 404 PAGE
	{
		path: "*", component: () => import('../pages/PageNotFound.vue'),
		meta: {
			title: '404'
		}}
]

// APPLY AND EXPORT
const router = new VueRouter({
	routes,
	mode:'history'
})

router.beforeEach((to, from, next) => {
	document.title= "Chicco Optical | " + to.meta.title
	document.getElementById('metaDescription')?.setAttribute('content', to.meta.description)
	next()
})

export default router
