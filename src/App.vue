<!-- ROOT FILE -->
<template>
	<div id="app">
		<!-- ========NAVBAR======== -->
		<nav-bar v-on:close-selector="closeSelector" v-on:expand-selector="expandSelector"></nav-bar>
		
		<!-- ========SELECTOR======== -->
		<transition name="selectorSlide">
		<div v-if="selectorOpen" :class="{popUpBig:selectorOpen}" class="popDown fixed bg-white w-full z-10" @click="closeSelector">
			<selector-gender :glassesType="selectorType"></selector-gender>
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
	
	export default Vue.extend({
		name:'app',
		components:{
			'selector-gender' : () => import(/* webpackPrefetch: true */'./components/selectorGender.vue'),
			'nav-bar' : navBar,
			'my-footer' : footer
		},
		data(){
			return{
				selectorOpen:false,
				selectorType:""
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

