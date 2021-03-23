<template>
	<div class="h-full grid grid-cols-3" id="genderSELECTOR"> <!-- style="background-color:#f4f5f9"> -->
		<!-- Inner Component -->
		<router-link
			:to="'/'  + glassesType + '/' + category" 
			class="w-full h-full inline-block relative"
			v-for="(category, i) in ['men', 'women', 'children']" 
			:key="i"
		>
			<!-- ACTUAL IMAGERY -->
			<img :src="imageByType[glassesType][category]" :alt="category" class="w-full" key=1 :class="{'forceSize':glassesType == 'none'}">

			<!-- LABEL -->
			<p class="absolute verticalCenter" v-if="glassesType != 'none'">Shop {{category.charAt(0).toUpperCase() + category.slice(1)}}s</p>
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
						men: require("@/assets/nav/framesmen.jpg"),
						women: require("@/assets/nav/frameswomen.jpg"),
						children: require("@/assets/nav/frameschildren.png")
					},
					sunglasses:{
						men: require("@/assets/nav/sunglassesmen.jpg"),
						women: require("@/assets/nav/sunglasseswomen.jpg"),
						children: require("@/assets/nav/sunglasseschildren.png")
					},
					none:{
						men: require('@/assets/nav/Transparent.png'),
						women: require('@/assets/nav/Transparent.png'),
						children: require('@/assets/nav/Transparent.png')
					}
				}
			}
		},
		created(){
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

	.forceSize{
		height: 377px;
	}
</style>