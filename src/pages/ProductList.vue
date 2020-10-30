<template>
    <div class="bg-orange-400">
        <div style="height:72px"></div>
        <div class="relative" style="height:50vh">
            <img src="../assets/glasses.png" alt="Glasses" class="h-full" style="transform: scale(0.7)">
            <div class="absolute verticalCenter flex flex-col items-end" style="right:10%;">
                <p class="capitalize" style="line-height:100%">{{ productType }}</p>
                <h1 class="text-6xl font-bold" style="line-height:100%">Main Text</h1>
                <h3>Little Text</h3>    
            </div>
        </div>
        <div class="bg-white mx-20 p-6 pt-12 grid grid-cols-3 gap-10">
            <item-card
                v-for="(item, index) in productList"
                :key="index"
                :title="item.title"
                :price="item.price"
                :productType="item.productType"
                :id="item.id"
            ></item-card>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import itemCard from '../components/itemCard.vue'
    import db from '../firebase'
    import product from '../types/product'

    export default Vue.extend({
        name:'ProductList',
        components:{
            'item-card':itemCard
        },
        data(){
            return{
                productList:[] as product[],
                productType:this.$route.path.slice(1)
            }
        },
        beforeMount(){
            db.collection(this.productType).get().then((snapshot)=>{
                snapshot.forEach((product) => {
                    const productData = product.data() as product;
                    productData.id = product.id
                    productData.productType = this.productType
                    //Add productData to productList
                    this.productList.push(productData);
                });
            })
            
        }
    })
</script>

<style scoped>

</style>