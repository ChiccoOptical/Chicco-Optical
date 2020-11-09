<template>
	<div class="h-full grid grid-cols-2">
		<router-link :to="'/'  + glassesType + '/men'" class="w-full h-full inline-block relative">
			<transition name="pageTransition" mode="out-in">
				<img key=1 v-if="glassesType=='glasses'" :src="imageByType[glassesType]['men']" alt="Guy">
				<img key=2 v-else-if="glassesType=='sunglasses'" :src="imageByType[glassesType]['men']" alt="Guy">
				<img key=3 v-else-if="glassesType=='contactlenses'" src="../assets/contactlensmen.png" alt="Guy">
			</transition>
			<p class="absolute verticalCenter" style="right:96px">Shop Mens</p>
		</router-link>
		<router-link :to="'/'  + glassesType + '/women'" class="w-full h-full inline-block relative">
			<transition name="pageTransition" mode="out-in">
				<img key=1 v-if="glassesType=='glasses'" :src="imageByType[glassesType]['women']" alt="Woman">
				<img key=2 v-else-if="glassesType=='sunglasses'" :src="imageByType[glassesType]['women']" alt="Woman">
				<img key=3 v-else-if="glassesType=='contactlenses'" src="../assets/contactlenswomen.png" alt="Woman">
			</transition>
			<p class="absolute verticalCenter" style="right:96px">Shop Womens</p>
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
					glasses:{
						men: "https://i.warbycdn.com/v/c/assets/summer-nav-flyout/image/men-optical/0/e4e2c1a158.jpg",
						women: "https://i.warbycdn.com/v/c/assets/summer-nav-flyout/image/women-optical/0/860555cab5.jpg"
					},
					sunglasses:{
						men: "https://i.warbycdn.com/v/c/assets/summer-nav-flyout/image/men-sun/0/0a2b265010.jpg",
						women: "https://i.warbycdn.com/v/c/assets/summer-nav-flyout/image/womens-sun/0/5253f83b13.jpg"
					},
					contactlenses:{
						men: "../assets/contactlensmen.png",
						women: "../assets/contactlenswomen.png"
					}
				}
			}
		}
	})
</script>

<style scoped>
	a p{
		transition: .1s ease;
		padding-bottom: 2px;
	}
	a:hover p{
		border: 0px solid #000000d5;
		border-bottom-width: 3px;
	}
</style>