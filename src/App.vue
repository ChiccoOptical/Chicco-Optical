<!-- ROOT FILE -->
<template>
	<div id="app">
		<!-- LOADER -->
		<div class="fixed w-full h-full bg-white z-30 justify-center items-center hidden">
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
		<nav-bar v-on:close-selector="closeSelector" v-on:expand-selector="expandSelector"></nav-bar>
		
		<!-- ========SELECTOR======== -->
		<transition name="selectorSlide">
			<!-- Selector holder -->
			<div v-show="selectorOpen" class="popDown fixed bg-white w-full z-10" @click="closeSelector">
				<!-- Selector Images and content on the inside + grid -->
				<transition name="pageTransition" mode="out-in" appear>
					<keep-alive>
						<component :is="'selector-gender-' + selectorType"></component>
					</keep-alive>
				</transition>
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
	import navBar from '@/components/NavBar.vue'
	import footer from '@/components/Footer.vue'
	import framesSelectorGender from '@/components/selectorGenders/frames.vue'
	import sunglassesSelectorGender from '@/components/selectorGenders/sunglasses.vue'


	
	export default Vue.extend({
		name:'app',
		components:{
			'selector-gender-frames' : framesSelectorGender,
			'selector-gender-sunglasses' : sunglassesSelectorGender,
			'nav-bar' : navBar,
			'my-footer' : footer
		},
		data(){
			return{
				selectorOpen:false,
				selectorType:"frames"
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