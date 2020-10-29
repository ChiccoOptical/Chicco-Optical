<template>
    <div class="bg-orange-400">
        <div style="height:72px"></div>
        <div class="relative" style="height:50vh">
            <img src="../assets/glasses.png" alt="Glasses" class="h-full" style="transform: scale(0.7)">
            <div class="absolute verticalCenter flex flex-col items-end" style="right:10%;">
                <p style="line-height:100%">Small Text</p>
                <h1 class="text-6xl font-bold" style="line-height:100%">Main Text</h1>
                <h3>Little Text</h3>    
            </div>
        </div>
        <div class="bg-white mx-20 p-6 pt-12 grid grid-cols-3 gap-10">
            <item-card
                v-for="(item, index) in glasses"
                :key="index"
                :title="item.title"
                :price="item.price"
                :imageURL="item.imageURL"
            ></item-card>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import itemCard from '../components/itemCard.vue'
import firestore from '../firebase'
export default Vue.extend({
    name:'ProductList',
    components:{
        'item-card':itemCard
    },
    data(){
        return{
            glasses: [],
            contacts: [],
            sunglasses: [],
        }
    },
    firestore
})
</script>

<style scoped>

</style>