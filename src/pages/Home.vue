<template>
	<div>
		<div class="lg:h-screen bg-blue-400 relative pt-16 lg:p-0">
			<img class="relative lg:absolute bottom-0 horizontalCenter homePic " src="../assets/External/dior-GOLD-Diorstellaire04.png" alt="Glasses Model Home">
			<div id="mainText" class="bg-white lg:bg-transparent p-2 lg:p-0 flex flex-col items-center lg:block lg:absolute onlyVerticalCenter w-full lg:w-2/5">
				<p class="uppercase font-semibold">C<small>hicco</small> O<small>ptical</small></p>
				<h1 class="text-center lg:text-left text-6xl font-semibold mb-4">Quality Glasses in Ottawa</h1>
				<button class="bg-white hover:bg-blue-500 hover:text-white border-2 border-solid hover:border-blue-600 transition-colors duration-200 in-expo rounded-full px-4 py-1 mt-3">Shop Now</button>
			</div>

			<!-- <div class="h-10 w-10 bg-red-500 absolute rounded-full p-1" style="right:3%;bottom:3%;">Lit</div> -->
			<!-- <div class="absolute verticalCenter bg-red-300 p-4" style="right:1rem">
				go
			</div> -->
		</div>
		<div class="h-screen">
			<h1>Best Glasses in Ottawa</h1>
		</div>
		<div class="bg-gray-200 flex flex-row flex-wrap py-10 px-20 justify-center brand-row gap-x-20 gap-y-6 relative">
			<img class="h-24" src="../assets/dior.png" alt="DIOR">
			<img class="h-24" src="../assets/silhouette.png" alt="Silhouette">
			<img class="h-24" src="../assets/gucci.svg" alt="Gucci">
			<img class="h-24" src="../assets/coach.png" alt="Coach">
			<img class="h-24" src="../assets/swan.png" alt="Swan">
			<img class="h-24" src="../assets/louisVuitton.svg" alt="LV">
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
		border: solid 2px #777777;
		border-radius: 999px;
	}
</style>