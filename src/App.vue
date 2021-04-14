<!-- ROOT FILE -->
<template>
	<div id="app">
		<!-- LOADER -->
		<div class="fixed w-full h-full bg-white z-40 justify-center items-center hidden">
			<loading-progress
				v-if="false"
				:indeterminate="true"
				size="128"
				rotate
				fillDuration="2"
				rotationDuration="1"
			/>
		</div>

		
		<!-- ========NAVBAR======== -->
		<nav-bar v-on:close-selector="closeSelector" v-on:expand-selector="expandSelector" v-on:toggle-cart="toggleCart()" :navOpen="selectorOpen"></nav-bar>
		
		<!-- SELECTOR BLACK BACKGROUND -->
		<transition name="noEndfade">
			<div v-if="selectorOpen" @mouseover="closeSelector()" class="fixed bg-black w-full h-full opacity-75 z-30"></div>
		</transition>
		<!-- ========SELECTOR======== -->
		<transition name="selectorSlide">
			<!-- Selector holder -->
			<div v-show="selectorOpen" class="popDown fixed bg-white w-full z-30" @click="closeSelector">
				<!-- Selector Images and content on the inside + grid -->
				<transition name="fade" mode="out-in">
					<keep-alive>
						<component :is="'selector-gender-' + selectorType"></component>
					</keep-alive>
				</transition>
			</div>
		</transition>
		

		<!-- CART -->
		<transition name="noEndfade">
			<div id="CARTBARBACKGROUND" @click="toggleCart()" v-if="cartOpen" class="fixed bg-black w-full h-full opacity-60 z-20"></div>
		</transition>
		<transition name="cartSlide">
			<cart-bar v-if="cartOpen" id="CARTBAR" @toggle-cart="toggleCart"></cart-bar>
		</transition>

		<!-- ========CONTENT======== -->
		<div style="min-height:calc(100vh - 256px)">
			<transition name="fade" mode="out-in">
				<router-view v-if="$store.state.routeLoaded" :key="$route.path"/>
				<div v-else class="h-screen w-full bg-blue-400 flex items-center justify-center">
					<loading-progress
						:progress="0"
						:indeterminate="true"
						size="128"
						rotate
						fillDuration="2"
						rotationDuration="1"
						class="mx-auto"
					/>
				</div>
			</transition>
		</div>

		<!-- ========FOOTER======== -->
		<my-footer></my-footer>
	</div>
</template>

<script lang="ts">
	import {defineComponent} from 'vue'
	import navBar from '@/components/NavBar.vue'
	import footer from '@/components/Footer.vue'
	import framesSelectorGender from '@/components/selectorGenders/frames.vue'
	import sunglassesSelectorGender from '@/components/selectorGenders/sunglasses.vue'
	import noneSelectorGender from '@/components/selectorGenders/none.vue'
	import CartSideBarVue from './components/CartSideBar.vue'
	
	export default defineComponent({
		name:'app',
		components:{
			'selector-gender-frames' : framesSelectorGender,
			'selector-gender-sunglasses' : sunglassesSelectorGender,
			'selector-gender-none': noneSelectorGender,
			'nav-bar' : navBar,
			'my-footer' : footer,
			'cart-bar': CartSideBarVue
		},
		data: () => {
			return{
				selectorOpen:false,
				selectorType:"none",
				cartOpen:false
			}
		},
		methods:{
			expandSelector: function(e: string){
				this.selectorOpen = true
				this.selectorType = e
				if(this.cartOpen){
					this.cartOpen = false
				}
			},
			closeSelector: function(){
				this.selectorOpen = false
				this.selectorType = 'none'
			},
			toggleCart: function(){
				if(this.selectorOpen){
					return
				}
				this.cartOpen = !this.cartOpen
			}
		}
	})
</script>

<style scoped>
	.popDown {
		top: 72px;
		height: auto;
		opacity: 1;
		transform: translateY(0);
	}
</style>