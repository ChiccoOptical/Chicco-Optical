<template>
	<div class="h-full grid grid-cols-3" style="background-color:#f4f5f9">
		<!-- MENS SIDE -->
		<router-link :to="'/'  + glassesType + '/men'" class="w-full h-full inline-block relative">
			<transition name="pageTransition" mode="out-in">
				<img key=1 rel="preload" v-if="glassesType=='frames'" :src="imageByType[glassesType]['men']" alt="Guy">
				<img key=2 rel="preload" v-else-if="glassesType=='sunglasses'" :src="imageByType[glassesType]['men']" alt="Guy">
			</transition>
			<p class="absolute verticalCenter">Shop Mens</p>
		</router-link>
		<!-- WOMENS SIDE -->
		<router-link :to="'/'  + glassesType + '/women'" class="w-full h-full inline-block relative">
			<transition name="pageTransition" mode="out-in">
				<img key=1 rel="preload" v-if="glassesType=='frames'" :src="imageByType[glassesType]['women']" alt="Woman">
				<img key=2 rel="preload" v-else-if="glassesType=='sunglasses'" :src="imageByType[glassesType]['women']" alt="Woman">
			</transition>
			<p class="absolute verticalCenter">Shop Womens</p>
		</router-link>
		<router-link :to="'/'  + glassesType + '/children'" class="w-full h-full inline-block relative">
			<transition name="pageTransition" mode="out-in">
				<img key=1 rel="preload" v-if="glassesType=='frames'" src="../assets/frameschildren.png" alt="children">
				<img key=2 rel="preload" v-else-if="glassesType=='sunglasses'" src="../assets/sunglasseschildren.png" alt="children">
			</transition>
			<p class="absolute verticalCenter">Shop Children</p>
		</router-link>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	export default Vue.extend({
		props:['glassesType'],
		data(){
			return{
				imageByType:{
					frames:{
						men: "https://i.warbycdn.com/v/c/assets/summer-nav-flyout/image/men-optical/0/e4e2c1a158.jpg",
						women: "https://i.warbycdn.com/v/c/assets/summer-nav-flyout/image/women-optical/0/860555cab5.jpg",
						children: "../assets/frameschildren.png"
					},
					sunglasses:{
						men: "https://i.warbycdn.com/v/c/assets/summer-nav-flyout/image/men-sun/0/0a2b265010.jpg",
						women: "https://i.warbycdn.com/v/c/assets/summer-nav-flyout/image/womens-sun/0/5253f83b13.jpg",
						children: "../assets/sunglasseschildren.png"
					},
				}
			}
		}
	})
</script>

<style scoped>
	a p{
		transition: .1s ease;
		padding-bottom: 2px;
		font-size: 1.3rem;
		right: 5%;
	}
	a:hover p{
		border: 0px solid #000000d5;
		border-bottom-width: 3px;
	}
</style>