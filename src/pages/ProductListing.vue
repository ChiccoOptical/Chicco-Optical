<template>
    <div class="bg-gray-300">
        <div class="w-full h-screen maxWidthPage" v-if="loaded">
            <div class="relative h-full">
                <!-- BACK BUTTON -->
                <svg
                    @click="upOneLevel"
                    class="cursor-pointer absolute h-12 w-auto rounded-lg bg-white z-10"
                    style="top:100px"
                    id="backButton"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                        width="100%"
                        height="100%"
                    ></path>
                </svg>

                <transition name="titleShow">
                    <img 
                        v-show="imageLoaded"
                        class="absolute w-4/12"
                        id="logo"
                        :src="require('@/assets/logos/' + resolveBrandImage(product.brand))"
                        :alt="product.brand"
                        style="top:15%;left:2%"
                    >
                </transition>
                <transition name="imageShow">
                    <img v-show="imageLoaded" :src="product.imageURL" style="right:5%" id="productImage" class="absolute verticalCenter w-6/12" alt="Product Image" @load="imageLoadedTrue">
                </transition>

                <transition name="titleShow" appear>
                    <!-- BLOCK OF TEXT -->
                    <div
                        v-if="product.title"
                        class="absolute"
                        style="
                            left:18%;
                            bottom:15%;
                            z-index:1
                        "
                        id="titleblock"
                    >
                        <h1 class="font-bold leading-tight mb-2" style="font-size:4.5rem">
                            {{product.title}}
                        </h1>
                        <h2 class="text-lg">Model: <strong>{{product.model}}</strong></h2>

                        <!-- COLOR PODS --> 
                        <h3 class="text-lg font-semibold mt-5">Colours</h3>
                        <color-pods :frameColours="product.frameColours" :lensColours="product.lensColours"></color-pods>

                        <!-- DETAILS -->
                        <h3 class="text-lg font-semibold mt-3">Details</h3>
                        <div class="flex flex-row items-center">
                            <img class="w-8 mr-2" src="../assets/icons/glassesSize.svg" alt="Glasses Size">
                            <p>{{product.size}}</p>
                        </div>
                        <div class="flex flex-row items-center">
                            <img class="w-8 mr-2" src="../assets/icons/nosepad.svg" alt="Nosepad">
                            <p>{{product.nosepad}}</p>
                        </div>
                        <p>-/+{{product.fitRangeLow}}.00 ➡ -/+{{product.fitRangeHigh}}.00</p>


                        <button @click="addCart()" id="addCartButton" class="flex flex-row focus:ring noOutline bg-white hover:bg-gray-200 transition-colors p-3 px-4 mt-4 rounded-md">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            <p class="ml-2 font-bold">ADD TO CART</p>
                        </button>
                    </div>
                </transition>
            </div>
        </div>
        <div class="flex items-center justify-center h-screen" v-else>
            <loading-progress
                :indeterminate="true"
                size="128"
                rotate
                fillDuration="2"
                rotationDuration="1"
            />
        </div>
    </div>
</template>

<script lang="ts">
import product from '@/types/product'

import mixins from 'vue-typed-mixins'
import getProductMixin from '@/mixins/getProduct'
import resolveBrandImage from '@/mixins/resolveBrandImage'

import colorPods from '@/components/colourPods.vue'

export default mixins(getProductMixin, resolveBrandImage).extend({
    name:'Product-Listing',
    components:{
        'color-pods':colorPods
    },
    data(){
        return{
            product:{} as product,
            imageLoaded:false,
            loaded:false
        }
    },
    methods: {
        imageLoadedTrue(){
            this.imageLoaded = true
        },
        addCart(){
            this.$store.commit('addToCart', this.product)
        },
        upOneLevel(){
            let upperPath = this.$route.path.split("/")
            if(upperPath.length > 0) {
                upperPath.splice(upperPath.length-1)
                this.$router.push(upperPath.join("/"))
            }
        }
    },
    created(){
        [require('../assets/icons/nosepad.svg'), require('../assets/icons/glassesSize.svg')].forEach(url=>{
            new Image().src = url;
        })
        const productType = this.$route.path.slice(1).split("/")[0]
        const gender = this.$route.path.slice(1).split("/")[1]
        const id = this.$route.params.id

        this.getProductByID(id, productType, gender).then(data=>{
            this.product = data
            this.loaded = true;
        }).catch(()=>{
            this.upOneLevel()
        })
    },
})
</script>

<style scoped>
    #logo{
        opacity: .1;
    }
    #productImage{
        filter: drop-shadow(21px 18px 20px #0000003d);
    }

    /* IMAGE TRANSITION */
    .imageShow-enter,
    .imageShow-leave-to{
        opacity: 0;
        transform: translateY(calc(-50% + 1rem));
    }
    .imageShow-enter-to,
    .imageShow-leave{
        opacity: 1;
        transform: translateY(-50%);
    }
    .imageShow-enter-active,
    .imageShow-leave-active{
        transition: all .6s ease;
    }

    /* TITLE TRANSITION */
    .titleShow-enter,
    .titleShow-leave-to{
        opacity: 0;
        transform: translateY(1rem);
    }
    .titleShow-enter-to,
    .titleShow-leave{
        opacity: 1;
        transform: translateY(0);
    }
    .titleShow-enter-active,
    .titleShow-leave-active{
        transition: all .7s ease;
    }

    #addCartButton{
        transition: transform ease-out 0.1s;
    }
    #addCartButton:active{
        transform: scale(0.9);
    }
</style>