<template>
    <router-link :to="this.$route.fullPath + '/' +  product.id" class="flex items-end">
    <div class="p-6 text-center cursor-pointer relative w-full h-full">
        <!-- PRODUCT -->
        <img class="w-full" :src="product.imageURL" alt="IMAGE NOT FOUND" style="z-index:1;aspect-ratio:381 / 162;object-fit:contain">

        <!-- BRAND BACKGROUND -->
        <img id="brand" class="absolute opacity-25 top-0 right-0 w-3/5" :src="require(`@/assets/logos/${resolveBrandImage(product.brand)}`)" alt="">

        <!-- TITLE -->
        <h1 class="text-4xl mt-4 font-bold">{{ product.title }}</h1>
        <color-pods :frameColours="product.frameColours" :lensColours="product.lensColours" class="mt-3"></color-pods>
    </div>
    </router-link>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import resolveBrandImage from '@/mixins/resolveBrandImage'
import colorPods from '@/components/colourPods.vue'

export default defineComponent({
    name:'itemCard',
    mixins:[resolveBrandImage],
    props:{
        'product':{
            type:Object,
            required:true
        },
    },
    data: () => {
        return{
            imageLoaded:false
        }
    },
    components:{
        'color-pods':colorPods
    },
    created(){
        fetch(this.product.imageURL, {
            method: 'GET',
            mode: 'no-cors'
        }).then(()=>{
            this.imageLoaded = true
        })
    }
})
</script>