import Vuex from 'vuex'
import Product, {ProductOrder} from '@/types/product'
import createPersistedState from 'vuex-persistedstate'

const updatePrice = (cart: Product[]): number[] => {
	const taxRate = 0.13
	const subtotal = cart.reduce((acc: number, cur: Product) => { return acc + cur.price }, 0)
	const taxes = Math.round(subtotal * taxRate * 100) / 100
	const total = Math.round((subtotal + taxes) * 100) / 100
	return [subtotal, taxes, total]
}


export default new Vuex.Store({
	state: {
		routeLoaded:false,
		cart: [] as Product[],

		subtotal: 0,
		taxes: 0,
		total: 0,
	},
	mutations: {
		//CART
		addToCart(state, payload: Product){
			state.cart.push(payload)
			//Recalculate Prices
			const yeet = updatePrice(state.cart)
			state.subtotal = yeet[0]
			state.taxes = yeet[1]
			state.total = yeet[2]
		},
		removeFromCart(state, payload:number){
			state.cart.splice(payload, 1);

			//Recalculate Prices
			const yeet = updatePrice(state.cart)
			state.subtotal = yeet[0]
			state.taxes = yeet[1]
			state.total = yeet[2]
		},

		//ROUTER
		routeLoaded(state, payload: boolean){
			state.routeLoaded = payload
		},
		updatePrice(state){
			const yeet = updatePrice(state.cart)
			state.subtotal = yeet[0]
			state.taxes = yeet[1]
			state.total = yeet[2]
		}
	},
	actions: {
	},
	modules: {
	},
	getters:{
		orderCart: (state) => {
		return state.cart.map((item: Product) => {
			const { id, gender, productType, ...d } = { ...item }
			return { id, gender, productType } as unknown as ProductOrder
		})},

	},

	//PERSISTED STATE AFTER PAYING
	plugins:[createPersistedState()]
});
