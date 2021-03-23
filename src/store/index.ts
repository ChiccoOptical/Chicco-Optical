import Vue from 'vue'
import Vuex from 'vuex'
import product from '@/types/product'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		routeLoaded:false,
		cart:[] as product[]
	},
	mutations: {
		addToCart(state, payload: product){
			state.cart.push(payload)
		}
	},
	actions: {
	},
	modules: {
	}
})
