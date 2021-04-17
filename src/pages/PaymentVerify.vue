<template>
	<div class="w-full h-screen grid place-items-center">
		<!-- CENTER BIT -->
		<div class="bg-blue-400 rounded-lg py-10 px-6 w-1/4 h-3/4 text-white text-center">
		<transition name="fade" mode="out-in">
			<div v-if="!loaded" class="grid place-items-center h-full w-full" key="unloaded">
				<loading-progress
					:progress="0"
					:indeterminate="true"
					size="64"
					rotate
					fillDuration="2"
					rotationDuration="1"
					class="mx-auto"
				/>
			</div>
			<div v-else-if="loaded" key="loaded" class="h-full flex flex-col">
				<!-- LOGO -->
				<img v-if="PI.payment_method_types[0] === 'alipay'" class="h-24 w-24 mx-auto" height="96px" width="96px" src="@/assets/icons/alipay.svg" alt="ALIPAY LOGO">
				<img v-if="PI.payment_method_types[0] === 'card'" class="h-24 w-24 mx-auto" height="96px" width="96px" src="@/assets/icons/credit-card.svg" alt="Credit Card">

				<!-- MAIN TITLE -->
				<h1 class="font-bold text-3xl mt-6 capitalize">{{PI.payment_method_types[0]}} Payment {{info.redirect_status == "succeeded" ? 'Successful' : 'Failed'}}</h1>
				<h2 class="text-xl font-semibold mt-2">Amount Paid: {{format(PI.amount/100)}}</h2>

				<!-- SUCCESS STATE -->
				<div v-if="info.redirect_status == 'succeeded'" class="flex-2 overflow-y-auto scrollBar">
					<h3 class="mt-4 text-2xl font-bold">Items</h3>
					<div>
						<div class="flex flex-row items-center justify-between bg-white rounded-md p-2 text-black mt-2" v-for="(item, i) in cart" :key="i">
							<img :src="item.imageURL" class="h-10" alt="Glasses" >
							<p class="font-semibold text-lg">{{item.model}}</p>
							<p class="font-semibold">{{format(item.price ? item.price : 0)}}</p>
						</div>
					</div>
				</div>
				

				<!-- FAILURE STATE -->
				<div v-if="info.redirect_status == 'failed'">
					<h2 class="mt-4 text-xl font-semibold">Payment Failed. Try Again</h2>
					<p class="m-2 text-md">Specific Reason why failed: {{PI_err.message}}</p>
				</div>
				
				<!-- GO HOME -->
				<div class="flex flex-col justify-end flex-1 mt-2">
					<router-link to="/">
						<div class="flex flex-row items-center justify-center gap-2">
							<p class="text-lg font-bold">Go Home</p>
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
						</div>
					</router-link>
				</div>
			</div>
		</transition>
		</div>
	</div>
</template>

<script lang="ts">
import { loadStripe, PaymentIntent, StripeError} from '@stripe/stripe-js'
import {defineComponent} from 'vue'
import {infoInterface} from '@/types/stripe'
import getProduct from '@/mixins/getProduct'
import Product, { ProductOrder } from '@/types/product'

export default defineComponent({
	data: () => {
		return{
			info:{} as infoInterface,
			PI:{} as PaymentIntent,
			PI_err: {} as StripeError,
			cart:[] as Product[],
			loaded:false
		}
	},
	mixins:[getProduct],
	async beforeMount(){
		//==========STRIPE THINGS==========
		const stripe = await loadStripe('pk_test_51IXE3zJY5AEAzijm3OGvmcJ3bbhltgDPtIeyncJOS5QpDoLgje1k5Yhlu4mgkBTq9frLAhheD53R0M5CdlITtb9L00rDEjM4XV');
		if(!stripe){console.error("STRIPE LOADING ERROR");return}
		this.info = this.$route.query as unknown as infoInterface

		const {paymentIntent, error} = await stripe.retrievePaymentIntent(this.info.payment_intent_client_secret);
		
		//ERROR HANDLING AND GETTING OUT
		if(error){
			this.PI_err = error
			return
		} else if(!paymentIntent){
			console.error("NOT SHOULD BE HERE")
			return
		}
		this.PI = paymentIntent
		const API = 'http://localhost:5001/chicco-optical/us-central1/payments'
		const cartID = await(
			await fetch(`${API}/getCart`, {
				method:"POST",
				body:JSON.stringify({id:paymentIntent.id}),
				headers: {
					"Content-Type": "application/json",
				},
			})
		).json()

		// ==========Product Things==========
		let cart = [] as any[]
		cartID.forEach((a:string) => {
			const litty = JSON.parse(a) as ProductOrder
			cart.push(this.getProductByID(litty.id, litty.productType, litty.gender))
		});
		this.cart = await Promise.all(cart)
		
		//FINISHED!
		this.loaded = true
	},
	methods:{
		//HTML HELPER
		format(num:number){
			return num.toLocaleString('en-US', { style: 'currency', currency: 'USD', })
		},
	}
})
</script>