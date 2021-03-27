<template>
	<div>
		<div style="height:72px"></div>

		<transition name="fade" mode="out-in">
		<div style="height:calc(100vh - 72px)" v-if="this.page=='payment'" key="payment">
			<div class="maxWidthPage grid grid-cols-5 h-full">
				<!-- FIRST COLUMN -->
				<div class="col-span-3 h-full py-20 px-16 flex flex-col">
					<h1 class="text-2xl font-bold mb-4">Pay with Credit Card</h1>
					<div id="card-number" class="border-2 p-2 rounded-md mb-2"></div>
					<div class="flex flex-row gap-4">
						<div id="card-expiry" class="border-2 flex-1 p-2 rounded-md"></div>
						<div id="card-cvc" class="border-2 flex-1 p-2 rounded-md"></div>
					</div>
					<button @click="payNowWithCard" :disabled="this.processing" class="p-4 bg-blue-400 disabled:opacity-50 transition-opacity rounded-lg font-bold text-2xl text-white mt-4 w-3/4 mx-auto focus:ring-4 ring-blue-200 noOutline">PAY NOW</button>

					<canvas id="wechatQR"></canvas>
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

		<div v-if="page=='success'" class='flex justify-center items-center' key="success">
			<img src="https://media1.giphy.com/media/a0h7sAqON67nO/200.gif" alt="Success">
		</div>
		</transition>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import product from '@/types/product'
import {loadStripe} from '@stripe/stripe-js';

//STRIPE TYPES for Typescript
import {StripeCardNumberElement, StripeCardExpiryElement, StripeCardCvcElement, StripeElementStyle, Stripe, StripeElements, PaymentIntent, SourceResult} from '@stripe/stripe-js'

import QRCode from 'qrcode'

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
			paymentIntent:{} as PaymentIntent | undefined,
			thingy:{} as SourceResult,

			processing:false,
			page:'payment',
		}
	},
	created(){
		this.subtotal = this.$store.state.cart.reduce((acc:number, cur:product) => {return acc + cur.price}, 0)
		this.taxes = Math.round(this.subtotal * 0.13 * 100) / 100
		this.total = this.subtotal + this.taxes
	},
	async mounted(){
		const stripeTEMP = await loadStripe('pk_test_51IXE3zJY5AEAzijm3OGvmcJ3bbhltgDPtIeyncJOS5QpDoLgje1k5Yhlu4mgkBTq9frLAhheD53R0M5CdlITtb9L00rDEjM4XV');
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
		this.weChat()
	},
	async beforeDestroy(){
		if(!this.paymentIntent || !this.paymentIntent.id || this.paymentIntent.status == "succeeded"){
			return
		}
		const deletedIntent = await this.fetchFromAPI('deleteIntent', {
			body:{
				intentID: this.paymentIntent.id
			}
		})
		console.log('deleted intent', deletedIntent.id)
	},
	methods:{
		// IDK WTF
		async createPaymentIntent(){
			if(this.total < 0.5 || this.total > 9999999){
				console.log("MONEY MISTAKE")
				return
			}
			this.paymentIntent = await this.fetchFromAPI('intent', {
				body:{
					amount: this.total * 100,
					currency: "CAD"
				}
			})
			if(!this.paymentIntent){console.error("Payment Intent Not Created");return}

			console.log('payment intent created', this.paymentIntent.id)
		},
		//BUTTON ON WEBSITE GOES HERE
		async payNowWithCard(e:Event){

			this.processing = true
			e.preventDefault()
			const CardNumberElement = this.elements.getElement('cardNumber');
			if(!CardNumberElement || !this.paymentIntent || !this.paymentIntent.client_secret){console.error("MISSING DATA");return;}

			console.log("paying with", this.paymentIntent.id)
			const {paymentIntent: updatedPaymentIntent, error} = await this.stripe.confirmCardPayment(
				this.paymentIntent.client_secret, {
					payment_method: {
						card: CardNumberElement
					}
				}
			)
			this.processing = false

			if(error){
				console.log("MAJOR ERROR")
				console.table(error)
				// TODO THIS MAY BE A TERRIBLE PRACTICE REVIEW LATER
				this.paymentIntent = error.payment_intent
			}
			else{
				this.paymentIntent = updatedPaymentIntent
				//TODO Handle success
				this.page = 'success'
			}
		},

		async weChat(){
			this.thingy = await this.stripe.createSource({
				type:'wechat',
				amount:100,
				currency:"CAD"
			})

			const canvas = document.getElementById('wechatQR');

			// eslint-disable-next-line
			QRCode.toCanvas(canvas, this.thingy.source!.wechat!.qr_code_url!, (error) =>{
				if (error){console.log(error);return}
				console.log("success")
			})
			console.log(this.thingy)
		},

		//HELPER FUNCTIONS
		async fetchFromAPI(endPointUrl:string, opts:Record<string, unknown>){
			// TODO GET API URL FROM FUNCTION
			const API = 'http://localhost:5001/chicco-optical/us-central1/payments'
			
			const {method,body} = {method: 'POST', body:{}, ...opts}
			
			const res = await fetch(`${API}/${endPointUrl}`,{
				method,
				...(body && {body:JSON.stringify(body)}),
				headers:{
					'Content-Type': 'application/json'
				}
			})
			return res.json()
		},
		format(num:number){
			return num.toLocaleString('en-US', { style: 'currency', currency: 'USD', })
		},
	}
})
</script>

<style scoped>
hr{
	margin: 2rem 0;
	border-color: #949494;
}
</style>