<template>
    <router-link :to="this.$route.path + '/' +  product.id" class="flex items-end">
    <div class="p-6 text-center cursor-pointer relative">
        <!-- PRODUCT -->
        <img class="w-full" :src="product.imageURL" alt="IMAGE NOT FOUND" style="z-index:1">

        <!-- BRAND BACKGROUND -->
        <img id="brand" class="absolute opacity-25 top-0 right-0 w-3/5" :src="resolveBrandImage(product.brand)" alt="">

        <!-- TITLE -->
        <h1 class="text-4xl mt-2 font-bold">{{ product.title }}</h1>
        <!-- <div class="flex flex-row gap-x-3 justify-center mt-3">
            <div id="colorPods"
            class="h-5 w-5 rounded-full overflow-hidden flex flex-row relative" 
            v-for="(colorIndex, index) in product.frameColours" :key="index">
                <div class="h-full w-1/2" :style="'background-color:' + product.frameColours[index]"></div>
                <div class="h-full w-1/2" :style="'background-color:' + product.lensColours[index]"></div>
            </div>
        </div> -->
        <color-pods :frameColours="product.frameColours" :lensColours="product.lensColours" class="mt-3"></color-pods>
    </div>
    </router-link>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import resolveBrandImage from '@/mixins/resolveBrandImage'

import colorPods from '@/components/colourPods.vue'

export default mixins(resolveBrandImage).extend({
    name:'itemCard',
    props:{
        'product':{
            type:Object,
            required:true
        }
    },
    components:{
        'color-pods':colorPods
    },
})
</script>