<template>
	<div class="h-full grid grid-cols-3" style="background-color:#f4f5f9">
		<router-link 
			:to="'/'  + glassesType + '/' + category" 
			class="w-full h-full inline-block relative" 
			v-for="(category, i) in ['men', 'women', 'children']" 
			:key="i"
		>
			<!-- ACTUAL IMAGERY -->
			<transition name="pageTransition" mode="out-in">
				<img :src="imageByType[glassesType][category]" :alt="category" v-if="glassesType=='frames'" key=1>
				<img :src="imageByType[glassesType][category]" :alt="category" v-else-if="glassesType=='sunglasses'" key=2>
			</transition>

			<!-- LABEL -->
			<p class="absolute verticalCenter">Shop {{category.charAt(0).toUpperCase() + category.slice(1)}}s</p>
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
		created(){
			//Preload images
			for(const [, value] of Object.entries(this.imageByType)){
				for(const [, v] of Object.entries(value)){
					const image = new Image();
					image.src = v
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