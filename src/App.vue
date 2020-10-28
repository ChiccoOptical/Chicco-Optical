<!-- ROOT FILE -->
<template>
	<div id="app">
		<!-- ========NAVBAR======== -->
		<nav class="grid grid-cols-4 p-6 py-3 fixed w-full z-10" ref="navBar">
			<!-- START LOGO -->
			<div class="debugBorder">
				<img src="./assets/logo.png" alt="Logo" class="h-12">
			</div>

			<!-- MIDDLE -->
			<div id="navLinkRow" class=" col-span-2 flex flex-row justify-evenly items-center text-xl relative">
				<router-link @mouseover.native="closeSelector()" to="/">Home</router-link>
				<router-link @mouseover.native="expandSelector()" to="/glasses">Glasses</router-link>
				<router-link to="/contactLenses">Contact Lenses</router-link>
				<router-link to="/sunGlasses">Sunglasses</router-link>
				<router-link to="/exams">Eye Exams</router-link>
				<router-link to="/contact">Contact Us</router-link>
				<div class="line" :class="[lineClass]"></div>
			</div>

			<!-- END -->
			<div class="flex justify-end">
				<!-- SEARCH BOX -->
				<div class="search flex justify-center items-center">
				<input type="text" placeholder="search" class="text-xl"/>
				<div class="symbol">
					<svg class="lens">
					<use xlink:href="#lens" />
					</svg>
				</div>
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
		</nav>
		
		<!-- ========SELECTOR======== -->
		<transition name="selectorSlide">
		<div v-if="selectorOpen" :class="{popUpBig:selectorOpen}" class="popDown fixed bg-white w-full" style="z-index:2" @click="closeSelector">
			<selector-gender></selector-gender>
		</div>
		</transition>
		<!-- SELECTOR BLACK BACKGROUND -->
		<transition name="fade">
		<div v-if="selectorOpen" @mouseover="closeSelector()" class="fixed bg-black w-full h-full opacity-75" style="z-index:1"></div>
		</transition>

		<!-- ========CONTENT======== -->
		<router-view/>

		<!-- ========FOOTER======== -->
		<footer class="w-full bg-gray-200 flex flex-col items-center">
			<!-- Main Footer -->
			<div class="grid grid-cols-8 footerMain py-6 px-8">
				<!-- Pages -->
				<div class="col-span-5 flex flex-row justify-between pr-8">
					<div>
						<h1>Chicco Optical</h1>
						<h3>Jun Liu</h3>
					</div>
					<div>
						<h3>PRODUCTS</h3>
						<ul>
							<li>Glasses</li>
							<li>Contact Lenses</li>
							<li>Sunglasses</li>
						</ul>
					</div>
					<div>
						<h3>SERVICES</h3>
						<ul>
							<li>Eye Exams</li>
						</ul>
					</div>
					<div>
						<h3>RESOURCES</h3>
						<ul>
							<li>Privacy</li>
							<li>Terms</li>
							<li>FAQ</li>
						</ul>
					</div>
				</div>
				<!-- Need help -->
				<div class="border-l-2 border-gray-300 col-span-3 text-center">
					<h3>Need a hand?</h3>
					<p>We’re available every day from 10a.m.–3:30p.m. ET.</p>
					<div class="flex flex-row justify-around px-10 text-gray-700 mt-6">
						<a href = "tel:613-519-1650" class="flex flex-col items-center p-2 hover:bg-gray-300">
							<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
							<p>Call</p>
						</a>
						<a class="flex flex-col items-center p-2 hover:bg-gray-300">
							<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
							<p>FAQ</p>
						</a>
						<a href="mailto:jun_liu66@hotmail.com" class="flex flex-col items-center p-2 hover:bg-gray-300">
							<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path></svg>
							<p>E-mail</p>
						</a>
					</div>
				</div>
			</div>

			<!-- BOTTOM TEXT -->
			<div class="w-full bg-blue-500 text-white py-4">
				<p class="text-center uppercase text-lg font-semibold">
					Made with <span class="text-xl">❤</span> by Edwin Zheng
				</p>
			</div>
		</footer>
	</div>
</template>

<script>
	import Vue from 'vue'
	import selectorGender from './components/selectorGender.vue'

	export default Vue.extend({
		name:'app',
		components:{
			'selector-gender' : selectorGender
		},
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
				selectorOpen:false
			}
		},
		methods:{
			expandSelector: function(	){
				this.selectorOpen = true
			},
			closeSelector: function(){
				this.selectorOpen = false;
			}
		},
		computed:{
			id: function(){
				return this.$route.path.slice(1)
			},
			lineClass: function(){
				return 'origin' + this.pageNum[this.id];
			}
		}
	})
</script>

<style scoped>
	h3{
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	h1{
		font-size: 2.25rem;
		font-weight: 700;
	}
</style>

