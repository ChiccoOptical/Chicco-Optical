<template>
    <div class="bg-gray-300" style="padding-top:72px">
        <div class="w-full" style="height:calc(100vh - 72px)">
            <div class="relative h-full">
                <!-- BACK BUTTON -->
                <!-- <svg 
                    @click="$router.go(-1)"
                    class="cursor-pointer h-12 w-auto rounded-lg"
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
                </svg> -->

                <transition name="titleShow">
                    <img 
                        v-show="imageLoaded"
                        class="left-0 absolute w-4/12"
                        id="logo"
                        :src="resolveBrandImage(product.brand)"
                        :alt="product.brand"
                        style="top:10%"
                    >
                </transition>
                <transition name="imageShow">
                    <img v-show="imageLoaded" :src="product.imageURL" style="right:5%" id="productImage" class="absolute verticalCenter w-6/12" alt="Product Image" @load="imageLoadedTrue">
                </transition>

                <transition name="titleShow">
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
                        <h2 class="text-lg">Model {{product.model}}</h2>

                        <!-- COLOR PODS -->
                        <h3 class="text-lg font-semibold mt-5">Colours</h3>
                        <div class="inline-flex flex-row gap-x-3 justify-center mt-1">
                            <div id="colorPods" :class="{active:colorIndex==3}" class="h-4 w-4 rounded-full overflow-hidden flex flex-row relative" v-for="(colorIndex, index) in [0,1,2,3,4]" :key="index">
                                <div class="h-full w-1/2" :style="'background-color:' + translateFrameColour(product.frameColours[colorIndex])"></div>
                                <div class="h-full w-1/2" :style="'background-color:' + translateLensColour(product.lensColours[colorIndex])"></div>
                            </div>
                        </div>

                        <!-- DETAILS -->
                        <h3 class="text-lg font-semibold mt-3">Details</h3>
                        <div class="flex flex-row items-center">
                            <img class="w-8 mr-2" src="../assets/glassesSize.svg" alt="Glasses Size">
                            <p>{{product.size}}</p>
                        </div>
                        <div class="flex flex-row items-center">
                            <img class="w-8 mr-2" src="../assets/nosepad.svg" alt="Nosepad">
                            <p>{{product.nosepad}}</p>
                        </div>
                        <p>-/+{{product.fitRangeLow}}.00 ➡ -/+{{product.fitRangeHigh}}.00</p>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import product from '../types/product'

import mixins from 'vue-typed-mixins'
import getProductMixin from '@/mixins/getProduct'
import resolveBrandImage from '@/mixins/resolveBrandImage'
import translateColours from'@/mixins/translateColours'


export default mixins(getProductMixin, resolveBrandImage, translateColours).extend({
    name:'Product-Listing',
    data(){
        return{
            product:{} as product,
            imageLoaded:false
        }
    },
    methods: {
        imageLoadedTrue(){
            this.imageLoaded = true
        }
    },
    beforeMount(){
        const productType = this.$route.path.slice(1).split("/")[0]
        const gender = this.$route.path.slice(1).split("/")[1]
        const id = this.$route.params.id

        this.getProductByID(id, productType, gender).then(data=>{
            this.product = data
        })
    }
})
</script>

<style scoped>
    #colorPods{
        border: 3px solid #c5c5c5;
        box-sizing: content-box;
    }
    #colorPods.active{
        transform: scale(1.3);
        box-shadow: 0 0 0 1pt black;
    }
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
</style>