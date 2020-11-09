<template>
	<div>
		<!-- TOP BANENR -->
		<div class="lg:h-screen bg-blue-400 relative pt-16 lg:p-0">
			<img class="relative lg:absolute bottom-0 horizontalCenter homePic " src="../assets/External/dior-GOLD-Diorstellaire04.png" alt="Glasses Model Home">
			<div id="mainText" class="bg-white lg:bg-transparent p-2 lg:p-0 flex flex-col items-center lg:block lg:absolute onlyVerticalCenter w-full lg:w-1/3">
				<p class="uppercase font-semibold">C<small>hicco</small> O<small>ptical</small></p>
				<h1 class="text-center lg:text-left text-6xl font-black mb-4 font-lora">Quality Glasses in Ottawa</h1>
				<router-link to="/glasses/men" tag="button" class="mr-1 bg-white hover:bg-blue-500 hover:text-white border-2 border-solid hover:border-blue-600 transition-colors duration-200 in-expo rounded-full px-4 py-1 mt-3">Shop Mens Now</router-link>
				<router-link to="/glasses/women" tag="button" class="ml-1 bg-white hover:bg-blue-500 hover:text-white border-2 border-solid hover:border-blue-600 transition-colors duration-200 in-expo rounded-full px-4 py-1 mt-3">Shop Womens Now</router-link>
			</div>

			<!-- <div class="h-10 w-10 bg-red-500 absolute rounded-full p-1" style="right:3%;bottom:3%;">Lit</div> -->
			<!-- <div class="absolute verticalCenter bg-red-300 p-4" style="right:1rem">
				go
			</div> -->
		</div>

		<!-- Our Products -->
		<div class="p-6">
			<h1 class="text-center text-4xl font-bold font-lora">Our Products</h1>
			<p class="text-center">Our categories of products</p>
			<div class="grid grid-cols-3 mx-20 mt-4 gap-4 productRowHome font-lora">
				<router-link to="/glasses" tag="div" class="cursor-pointer relative">
					<img src="https://images.wallpaperscraft.com/image/glasses_lenses_glass_139898_1920x1080.jpg" class="w-full" alt="Glasses">
					<h2 class="absolute bothCenter text-white text-4xl font-semibold">Glasses</h2>
				</router-link>
				<router-link to="/sunglasses" tag="div"  class="cursor-pointer relative overflow-hidden">
					<img src="../assets/sunglasses.png" class="h-full w-auto absolute" alt="Sunglasses">
					<h2 class="absolute bothCenter text-white text-4xl font-semibold">Sunglasses</h2>
				</router-link>
				<router-link to="/contactlenses" tag="div" class="cursor-pointer relative overflow-hidden">
					<img src="https://clark.com/wp-content/uploads/2018/06/contactlens.jpg" class="absolute h-full w-auto" alt="Contact Lenses">
					<h2 class="absolute bothCenter text-white text-4xl font-semibold">Contact Lenses</h2>
				</router-link>
			</div>
		</div>

		<div class="bg-gray-200 flex flex-row flex-wrap py-10 px-20 justify-center brand-row gap-x-20 gap-y-6 relative">
			<img class="h-20" src="../assets/dior.png" alt="DIOR">
			<img class="h-20" src="../assets/silhouette.png" alt="Silhouette">
			<img class="h-20" src="../assets/gucci.svg" alt="Gucci">
			<img class="h-20" src="../assets/coach.png" alt="Coach">
			<img class="h-20" src="../assets/swan.png" alt="Swan">
			<img class="h-20" src="../assets/louisVuitton.svg" alt="LV">
			<hr class="absolute w-3/4 horizontalCenter bottom-0">
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

	@Component({
	components: {
		HelloWorld,
	},
	})
	export default class Home extends Vue {}
</script>

<style scoped>
	#mainText{
		left:5%;
	}
	#mainText h1{
		line-height: 100%;
	}
	@media only screen and (min-width: 468px) {
		.homePic{
			height:90%
		}
	}
	.brand-row img{
		opacity: 0.6;
		transition: .1s ease;
		cursor: pointer;
	}
	.brand-row img:hover{
		opacity: 1;
	}
	hr{
		border: solid 1px #8b8b8b;
		border-radius: 999px;
	}
	.productRowHome div img{
		filter: brightness(0.7) saturate(0.8);
		max-width:none;
	}
	.productRowHome div h2{
		white-space:nowrap;
	}
</style>