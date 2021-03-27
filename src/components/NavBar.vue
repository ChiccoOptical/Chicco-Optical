<template>
	<nav class="fixed w-full z-40" style="box-shadow: rgb(0 0 0 / 25%) 0 -1px 28px;">
		<div class="grid grid-cols-2 lg:grid-cols-9 px-2 lg:p-6 py-3 lg:py-3 w-full maxWidthPage">
				<!-- START LOGO -->
			<div class="debugBorder lg:col-span-2">
				<router-link to="/" class="w-auto">
					<img src="../assets/icons/logo.svg" alt="Logo" class="h-12">
				</router-link>
			</div>

			<!-- MIDDLE -->
			<div class="flex justify-end lg:hidden">
				<svg @click="toggleNav()" class="h-12 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</div>
			<transition name="selectorSlide">
				<div
					v-if="navOpen || windowWidth > 1024"
					id="navLinkRow" 
					class="col-span-5 absolute bg-kindaWhite w-full right-0 top-s flex flex-col gap-y-2 py-2 justify-evenly items-center text-2xl 
					lg:relative lg:bg-transparent lg:w-auto lg:gap-0 lg:py-0 lg:text-xl lg:flex-row lg:top-0 
					"
				>
					<router-link class="noOutline" @mouseover.native="closeNav()"  to="/">Home</router-link>
					<router-link class="noOutline itemPage" @mouseover.native="openNav('frames')" @click.native="closeNav()" to="/frames">Frames</router-link>
					<router-link class="noOutline itemPage" @mouseover.native="openNav('sunglasses')" @click.native="closeNav()" to="/sunglasses">Sunglasses</router-link>
					<router-link class="noOutline itemPage" @mouseover.native="closeNav()" to="/lenses">Lenses</router-link>
					<router-link class="noOutline itemPage" @mouseover.native="closeNav()" to="/contactlenses">Contact Lenses</router-link>
					<router-link class="noOutline" @mouseover.native="closeNav()"  to="/exams">Eye Exams</router-link>
					<router-link class="noOutline" @mouseover.native="closeNav()"  to="/contact">Contact Us</router-link>
				</div>
			</transition>

			<!-- END -->
			<div class="lg:flex justify-end hidden lg:col-span-2 items-center relative">
				<svg @click="$emit('toggle-cart')" class="h-8 w-8 cursor-pointer transition-opacity duration-200" :class="{'cursor-not-allowed': navOpen, 'opacity-50': navOpen}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
				<div 
					class="h-5 w-5 text-white flex items-center justify-center leading-none text-xs bg-red-500 absolute rounded-full bottom-0"
					id="bubble" v-if="this.$store.state.cart.length > 0">
					{{this.$store.state.cart.length}}
				</div>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
	import Vue from 'vue'
	export default Vue.extend({
		name:'NavBar',
		props:['navOpen'],
		data(){
			return{
				windowWidth: window.innerWidth,
			}
		},
		mounted() {
			this.$nextTick(() => {
				window.addEventListener('resize', this.onResize);
			})
		},
		beforeDestroy() { 
			window.removeEventListener('resize', this.onResize); 
		},
		methods: {  
			onResize() {
				this.windowWidth = window.innerWidth
			},
			openNav(type: string){
				this.$emit('expand-selector', type)
			},
			toggleNav(){
				this.$emit('expand-selector', 'frames')
			},
			closeNav(){
				this.$emit('close-selector')
			}
		}
	})
</script>

<style scoped>
	#bubble{
		animation: pop 0.2s ease 1;
		-webkit-user-select: none; /* Safari */        
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* IE10+/Edge */
		user-select: none; /* Standard */
	}
	@keyframes pop{
    0.0%{
        transform: scale(0);
    }
	80%{
        transform: scale(1.2);
    }
    100%{
        transform: scale(1);
    }
}

</style>