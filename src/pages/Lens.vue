<template>
	<div class="lensRoot">
		<div style="height:72px"></div>
		<div class="relative overflow-hidden h-screen/2">
			<img class="w-full" src="https://bl-img-s3-2.imgix.net/common/lenses/Lenses_desktop_3072x1068.jpg?auto=format&fit=clip&ixlib=php-1.2.1&w=2048&s=3f9349bce4f031378698f532fa3760f6" alt="Lens">
			<h1 class="absolute text-6xl font-bold font-lora verticalCenter" style="right:10%">Lenses</h1>
		</div>

		<div class="w-full flex flex-row justify-between items-center gap-x-4 py-10 cardRow relative maxerWidthPage" style="padding-right:15%;padding-left:15%;">   <!-- CARD ROW -->
			<h1 class="font-bold font-lora labelTitle labelTitle1 absolute">Steps</h1>
			<!-- CARD 1 -->
			<div class="bg-blue-200 flex flex-col items-center w-1/3 py-8 shadow-xl hover:shadow-2xl">
				<img src="@/assets/icons/card1.svg" class="h-32 w-32" alt="Icon for Card 1">
				<h1 class="text-3xl font-bold">Get a Prescription</h1>
				<p>oiewjrownuydvnzliosjroiw</p>
				<a class="readMoreLink inline-flex justify-center items-center m-2" href="#section1">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
					Read More
				</a>
			</div>
			<!-- PLUS -->
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
			<!-- CARD 2 -->
			<div class="bg-pink-200 flex flex-col items-center w-1/3 py-8 shadow-xl hover:shadow-2xl">
				<img src="@/assets/icons/card2.svg" class="h-32 w-32" alt="Icon for Card 2">
				<h1 class="text-3xl font-bold">Lens & Frame Width</h1>
				<p>oiewjrownuydvnzliosjroiw</p>
				<a class="readMoreLink inline-flex justify-center items-center m-2" href="#section2">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
					Read More
				</a>
			</div>
			<!-- PLUS -->
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
			<!-- CARD 3 -->
			<div class="bg-yellow-200 flex flex-col items-center w-1/3 py-8 shadow-xl hover:shadow-2xl">
				<img src="@/assets/icons/card3.svg" class="h-32 w-32" alt="Icon for Card 3">
				<h1 class="text-3xl font-bold">Lens Treatements</h1>
				<p>oiewjrownuydvnzliosjroiw</p>
				<a class="readMoreLink inline-flex justify-center items-center m-2" href="#section3">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
					Read More
				</a>
			</div>
		</div>

		<div class="bg-blue-200" id="section1">
			<div class="flex flex-row items-center justify-around gap-x-6 mx-auto w-4/5 py-10 maxWidthPage relative">
				<h1 class="font-bold font-lora labelTitle labelTitle2 absolute">Prescription</h1>
				<div class="flex-1">
					<div class="flex flex-row mb-3">
						<img src="../assets/icons/prescription1.svg" alt="Perscription 1" class="mr-4 inline h-8 w-8">
						<h1 class="text-2xl font-semibold inline font-lora narrow">Get an eye exam</h1>
					</div>
					<p class="mb-2">An eye exam consists of a series of tests that give your eye doctor the full picture of what’s going on with your vision.</p>
					<router-link to="/exams" class="signUpLink p-2 font-semibold">Sign up for an eye exam</router-link>
				</div>
				<!-- PLUS -->
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
				<div class="flex-1">
					<div class="flex flex-row mb-3">
						<img src="../assets/icons/prescription2.svg" alt="Perscription 2" class="mr-4 inline h-8 w-8">
						<h1 class="text-2xl font-semibold inline font-lora narrow">Keep a copy</h1>
					</div>
					<p>Your prescription may seem intimidating at first, but this handy piece of paper indicates your corrective needs. If you want to understand what those symbols mean, check out our blog post.</p>
				</div>
				<!-- PLUS -->
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
				<div class="flex-1">
					<div class="flex flex-row mb-3">
						<img src="../assets/icons/prescription3.svg" alt="Perscription 3" class="mr-4 inline h-8 w-8">
						<h1 class="text-2xl font-semibold inline font-lora narrow">Take your Pupilary Distance</h1>
					</div>
					<p>Your pupillary distance is the distance between the centres of your pupils. It is used to properly align your lenses and ensure accurate vision.</p>
				</div>
			</div>
		</div>

		<div class="bg-pink-200" id="section2">
			<div class="maxWidthPage relative py-6 w-4/5">
				<h1 class="font-bold font-lora labelTitle labelTitle3 absolute">Lenses</h1>
				<table class="lensTable mx-auto w-3/4">
					<tr>
						<th></th>
						<th class="font-lora text-3xl font-semibold">Standard</th>
						<th class="font-lora text-3xl font-semibold">Thinner</th>
						<th class="font-lora text-3xl font-semibold">Thinnest</th>
					</tr>
					<tr>
						<th class="font-rubik uppercase font-normal">Price</th>
						<th class="font-normal">Starts at $149</th>
						<th class="font-normal">Starts at $199</th>
						<th class="font-normal">Starts at $349</th>
					</tr>
					<tr>
						<th class="font-rubik uppercase font-normal">Material</th>
						<th class="font-normal">1.5 Plastic</th>
						<th class="font-normal">1.67 Plastic</th>
						<th class="font-normal">1.74 Plastic</th>
					</tr>
				</table>
			</div>
		</div>

		<div class="bg-yellow-200 flex items-center justify-center" style="height:792px" id="section3">
			<div class="w-4/5 h-2/3 bg-white flex flex-row maxWidthPage relative" style="min-width:1000px">
				<h1 class="font-bold font-lora labelTitle labelTitle4 absolute">Treatments</h1>
				<transition v-on:enter="newImage" name="fade" mode="out-in">
					<img id="treatmentImage" class="h-full" :key="selectedTreatment">
				</transition>
				<form class="bg-red-500 w-full overflow-y-scroll scrollBar lensList">
					<div class="w-full" v-for="(treatment, index) in treatments" :key="index">
						<!-- RADIO BUTTON -->
						<input 
							type="radio" name="treatment" 
							:id="index" :value="index"
							class="hidden"
							v-model="selectedTreatment"
						>
						<!-- BUTTON SEEN -->
						<label
							class="w-full bg-white block cursor-pointer p-2 text-xl font-semibold"
							:for="index"
						>
							{{treatment.name}}
						</label>
						<div class="treatmentContent flex"><!-- content  -->
							<div>
								{{treatment.content}}
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
		<!-- <div class="grid grid-cols-2 mx-56 gap-x-10 gap-y-16 mb-10" id="blog">
			<div>
				<img src="https://bl-img-s3.imgix.net/common/lenses/Lenses_Type_2700x1650.jpg?auto=format&fit=clip&ixlib=php-1.2.1&w=900&s=90983a4468cb9db979e0d72499fb528f" alt="">
				<h1>Find Right Perscription</h1>
			</div>

			<div>
				<img src="https://bl-img-s3-2.imgix.net/common/lenses/Lenses_Treatments_Soho_2700x1650.jpg?auto=format&fit=clip&ixlib=php-1.2.1&w=900&s=0b2ee34c515c2833bcb8049114f04315" alt="">
				<h1>Treat your lenses</h1>
			</div>

			<div>
				<img src="https://bl-img-s3.imgix.net/common/lenses/Lenses_Progressive_Joy_2700x1650.jpg?auto=format&fit=clip&ixlib=php-1.2.1&w=900&s=cb8c34623212fb7cea170346644bf7a2" alt="">
				<h1>Single vision vs Presbyopic Lenses</h1>
			</div>
			
			<div>
				<img src="https://bl-img-s3-2.imgix.net/common/lenses/Lenses_anti_fatigue_loft_2700x1650.jpg?auto=format&fit=clip&ixlib=php-1.2.1&w=900&s=5fdcf41ea12aadcaae83bbda935a0da3" alt="">
				<h1>Anti-fatigue Lens</h1>
			</div>
		</div> -->
	</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
	name:"lenses",
	data: () => {
		return{
			treatments:[
				{
					name:'Scratch Resistance + AntiGlare',
					imageURL: 'scratchResistant.jpg',
					content:'The scratch-resistant treatment improves scratch and friction resistance. It protects your lenses from minor micro-scratches caused by normal use of your glasses. The scratch-resistant treatment will extend the life of your lenses.',
				},
				{
					name:'Bluelight Filter',
					imageURL: 'bluelightProtection.jpg',
					content:'As the widespread use of smart phones & tablets increases, you are increasingly exposed to blue light (especially if you’re addicted to your cell phone as much as we are). In fact, our everyday devices emit strong blue light which scatters easily, reducing contrast and causing eye fatigue. Several ongoing research and specialists believe that this type of light would disturb sleep and be responsible for degenerative eye diseases, caused by the premature aging of retinal cells.',
				},
				{
					name:'Tint',
					imageURL: 'tinted.jpg',
					content:'Enjoy the sun without damaging your eyes. Our high quality sunglass lenses provide optimum protection for your eyes with 100% UVA and UVB protection',
				},
				{ 
					name:'Anti-Fatigue',
					imageURL: 'antiFatigue.jpg',
					content:'Do your eyes feel tired or do you suffer from headaches in late afternoon when you’ve been working at a near distance all day (i.e. computer and reading)? If so, anti-fatigue lenses might be the solution for you! The purpose of these tailor-made lenses is to relieve your eyes’ accommodation muscles by providing a small addition at the bottom of the lens. The lens is divided into two main vision areas: the upper section of the lens is where your distance prescription is, and the lower section includes a small addition of +0.60 dioptre. Besides relieving visual fatigue thanks to the small addition, these lenses also protect your eyes from blue light for maximum visual comfort.',
				},
				{
					name:'Photochromatic',
					imageURL: 'photochromic.jpg',
					content:'With the photochromic treatment, your lenses progressively darken or lighten upon spontaneous change of light intensity. The lenses are clear indoors and at night.\nThe photochromic treatment offers:\nPracticality: only one pair for indoors and outdoors\nComfort: reduces visual strain and glare from the sun\n100% UV protection\nThis treatment is strongly recommended for photosensitive people as it offers maximum protection against UV rays.\nNote that photochromic lenses do not darken in the car. They darken when exposed to UV rays, but your car’s windshield blocks those rays.',
				},
				{
					name:'Polarized',
					imageURL: 'polarized.jpg',
					content:'The polarized treatment is applied to solar lenses to improve the comfort and increase the visual protection. The light diffused by the sun is propagated in all directions. When the light hits a flat and reflecting surface such as water, snow or sand, it causes unpleasant glare. The polarized filter blocks bothersome rays and lets through only the ones that carry useful light. The filter acts as a barrier that prevents the reflected ray from getting inside the eye, for an optimum perception and increased comfort.',
				},
				{
					name:'Anti-Glare',
					imageURL: 'antiGlare.jpg',
					content:'The anti-glare treatment is a very fine coating applied to the lens to eliminate reflections at the front and at the back of the lens. It makes your lenses virtually invisible. Your lenses will be more comfortable when reading or using the computer, and your vision will be improved when driving at night.',
				},
				{
					name:'Gradient',
					imageURL: 'gradient.jpg',
					content:'',
				},
			],
			imageCache:[] as HTMLImageElement[],
			selectedTreatment: -1,
			treatmentImageSRC:'',
		}
	},
	methods:{
		getImage(imageURL: string){
			return require('@/assets/lensTreatments/' + imageURL)
		},
		newImage(){
			const thingy = document.getElementById('treatmentImage') as HTMLImageElement;
			console.log(thingy, document);
			if (thingy) thingy.src = this.getImage(this.treatments[this.selectedTreatment].imageURL)
		}
	},
	created(){
		//PRELOAD ALL IMAGES IN
		for(const [, treatment] of Object.entries(this.treatments)){
			const thing = new Image()
			thing.src = this.getImage(treatment.imageURL);
			this.imageCache.push(thing)
		}
	}
})
</script>

<style scoped>
	.lensList input[type="radio"]:checked + label{
		background-color: black;
		color:white;
	}
	.lensList label{
		transition: 200ms ease;
	}

	#blog div h1{
		font-family: Lora;
		text-align: center;
		font-size: 1.8rem;
		font-weight: 700;
		margin-top: 0.5rem;
	}

	.labelTitle{
		transform-origin: center left;
		transform: rotate(-90deg);
		left: 5%;
		font-size: 1.5rem;
	}
	.labelTitle1{
		top: 35%;
	}
	.labelTitle2, .labelTitle4, .labelTitle3{
		left:-6%;
	} 
	.labelTitle2{
		top: 65%;
	}
	.labelTitle3{
		top:6rem;
	}
	.labelTitle4{
		top: 30%;
	}

	.readMoreLink {
		position: relative;
		overflow: hidden;
		text-decoration: none;
		z-index: 2;
	}

	.readMoreLink::after {
		content: "";
		background: rgb(127, 119, 238);
		opacity: 0.6;
		position: absolute;
		right: 5px;
		bottom: -6px;
		width: 80%;
		height: 80%;
		transition: 150ms cubic-bezier(0.27, 0.84, 0.75, 0.97);
		z-index: -1;
	}
	.readMoreLink:hover:after {
		right: 0;
		bottom: -2px;
		width: 100%;
		height: 130%;
	}

	.cardRow div{
		transition: 200ms ease;
	}
	.cardRow div:hover{
		transform: scale(1.05);
	}

	.signUpLink{
		display: inline-block;
		position: relative;
		text-decoration: none;
		color: inherit;
		z-index: 1;
	}

	.signUpLink::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		height: .1em;
		width: 100%;
		background: #7484ca;
		z-index: -1;
		transition: height .25s cubic-bezier(.6,0,.4,1);
	}

	.signUpLink:hover::after {
		height: 100%;
	}

	.narrow{
		font-variation-settings: 'wdth' 55%;
	}

	.treatmentContent{
		overflow: hidden;
		transition: 400ms ease;
		max-height: 0;
	}
	.lensList div input[type="radio"]:checked ~ .treatmentContent{
		padding:0.5rem;
		max-height: 27rem;
	}

	.lensTable tr th{
		padding: 0.8rem;
		width:25%;
		text-align: left;
	}
	.lensTable tr:nth-child(2n){
		background-color: #9c9c9c57;
	}

</style>