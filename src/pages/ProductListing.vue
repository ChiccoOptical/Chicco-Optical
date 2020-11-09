<template>
    <div class="h-screen pt-20">
        <a @click="$router.go(-1)" class="cursor-pointer">back</a>
        <img src="" alt="Product Image">
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import db from '../firebase'
import product from '../types/product'
export default Vue.extend({
    name:'Product-Listing',
    data(){
        return{
            gender:this.$route.path.slice(1).split("/")[1],
            product:{
                id:this.$route.params.id,
                productType:this.$route.path.slice(1).split("/")[0],
                imageURL:'@productListing'
            } as product
        }
    },
    beforeMount(){
        const productDatabase = db.collection(['products', this.product.productType,this.gender].join('/'));
        productDatabase.doc(this.product.id).get().then((data)=>{
            this.product = data.data() as product
        })
    }
})
</script>