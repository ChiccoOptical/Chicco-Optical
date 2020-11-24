<template>
    <div class="bg-orange-400" v-if="gender">
        <div style="height:72px"></div>
        <div class="relative" style="height:50vh">
            <img src="../assets/glasses.png" alt="Glasses" class="h-full" style="transform: scale(0.7)">
            <div class="absolute verticalCenter flex flex-col items-end" style="right:10%;">
                <!-- <p class="capitalize" style="line-height:100%">{{ productType }}</p> -->
                <h1 class="text-6xl font-bold" style="line-height:100%">Sunglasses</h1>
                <h3>{{gender}}</h3>    
            </div>
        </div>
        <div class="bg-white mx-20 p-6 pt-12 grid grid-cols-3 gap-10">
            <item-card
                v-for="(item, index) in productList"
                :key="index"
                :product="item"
            ></item-card>
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
    import mixins from 'vue-typed-mixins'
    import getProductsMixin from '../mixins/getProduct'


    export default mixins(getProductsMixin).extend({
        name:'ProductList',
        components:{
            'item-card': ()=>import(/*webpackChunkName: "itemcard"*/ '@/components/itemCard.vue'),
        },
        data(){
            return{
                productList:[] as product[],
                productType:this.$route.path.slice(1).split("/")[0],
                gender:this.$route.path.slice(1).split("/")[1],
            }
        },
        created(){
            if(!this.gender){
                return
            }
            this.getAllProducts(this.productType, this.gender).then(productList =>{
                this.productList = productList
            })
        }
    })
</script>

<style scoped>

</style>