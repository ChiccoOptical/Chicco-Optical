import Vue from 'vue'
import Vuex from 'vuex'
import product from '@/types/product'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		routeLoaded:false,
		cart:[] as product[]
	},
	mutations: {
		addToCart(state, payload: product){
			state.cart.push(payload)
		},

		removeFromCart(state, payload:number){
			state.cart.splice(payload, 1);
		},
		routeLoaded(state, payload: boolean){
			state.routeLoaded = payload
		}
	},
	actions: {
	},
	modules: {
	},

	plugins:[createPersistedState()]
})
