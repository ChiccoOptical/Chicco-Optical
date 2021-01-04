<template>
	<nav class="fixed w-full z-20" style="box-shadow: rgb(0 0 0 / 25%) 0 -1px 28px;">
		<div class="grid grid-cols-2 lg:grid-cols-9 px-2 lg:p-6 py-3 lg:py-3 w-full maxWidthPage">
				<!-- START LOGO -->
			<div class="debugBorder lg:col-span-2">
				<router-link to="/" class="w-auto">
					<img src="../assets/logo.svg" alt="Logo" class="h-12">
				</router-link>
			</div>

			<!-- MIDDLE -->
			<div class="flex justify-end lg:hidden">
				<svg @click="navOpen=!navOpen" class="h-12 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
					<router-link class="noOutline" @mouseover.native="$emit('close-selector')"  to="/">Home</router-link>
					<router-link class="noOutline itemPage" @mouseover.native="$emit('expand-selector', 'frames')" @click.native="$emit('close-selector')" to="/frames">Frames</router-link>
					<router-link class="noOutline itemPage" @mouseover.native="$emit('expand-selector', 'sunglasses')" @click.native="$emit('close-selector')" to="/sunglasses">Sunglasses</router-link>
					<router-link class="noOutline itemPage" @mouseover.native="$emit('close-selector')" to="/lenses">Lenses</router-link>
					<router-link class="noOutline itemPage" @mouseover.native="$emit('close-selector')" to="/contactlenses">Contact Lenses</router-link>
					<router-link class="noOutline" @mouseover.native="$emit('close-selector')"  to="/exams">Eye Exams</router-link>
					<router-link class="noOutline" @mouseover.native="$emit('close-selector')"  to="/contact">Contact Us</router-link>
				</div>
			</transition>

			<!-- END -->
			<div class="lg:flex justify-end hidden lg:col-span-2">
				<!-- Yeet -->
			</div>
		</div>
	</nav>
</template>

<script>
	import Vue from 'vue'
	export default Vue.extend({
		name:'NavBar',
		data(){
			return{
				navOpen:false,
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
			}
		}
	})
</script>