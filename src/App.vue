<!-- ROOT FILE -->
<template>
	<div id="app">
		<!-- ========NAVBAR======== -->
		<nav-bar v-on:close-selector="closeSelector" v-on:expand-selector="expandSelector"></nav-bar>
		
		<!-- ========SELECTOR======== -->
		<transition name="selectorSlide">
			<div v-show="selectorOpen" :class="{popUpBig:selectorOpen}" class="popDown fixed bg-white w-full z-10" @click="closeSelector">
				<keep-alive>
				<selector-gender :glassesType="selectorType"></selector-gender>
				</keep-alive>
			</div>
		</transition>


		<!-- SELECTOR BLACK BACKGROUND -->
		<transition name="fade">
			<div v-if="selectorOpen" @mouseover="closeSelector()" class="fixed bg-black w-full h-full opacity-75" style="z-index:9"></div>
		</transition>

		<!-- ========CONTENT======== -->
		<div style="max-width:1920px flex items-center">
			<transition name="pageTransition" mode="out-in">
				<router-view :key="$route.path"/>
			</transition>
		</div>

		<!-- ========FOOTER======== -->
		<my-footer></my-footer>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import navBar from './components/NavBar.vue'
	import footer from './components/Footer.vue'
	import selectorGender from './components/selectorGender.vue'

	
	export default Vue.extend({
		name:'app',
		components:{
			'selector-gender' : selectorGender,
			'nav-bar' : navBar,
			'my-footer' : footer
		},
		data(){
			return{
				selectorOpen:false,
				selectorType:"",

				//no
				imageByType:{
					frames:{
						men: "https://i.warbycdn.com/v/c/assets/summer-nav-flyout/image/men-optical/0/e4e2c1a158.jpg",
						women: "https://i.warbycdn.com/v/c/assets/summer-nav-flyout/image/women-optical/0/860555cab5.jpg",
						children: require("@/assets/frameschildren.png")
					},
					sunglasses:{
						men: "https://i.warbycdn.com/v/c/assets/summer-nav-flyout/image/men-sun/0/0a2b265010.jpg",
						women: "https://i.warbycdn.com/v/c/assets/summer-nav-flyout/image/womens-sun/0/5253f83b13.jpg",
						children: require("@/assets/sunglasseschildren.png")
					},
				}
			}
		},
		methods:{
			expandSelector: function(e: string){
				this.selectorOpen = true
				this.selectorType = e
			},
			closeSelector: function(){
				this.selectorOpen = false;
			}
		}
	})
</script>

