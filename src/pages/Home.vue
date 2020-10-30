<template>
	<div>
		<div class="h-screen bg-blue-400 relative">
			<div id="mainText" class="absolute verticalCenter" style="width:40%">
				<p class="uppercase font-semibold">C<small>hicco</small> O<small>ptical</small></p>
				<h1 class="text-6xl font-semibold">Quality Glasses in Ottawa</h1>
				<button class="bg-white hover:bg-blue-500 hover:text-white border-2 border-solid hover:border-blue-600 transition-colors duration-200 in-expo rounded-full px-4 py-1 mt-3">Shop Now</button>
			</div>
			<img class="absolute bottom-0 horizontalCenter" style="height:85%" src="../assets/External/dior-GOLD-Diorstellaire04.png" alt="Glasses Model Home">
			<div class="h-10 w-10 bg-red-500 absolute rounded-full p-1" style="right:3%;bottom:3%;">Lit</div>
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
		left:2rem;
	}
	#mainText h1{
		line-height: 100%;
	}
</style>