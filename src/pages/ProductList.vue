<template>
    <div class="bg-yellow-600" v-if="gender">
        <div style="height:72px"></div>
        <div class="relative maxWidthPage w-5/6" style="height:50vh;max-height: 500px;">
            <img src="../assets/glasses.png" alt="Glasses" class="w-5/12 absolute verticalCenter">
            <div class="absolute verticalCenter flex flex-col items-end right-0">
                <!-- <p class="capitalize" style="line-height:100%">{{ productType }}</p> -->
                <h1 class="text-6xl font-bold capitalize" style="line-height:100%">{{ productType }}</h1>
                <h3 class="capitalize">{{gender}}</h3>    
            </div>
        </div>

        <div class="bg-white w-5/6 mx-auto">
        <transition name="fade" mode="out-in">
            <div key="loading" class="flex items-center justify-center h-screen/2" v-if="!loaded">
                <loading-progress
                    :progress="0"
                    :indeterminate="true"
                    size="128"
                    rotate
                    fillDuration="2"
                    rotationDuration="1"
                    class="mx-auto"
                />
            </div>
            <div key="loaded" class="px-10 py-12 grid grid-cols-3 gap-10" v-else-if="loaded">
                <item-card
                    v-for="(item, index) in productList"
                    :key="index"
                    :product="item"
                ></item-card>
            </div>
        </transition>
        </div>
    </div>

    <!-- GENDER SELECTOR ON /glasses, /contactlenses, /sunglasses -->
    <div v-else class="h-screen w-full grid lg:grid-cols-2 grid-rows-2 lg:grid-rows-1" style="padding-top:72px">
        <router-link :to="productType+'/men'" :class="'genderSelector'+productType+'men'" class="relative genderSelectorBackground flex justify-center items-center text-6xl font-bold text-white">
            Mens
        </router-link>
        <router-link :to="productType+'/women'" :class="'genderSelector'+productType+'women'" class="relative genderSelectorBackground flex justify-center items-center text-6xl font-bold text-white">
            Women
        </router-link>
    </div>
</template>

<script lang="ts">
    import product from '../types/product'

    // import loadingComponent from '@/components/loadingComponent.vue'
    // import errorComponent from '@/components/errorComponent.vue'
    // const itemcard = () => ({
    //     component: import(/*webpackChunkName: "itemcard"*/ '../components/itemCard.vue'),
    //     loading: loadingComponent,
    //     error: errorComponent
    // });

    
    // MIXING ACTIVITY
    import getProductsMixin from '../mixins/getProduct'
    import Product from '../types/product';
    import {defineComponent} from 'vue';
    import { useRoute } from 'vue-router'
    const router = useRoute()

    export default defineComponent({
        name:'ProductList',
        mixins:[getProductsMixin],
        components:{
            'item-card': ()=>import(/*webpackChunkName: "itemcard"*/ '@/components/itemCard.vue'),
        },
        data:() => {
            return {
                productList:[] as product[],
                productType: router.path.slice(1).split("/")[0],
                gender: router.path.slice(1).split("/")[1],
                loaded:false,
            };
        },
        created(){
            if(!this.gender){
                return
            }
            this.getAllProducts(this.productType, this.gender).then((productList: Product[]) =>{
                this.productList = productList
                this.loaded = true;
            })
        }
    })
</script>

<style scoped>

</style>