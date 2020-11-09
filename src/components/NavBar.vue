<template>
	<nav class="grid grid-cols-2 lg:grid-cols-4 px-2 lg:p-6 py-3 lg:py-3 fixed w-full z-20" ref="navBar">
		<!-- START LOGO -->
		<div class="debugBorder">
			<router-link to="/">
				<img src="../assets/logo.png" alt="Logo" class="h-12">
			</router-link>
		</div>

		<!-- MIDDLE -->
		<div class="flex justify-end lg:hidden">
			<svg @click="navOpen=!navOpen" class="h-12 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</div>
		<transition name="selectorSlide">
			<div v-if="navOpen || windowWidth > 1024" id="navLinkRow" class="col-span-2 absolute lg:relative bg-kindaWhite lg:bg-transparent w-full lg:w-auto top-s lg:top-0 flex flex-col lg:flex-row gap-y-2 lg:gap-0 py-2 lg:py-0 justify-evenly items-center text-2xl lg:text-xl">
				<router-link class="noOutline" @mouseover.native="$emit('close-selector')"  to="/">Home</router-link>
				<router-link class="noOutline itemPage" @mouseover.native="$emit('expand-selector', 'glasses')" @click.native="$emit('close-selector')" to="/glasses">Glasses</router-link>
				<router-link class="noOutline itemPage" @mouseover.native="$emit('expand-selector', 'contactlenses')" @click.native="$emit('close-selector')" to="/contactlenses">Contact Lenses</router-link>
				<router-link class="noOutline itemPage" @mouseover.native="$emit('expand-selector', 'sunglasses')" @click.native="$emit('close-selector')" to="/sunglasses">Sunglasses</router-link>
				<router-link class="noOutline" @mouseover.native="$emit('close-selector')"  to="/exams">Eye Exams</router-link>
				<router-link class="noOutline" @mouseover.native="$emit('close-selector')"  to="/contact">Contact Us</router-link>
			</div>
		</transition>

		<!-- END -->
		<div class="lg:flex justify-end hidden">
			<!-- SEARCH BOX -->
			<div class="search flex justify-center items-center">
				<input type="text" placeholder="search" class="text-xl"/>
				<div class="symbol">
					<svg class="lens">
					<use xlink:href="#lens" />
					</svg>
				</div>
			</div>
			<!-- SVG -->
			<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
				<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="lens">
				<path d="M15.656,13.692l-3.257-3.229c2.087-3.079,1.261-7.252-1.845-9.321c-3.106-2.068-7.315-1.25-9.402,1.83
				s-1.261,7.252,1.845,9.32c1.123,0.748,2.446,1.146,3.799,1.142c1.273-0.016,2.515-0.39,3.583-1.076l3.257,3.229
				c0.531,0.541,1.404,0.553,1.95,0.025c0.009-0.008,0.018-0.017,0.026-0.025C16.112,15.059,16.131,14.242,15.656,13.692z M2.845,6.631
				c0.023-2.188,1.832-3.942,4.039-3.918c2.206,0.024,3.976,1.816,3.951,4.004c-0.023,2.171-1.805,3.918-3.995,3.918
				C4.622,10.623,2.833,8.831,2.845,6.631L2.845,6.631z" />
				</symbol>
			</svg>
			<!-- PLACE ALTERNATIVE HERE-->
		</div>
	</nav>
</template>

<script>
	import Vue from 'vue'
	export default Vue.extend({
		name:'NavBar',
		data(){
			return{
				pageNum:{
					'':'1',
					'glasses':'2',
					'contactLenses':'3',
					'sunGlasses':'4',
					'exam':'5',
					'contact':'6'
				},
				navOpen:false,
				windowWidth: window.innerWidth,
			}
		},
		computed:{
			id: function(){
				return this.$route.path.split("/")[1]
			},
			lineClass: function(){
				return 'origin' + String(this.pageNum[this.id]);
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