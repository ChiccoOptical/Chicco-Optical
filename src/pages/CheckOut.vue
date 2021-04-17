<template>
	<div style="height:72px"></div>
	<div class="maxWidthPage grid grid-cols-5" style="min-height:calc(100vh - 72px)">
		<!-- FIRST COLUMN -->
		<div class="col-span-3 h-full py-20 px-16 flex flex-col">
			<!-- #region Personal Information -->
			<h1 class="text-3xl font-bold mb-4">Personal Information</h1>

			<p class="mb-2">Email</p>
			<input type="email" name="email" id="email" v-model="email" placeholder="Enter email (Optional)" class="border-2 p-2 rounded-md noOutline focus:ring">
			<!-- #endregion -->

			<!-- #region PAYMENT SECTION -->
			<h1 class="text-3xl font-bold mb-4 mt-6">Payment</h1>
			<!-- Payment Buttons -->
			<div class="flex flex-row gap-x-4 mb-4" id="paymentButtonRow">
				<button class="px-4 py-2 bg-red-400 rounded-lg flex flex-row gap-x-2 focus:ring noOutline disabled:opacity-50 transition-opacity" :disabled="processing" @click="paymentChange('creditCard')">
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
						></path>
					</svg>
					Credit Card
				</button>
				<button class="px-4 py-2 bg-blue-400 rounded-lg flex flex-row gap-x-2 focus:ring noOutline disabled:opacity-50 transition-opacity" :disabled="processing" @click="paymentChange('alipay')">
					<img
						class="w-6 h-6"
						src="@/assets/icons/alipay.svg"
						alt="Alipay"
					/>
					Alipay
				</button>
				<button class="px-4 py-2 bg-green-400 rounded-lg flex flex-row gap-x-2 focus:ring noOutline disabled:opacity-50 transition-opacity" disabled @click="paymentChange('wechat')">
					<svg class="w-6 h-6" fill="white" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
						<path d="M21.502 19.525c1.524-1.105 2.498-2.738 2.498-4.554 0-3.326-3.237-6.023-7.229-6.023s-7.229 2.697-7.229 6.023c0 3.327 3.237 6.024 7.229 6.024.825 0 1.621-.117 2.36-.33l.212-.032c.139 0 .265.043.384.111l1.583.914.139.045c.133 0 .241-.108.241-.241l-.039-.176-.326-1.215-.025-.154c0-.162.08-.305.202-.392zm-12.827-17.228c-4.791 0-8.675 3.236-8.675 7.229 0 2.178 1.168 4.139 2.997 5.464.147.104.243.276.243.471l-.03.184-.391 1.458-.047.211c0 .16.13.29.289.29l.168-.054 1.899-1.097c.142-.082.293-.133.46-.133l.255.038c.886.255 1.842.397 2.832.397l.476-.012c-.188-.564-.291-1.158-.291-1.771 0-3.641 3.542-6.593 7.911-6.593l.471.012c-.653-3.453-4.24-6.094-8.567-6.094zm5.686 11.711c-.532 0-.963-.432-.963-.964 0-.533.431-.964.963-.964.533 0 .964.431.964.964 0 .532-.431.964-.964.964zm4.82 0c-.533 0-.964-.432-.964-.964 0-.533.431-.964.964-.964.532 0 .963.431.963.964 0 .532-.431.964-.963.964zm-13.398-5.639c-.639 0-1.156-.518-1.156-1.156 0-.639.517-1.157 1.156-1.157.639 0 1.157.518 1.157 1.157 0 .638-.518 1.156-1.157 1.156zm5.783 0c-.639 0-1.156-.518-1.156-1.156 0-.639.517-1.157 1.156-1.157.639 0 1.157.518 1.157 1.157 0 .638-.518 1.156-1.157 1.156z"/>
					</svg>
					WeChat
				</button>
			</div>

			<!-- PAYMENT BODIES -->
			<transition name="fade" mode="out-in" v-on:after-enter="injectElements">
				<div v-if="paymentMethod === 'creditCard'" key="creditCard">
					<h1 class="text-2xl font-bold mb-4">Pay with Credit Card</h1>
					<div id="card-number" class="border-2 p-2 rounded-md mb-2 focus-within:ring"></div>
					<div class="flex flex-row gap-4">
						<div id="card-expiry" class="border-2 flex-1 p-2 rounded-md focus-within:ring"></div>
						<div id="card-cvc" class="border-2 flex-1 p-2 rounded-md focus-within:ring"></div>
					</div>
					<button @click="payNowWithCard" :disabled="processing"
						class="p-4 bg-blue-400 disabled:opacity-50 transition-opacity rounded-lg font-bold text-2xl text-white mt-4 w-full focus:ring-4 ring-blue-200 noOutline">
						PAY NOW
					</button>
				</div>
				<div v-else-if="paymentMethod === 'wechat'"  key="wechat">
					<button @click="getWechatQR" :disabled="processing" class="bg-green-400 py-4 px-10 rounded-lg text-white mx-auto block font-bold disabled:opacity-50 transition-opacity noOutline focus:ring">Get WeChat QR Code</button>
					<div class="flex flex-row items-center mb-4">
						<img src="@/assets/icons/scan.svg" class="h-8 w-8 mr-2" alt="Scan Icon">
						<h2 class="text-2xl font-semibold">Scan the QR Code</h2>
					</div>
					<canvas id="wechatQR" class="mx-auto"></canvas>
				</div>
				<div v-else-if="paymentMethod === 'alipay'" key="alipay" class="grid place-content-center py-10">
					<button @click="payNowWithAli" :disabled="processing"
						class="h-32 w-64 bg-blue-400 disabled:opacity-50 transition-opacity border-blue-600 rounded-xl text-white text-xl font-bold noOutline focus:ring">
						Pay with AliPay
					</button>
				</div>
			</transition>

			<!-- #endregion -->
		</div>

		<!-- SECOND COLUMN -->
		<div class="col-span-2 bg-gray-100 h-full py-20 px-16">
			<!-- CART DISPLAY -->
			<div class="flex flex-col gap-y-4">
				<div v-for="(item, i) in $store.state.cart" :key="i">
					<router-link :to="`/${item.productType}/${item.gender}/${item.id}`">
						<div class="flex flex-row items-center" v-on:click="$emit('toggle-cart')">
							<img :src="item.imageURL" class="h-10" alt="Glasses"/>
							<p class="font-semibold text-2xl flex-1 ml-4">{{ item.model }}</p>
							<p class="font-bold">{{ format( item.price ? item.price : 0 ) }}</p>
						</div>
					</router-link>
				</div>
			</div>

			<hr />

			<!-- DISCOUNTS -->
			<div class="flex flex-row w-full gap-x-2">
				<input type="text" name="discount" id="discount" placeholder="Discount Code"
					class="flex-1 p-3 rounded-lg noOutline border-2 border-gray-300 focus:ring"/>
				<button class="rounded-lg p-3 px-8 font-bold text-white bg-blue-400 noOutline focus:ring">
					Apply
				</button>
			</div>

			<hr />

			<!-- CALCULATION -->
			<div>
				<div class="flex flex-row justify-between">
					<p class="font-semibold text-xl">Subtotal</p>
					<div class="flex flex-row items-end">
						<span class="text-lg font-semibold ml-2">
							{{format($store.state.subtotal)}}
						</span>
					</div>
				</div>
				<div class="flex flex-row justify-between">
					<p class="font-semibold text-xl">Taxes</p>
					<div class="flex flex-row items-end">
						<span class="text-lg font-semibold ml-2">
							{{ format($store.state.taxes)}}
						</span>
					</div>
				</div>
			</div>

			<hr />

			<!-- FINAL PRICE -->
			<div class="flex flex-row justify-between items-end">
				<p class="font-semibold text-xl">Total</p>
				<div class="flex flex-row items-end">
					<span>CAD</span>
					<span class="text-3xl font-semibold ml-2">
						{{format($store.state.total)}}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import { loadStripe } from "@stripe/stripe-js";
	import QRCode from "qrcode"
	//STRIPE TYPES for Typescript
	import {
		StripeCardNumberElement, StripeCardExpiryElement, StripeCardCvcElement,
		StripeElementStyle, Stripe, StripeElements, PaymentIntent,
	} from "@stripe/stripe-js";
	import Product, { ProductOrder } from "@/types/product";
	type PaymentMethods = "creditCard" | "alipay" | "wechat"
	export default defineComponent({
		name: "Checkout",
		data: function () {
			return {
				email:"",
				//card details
				// cardElement:{} as StripeCardElement,
				cardNumber: {} as StripeCardNumberElement,
				cardExpiry: {} as StripeCardExpiryElement,
				cardCvc: {} as StripeCardCvcElement,

				stripe: {} as Stripe,
				elements: {} as StripeElements,
				// wechatSourceCache: {} as PaymentIntent,
				
				paymentMethod: "",
				processing: false,
			};
		},
		created() {
			this.$store.commit("updatePrice");
		},
		async mounted() {
			//LOAD STRIPE
			const stripeTEMP = await loadStripe("pk_test_51IXE3zJY5AEAzijm3OGvmcJ3bbhltgDPtIeyncJOS5QpDoLgje1k5Yhlu4mgkBTq9frLAhheD53R0M5CdlITtb9L00rDEjM4XV",{
				betas: ['wechat_pay_pm_beta_2'], 
				apiVersion: '2020-03-02;wechat_pay_beta=v1'
			});
			if (!stripeTEMP) {
				console.error("STRIPE LOADING ERROR");
				return;
			}
			this.stripe = stripeTEMP;

			//STRIPE ELEMENT MANAGEMENT
			// STYLES FOR ELEMENTS
			const style = {
				base: {
					//CHECK https://stripe.com/docs/js/appendix/style
					fontSize: "20px",
					"::placeholder": {
						color: "#aab7c4",
					},
				},
				invalid: {
					color: "#fa755a",
					iconColor: "#fa755a",
				},
			} as StripeElementStyle;
			this.elements = this.stripe.elements();
			this.cardNumber = this.elements.create("cardNumber", { style });
			this.cardExpiry = this.elements.create("cardExpiry", { style });
			this.cardCvc = this.elements.create("cardCvc", { style });
			// this.cardElement = elements.create('card');

			//SET UI TO CREDIT CARD
			this.paymentChange("creditCard");
		},
		methods: {
			// Payment Intents
			async createPaymentIntent(type: "card"|"alipay"|"wechat_pay"):Promise<PaymentIntent | undefined>{
				//AMOUNT CHECK
				if (this.$store.state.total < 0.5 || this.$store.state.total > 9999999) {
					console.log("MONEY MISTAKE");
					return;
				}

				const localCart = this.$store.getters.orderCart
				const paymentIntent = await this.fetchFromAPI("intent", {
					body: {
						amount: this.$store.state.total * 100,
						currency: "CAD",
						payment_method_types: [type],
						metadata:{
							cart: localCart
						}
					},
				}).catch(()=>{console.error("FETCH ERROR")});
				if (!paymentIntent) {
					console.error("Payment Intent Not Created");
					return;
				}

				console.log("payment intent created", paymentIntent.id);
				return paymentIntent;
			},

			//HTML INTERACTION WITH STRIPE THINGS
			//BUTTON ON WEBSITE GOES HERE
			async payNowWithCard(e: Event) {
				e.preventDefault();
				this.processing = true;

				let paymentIntent = await this.createPaymentIntent("card").catch(()=>{this.processing = false;return;});
				const CardNumberElement = this.elements.getElement("cardNumber");
				if (!CardNumberElement ||!paymentIntent ||!paymentIntent.client_secret){console.error("MISSING DATA");this.processing = false;return;}

				console.log("paying with", paymentIntent.id);
				const {paymentIntent: updatedPaymentIntent,error,} = await this.stripe.confirmCardPayment(paymentIntent.client_secret,{
					payment_method: {
						card: CardNumberElement,
					},
				});
				this.processing = false;

				// TODOTHIS ENTIRE BLOCK OF CODE HERE====
				if (error || !updatedPaymentIntent) {
					console.error("MAJOR ERROR");
					console.table(error);
				}else{
					this.$store.state.cart = []
					this.$router.push({ path: '/paymentVerify', query: {
						payment_intent: updatedPaymentIntent.id,
						payment_intent_client_secret: updatedPaymentIntent.client_secret,
						redirect_status: "succeeded"
					}})
				}
			},
			async payNowWithAli(e: Event) {
				e.preventDefault();
				this.processing = true;

				const paymentIntent = await this.createPaymentIntent("alipay");
				if(!paymentIntent?.client_secret){console.warn("Alipay Payment Intent Could not be Created");this.processing = false;return;}
				//REDIRECTS THE USER
				this.$store.state.cart = []
				await this.stripe.confirmAlipayPayment(
					paymentIntent.client_secret, {
						return_url: `${window.location.origin}/paymentVerify`, //Should go to newstaroptical.com/paymentVerify
					}
				);
			},
			//TODO GET THIS DONE AFTER THE PEOPLE GET BACK TO YOU
			// async getWechatQR(e: Event){
			// 	e.preventDefault()

			// 	//CREATE PAYMENT INTENT IF NEEDED
			// 	//basically check empty object
			// 	if(this.wechatSourceCache && Object.keys(this.wechatSourceCache).length === 0 && this.wechatSourceCache.constructor === Object){
			// 		const wechatPI = await this.createPaymentIntent('wechat_pay');
			// 		if(!wechatPI){console.error("wechat payment intent error");return;}
			// 		this.wechatSourceCache = wechatPI
			// 	}

			// 	//GET QR CODE BY CONFIRMING THE PAYMENT
			// 	const {paymentIntent: updatedPaymentIntent, error} = await this.stripe.confirmWechatPayPayment(this.wechatSourceCache.client_secret,{
			// 		payment_method_options: {
			// 			wechat_pay: {
			// 				client: 'web',
			// 			},
			// 		}
			// 	},{
			// 		handleActions: false
			// 	})
				
			// 	if(error){console.error(error);return;}
			// 	if (!updatedPaymentIntent?.next_action?.wechat_pay_display_qr_code?.data){console.error("stripe wechat source problem");return;}
				
			// 	//DISPLAY QR CODE
			// 	const canvas = document.getElementById("wechatQR");
			// 	QRCode.toCanvas(canvas, updatedPaymentIntent.next_action.wechat_pay_display_qr_code.data,
			// 		(error) => {if (error) {console.error(error);return;}}
			// 	);				
			// },
			//ELEMENT INJECTORS
			
			paymentChange(newPaymentMethod: PaymentMethods) {
				if (this.paymentMethod == newPaymentMethod) {
					return;
				}
				this.paymentMethod = newPaymentMethod;
			},
			injectElements() {
				switch (this.paymentMethod) {
					case "creditCard":
						this.cardNumber.mount("#card-number");
						this.cardExpiry.mount("#card-expiry");
						this.cardCvc.mount("#card-cvc");
						break;
					case "alipay":
						break;
					case "wechat":
						break;
					default:
						console.error("Inject Elements => New Payment Method does not Exist");
				}
			},
			//HELPER FUNCTIONS
			async fetchFromAPI(endPointUrl: string, opts: Record<string, unknown>) {
				// TODO GET API URL FROM FUNCTION
				if(process.env.NODE_ENV === 'production'){console.error("whoops this doesn't work yet, get the owner guy to pay for firebase functions please")}
				const API = process.env.NODE_ENV === 'production' ? "" : "http://localhost:5001/chicco-optical/us-central1/payments";

				const { method, body } = { method: "POST", body: {}, ...opts };

				const res = await fetch(`${API}/${endPointUrl}`, {
					method,
					...(body && { body: JSON.stringify(body) }),
					headers: {
						"Content-Type": "application/json",
					},
				});
				return res.json();
			},
			//HTML HELPER
			format(num: number) {
				return num.toLocaleString("en-US", {
					style: "currency",
					currency: "USD",
				});
			},
		},
		//OLD CODE FROM PAYMENT INTENT OPENING ON PAGE LOAD
		// async beforeDestroy(){
		// 	if(!this.paymentIntent || !this.paymentIntent.id || this.paymentIntent.status == "succeeded"){
		// 		return
		// 	}
		// 	const deletedIntent = await this.fetchFromAPI('deleteIntent', {
		// 		body:{
		// 			intentID: this.paymentIntent.id
		// 		}
		// 	})
		// 	console.log('deleted intent', deletedIntent.id)
		// },
	});
</script>

<style scoped>
	hr {
		margin: 2rem 0;
		border-color: #949494;
	}

	.paymentMethodButton:hover {
		transform: scale(1.1);
	}
	.paymentMethodButton:active {
		transform: scale(0.9);
	}

	#paymentButtonRow button{
		transition: transform ease 200ms;
	}
	#paymentButtonRow button:hover{
		transform: scale(1.05)
	}
</style>