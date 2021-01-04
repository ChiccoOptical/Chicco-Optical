<template>
	<div class="h-full grid grid-cols-3"> <!-- style="background-color:#f4f5f9"> -->
		<!-- Inner Component -->
		<router-link
			:to="'/'  + glassesType + '/' + category" 
			class="w-full h-full inline-block relative"
			v-for="(category, i) in ['men', 'women', 'children']" 
			:key="i"
		>
			<!-- ACTUAL IMAGERY -->
			<img :src="imageByType[glassesType][category]" :alt="category" class="w-full" key=1>

			<!-- LABEL -->
			<p class="absolute verticalCenter" v-if="category != 'none'">Shop {{category.charAt(0).toUpperCase() + category.slice(1)}}s</p>
		</router-link>
		<!-- x3 -->
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		props:{'glassesType': String},
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
					none:{
						men: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Transparent.png",
						women: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Transparent.png",
						children: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Transparent.png"
					}
				}
			}
		},
		created(){
			console.log('preload')
			console.log(this.imageByType[this.glassesType as 'frames'|'sunglasses'|'none']['women'])
			//Preload images
			for(const [, value] of Object.entries(this.imageByType)){
				for(const [, v] of Object.entries(value)){
					new Image().src = v;
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