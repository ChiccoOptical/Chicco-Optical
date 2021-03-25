<template>
	<div>
		<div style="height:72px"></div>
		<div style="height:calc(100vh - 72px)">
			<div class="maxWidthPage grid grid-cols-5 h-full">
				<!-- FIRST COLUMN -->
				<div class="col-span-3 h-full py-20 px-16 flex flex-col">
					<h1 class="text-2xl font-bold mb-4">Credit Card Details</h1>
					<div id="card-number" class="border-2 p-2 rounded-md mb-2"></div>
					<div class="flex flex-row gap-4">
						<div id="card-expiry" class="border-2 flex-1 p-2 rounded-md"></div>
						<div id="card-cvc" class="border-2 flex-1 p-2 rounded-md"></div>
					</div>
					<button @click="payNow">PAY NOW</button>
				</div>

				<!-- SECOND COLUMN -->
				<div class="col-span-2 bg-gray-100 h-full py-20 px-16">
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
import {StripeCardNumberElement, StripeCardExpiryElement, StripeCardCvcElement, StripeElementStyle, Stripe, StripeElements} from '@stripe/stripe-js'

export default Vue.extend({
	name:"Checkout",
	data: function(){
		return{
			subtotal:0,
			taxes:0,
			total:0,

			//card details
			// cardElement:{} as StripeCardElement,
			cardNumber:{} as StripeCardNumberElement,
			cardExpiry:{} as StripeCardExpiryElement,
			cardCvc:{} as StripeCardCvcElement,

			stripe:{} as Stripe,
			elements: {} as StripeElements,
			paymentIntent:{}
		}
	},
	created(){
		this.subtotal = this.$store.state.cart.reduce((acc:number, cur:product) => {return acc + cur.price}, 0)
		this.taxes = this.subtotal * 0.13
		this.total = this.subtotal + this.taxes
	},
	async mounted(){
		const stripeTEMP = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
		if(!stripeTEMP){
			console.log("STRIPE LOADING ERROR")
			return
		}
		this.stripe = stripeTEMP

		const style = {
			base: {
				//CHECK https://stripe.com/docs/js/appendix/style
				fontSize: '20px',
				'::placeholder': {
					color: '#aab7c4',
				},
			},
			invalid: {
				color: '#fa755a',
				iconColor: '#fa755a',
			},
		} as StripeElementStyle

		//STRIPE ELEMENT MANAGEMENT
		this.elements = this.stripe.elements()
		// this.cardElement = elements.create('card');
		// this.cardElement.mount('#card')
		this.cardNumber = this.elements.create('cardNumber', { style });
		this.cardNumber.mount('#card-number');
		this.cardExpiry = this.elements.create('cardExpiry', { style });
		this.cardExpiry.mount('#card-expiry');
		this.cardCvc = this.elements.create('cardCvc', { style });
		this.cardCvc.mount('#card-cvc');


		this.createPaymentIntent()
	},
	methods:{
		format(num:number){
			return num.toLocaleString('en-US', { style: 'currency', currency: 'USD', })
		},

		// IDK WTF
		async createPaymentIntent(){
			if(this.total < 0.5 || this.total > 9999999){
				console.log("MONEY MISTAKE")
				return
			}
			this.paymentIntent = await this.fetchFromAPI('payments', {body: {amount: this.total}})
		},

		//BUTTON ON WEBSITE GOES HERE
		async payNow(e:Event){
			e.preventDefault()
			// eslint-disable-next-line
			const CardNumberElement = this.elements.getElement('cardNumber')!;

			const {paymentIntent: updatedPaymentIntent, error} = await this.stripe.confirmCardPayment(
				// TODO Get this figured out
				'secretTHING',
				{
					payment_method: { card: CardNumberElement }
				}
			)

			if(error){
				console.error(error)
				// eslint-disable-next-line
				this.paymentIntent = error.payment_intent!
			}else{
				// eslint-disable-next-line
				this.paymentIntent = updatedPaymentIntent!
			}
		},

		//HELPER FUNCTION
		async fetchFromAPI(endPointUrl:string, opts:Record<string, unknown>){
			// TODO GET API URL FROM FUNCTIONS
			const API = ''
			
			const {method,body} = {method: 'POST', body:{}, ...opts}
			
			const res = await fetch(`${API}/${endPointUrl}`,{
				method,
				...(body && {body:JSON.stringify(body)}),
				headers:{
					'Content-Type': 'application/json'
				}
			})
			console.log(res)
			return res.json()
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