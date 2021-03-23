<template>
	<div>
		<div style="height:72px"></div>
		<div style="height:calc(100vh - 72px)">
			<div class="maxWidthPage grid grid-cols-5 h-full">
				<!-- FIRST COLUMN -->
				<div class="col-span-3 h-full p-10 px-16">
					<h1>Credit Card Details</h1>
					<div id="card-number"></div>
					<div id="card-expiry"></div>
					<div id="card-cvc"></div>
				</div>

				<!-- SECOND COLUMN -->
				<div class="col-span-2 bg-gray-100 h-full p-10 px-16">
					<div class="flex flex-col gap-y-4">
						<div v-for="(item, i) in this.$store.state.cart" :key="i">
							<router-link :to="`/${item.productType}/${item.gender}/${item.id}`">
								<div class="flex flex-row items-center" v-on:click="$emit('toggle-cart')">
									<img :src="item.imageURL" class="h-10" alt="Glasses" >
									<p class="font-semibold text-2xl flex-1 ml-4">{{item.model}}</p>
									<p class="font-bold">{{format(item.price ? item.price : 0)}}</p>
								</div>
							</router-link>
						</div>
					</div>

					<hr>
					<p>**this doesn't work yet**</p>
					<div class="flex flex-row w-full gap-x-2">
						<input type="text" name="" class="flex-1 p-3 rounded-lg noOutline border-2 border-gray-300" id="" placeholder="Discount Code">
						<button class="rounded-lg p-3 px-8 font-bold text-white bg-blue-400 noOutline focus:ring">Apply</button>
					</div>
					<hr>
					<div class="">
						<div class="flex flex-row justify-between">
							<p class="font-semibold text-xl">Subtotal</p>
							<div class="flex flex-row items-end"><span class="text-lg font-semibold ml-2">{{format(subtotal)}}</span></div>
						</div>
						<div class="flex flex-row justify-between">
							<p class="font-semibold text-xl">Taxes</p>
							<div class="flex flex-row items-end"><span class="text-lg font-semibold ml-2">{{format(taxes)}}</span></div>
						</div>
					</div>
					<hr>
					<div class="flex flex-row justify-between items-end">
						<p class="font-semibold text-xl">Total</p>
						<div class="flex flex-row items-end"><span>CAD</span><span class="text-3xl font-semibold ml-2">{{format(total)}}</span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import product from '@/types/product'
import {loadStripe} from '@stripe/stripe-js';

//STRIPE TYPES for Typescript
import {StripeCardNumberElement, StripeCardExpiryElement, StripeCardCvcElement} from '@stripe/stripe-js'

export default Vue.extend({
	name:"Checkout",
	data: function(){
		return{
			subtotal:0,
			taxes:0,
			total:0,

			//card details
			cardNumber:{} as StripeCardNumberElement,
			cardExpiry:{} as StripeCardExpiryElement,
			cardCvc:{} as StripeCardCvcElement
		}
	},
	created(){
		this.subtotal = this.$store.state.cart.reduce((acc:number, cur:product) => {return acc + cur.price}, 0)
		this.taxes = this.subtotal * 0.13
		this.total = this.subtotal + this.taxes
	},
	async mounted(){
		const stripe = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
		if(!stripe){
			console.log("STRIPE LOADING ERROR")
			return
		}

		const style = {
			base: {
				fontSize: '14px',
				'::placeholder': {
					color: '#aab7c4',
				},
			},
			invalid: {
				color: '#fa755a',
				iconColor: '#fa755a',
			},
		};

		//STRIPE MANAGEMENT
		const elements = stripe.elements()
		this.cardNumber = elements.create('cardNumber', { style });
		this.cardNumber.mount('#card-number');
		this.cardExpiry = elements.create('cardExpiry', { style });
		this.cardExpiry.mount('#card-expiry');
		this.cardCvc = elements.create('cardCvc', { style });
		this.cardCvc.mount('#card-cvc');
	},
	methods:{
		format(num:number){
			return num.toLocaleString('en-US', { style: 'currency', currency: 'USD', })
		}
	}
})
</script>

<style scoped>
hr{
	margin: 2rem 0;
	border-color: #949494;
}
</style>