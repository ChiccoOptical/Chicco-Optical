<template>
	<div>
		<!-- TOP BANENR -->
		<div class="lg:h-screen bg-blue-400 pt-16 lg:p-0">
			<div class="maxWidthPage h-full relative">
				<transition name="fade" appear>
					<img class="relative lg:absolute bottom-0 horizontalCenter homePic" src="@/assets/External/dior-GOLD-Diorstellaire04.png" />
				</transition>
				
				<div id="mainText" class="bg-white lg:bg-transparent p-2 lg:p-0 flex flex-col items-center lg:block lg:absolute onlyVerticalCenter w-full lg:w-1/3">
					<p class="uppercase font-semibold">C<small>hicco</small> O<small>ptical</small></p>
					<h1 class="text-center lg:text-left text-6xl font-black mb-4 font-lora">Quality Glasses in Ottawa</h1>
					<div class="flex flex-row">
						<router-link
							to="/frames/men"				
						>
						<button
						class="mr-1 bg-white hover:bg-blue-500 hover:text-white border-2 border-solid hover:border-blue-600
							transition-colors duration-200 in-expo rounded-full px-4 py-1 mt-3"
						> 
							Shop Mens
						</button>
						</router-link>
						<router-link 
							to="/frames/women"
						>
						<button
							class="ml-1 bg-white hover:bg-blue-500 hover:text-white border-2 border-solid hover:border-blue-600 
								transition-colors duration-200 in-expo rounded-full px-4 py-1 mt-3">
							Shop Womens
						</button>
						</router-link>
					</div>
				</div>
			</div>

			<!-- <div class="h-10 w-10 bg-red-500 absolute rounded-full p-1" style="right:3%;bottom:3%;">Lit</div> -->
			<!-- <div class="absolute verticalCenter bg-red-300 p-4" style="right:1rem">
				go
			</div> -->
		</div>

		<!-- Our Products -->
		<div class="p-6 maxWidthPage">
			<h1 class="text-center text-5xl font-bold font-lora">Our Products</h1>
			<p class="text-center text-lg mb-6">Our categories of products</p>
			
			<div class="relative mx-28">
				<div class="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-x-10 productRowHome font-lora">
					<router-link to="/glasses">
						<div class="cursor-pointer relative">
							<img src="https://images.wallpaperscraft.com/image/glasses_lenses_glass_139898_1920x1080.jpg" class="w-full" alt="Glasses">
							<h2 class="absolute bothCenter text-white text-4xl font-semibold">Glasses</h2>
						</div>
					</router-link>
					<router-link to="/sunglasses">
						<div class="cursor-pointer relative overflow-hidden">
							<img src="../assets/sunglasses.png" class="h-full w-auto absolute" alt="Sunglasses">
							<h2 class="absolute bothCenter text-white text-4xl font-semibold">Sunglasses</h2>
						</div>
					</router-link>
				</div>
			</div>
			<div class="mt-5 mx-28">
				<div class="w-full overflow-hidden relative">
					<h1 id="eyeExamText" class="absolute text-white text-6xl font-lora font-bold" style="left:3%;bottom:5%">Eye Exams</h1>
					<img id="eyeExamImage" @click="goExams" class="w-full" src="https://cdn.theatlantic.com/thumbor/xg-O8VrStwMDS8ttx6uG9O3X9b0=/0x118:5520x2992/960x500/media/img/mt/2019/11/RTX3CJCH/original.jpg" alt="">
				</div>
			</div>
		</div>

		<div class="flex flex-row flex-wrap mt-16 my-10 mx-20 justify-center brand-row gap-x-20 gap-y-6 relative">
			<img class="h-20" src="../assets/logos/dior.png" alt="DIOR">
			<img class="h-20" src="../assets/logos/silhouette.png" alt="Silhouette">
			<img class="h-20" src="../assets/logos/gucci.svg" alt="Gucci">
			<img class="h-20" src="../assets/logos/rayband.svg" alt="Rayband">
			<img class="h-20" src="../assets/logos/oakley.svg" alt="Oakley">
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name:'Home',
	methods:{
		goExams(): void{
			this.$router.push('exams')
		}
	}
})
</script>

<style scoped>
	#sideText{
		transform: rotate(-90deg);
	}


	#eyeExamImage{
		filter: brightness(.6);
		transition:.3s ease;
		cursor: pointer;
	}
	#eyeExamImage:hover{
		filter: brightness(.75);
	}
	#eyeExamText{
		z-index: 1;
	}

	#mainText{
		left:2%;
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
		filter: saturate(0);
		transition: .15s ease;
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