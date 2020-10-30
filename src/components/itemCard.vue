<template>
    <div class="p-6 text-center hoverLarge cursor-pointer">
        <img class="w-full" :src="'' + imageURL" alt="IMAGE NOT FOUND">
        <h1 class="text-4xl mt-2 font-bold">{{ title }}</h1>
        <h3>${{ halves[0] }}.<small>{{ halves[1] }}</small></h3>
    </div>    
</template>

<script lang="ts">
import Vue from 'vue'
// import firebase from 'firebase'

export default Vue.extend({
    name:'itemCard',
    props:{
        'title':{
            type:String,
            required:true
        },
        'price':{
            type:Number,
            required:true
        },
        'productType':{
            type:String,
            required:true
        },
        'id':{
            type:String,
            required:true
        }
    },
    data(){
        return{
            imageURL:""
        }
    },
    created(){
        // GET THE DOWNLOAD URL OF THE IMAGE(Based on the product ID) and add it to productData
        // try {
        //     firebase.storage().ref(this.productType + "/" + this.id + ".png").getDownloadURL().then((result)=>{
        //         this.imageURL = result;
        //     });
        // } catch (error) {
        //     console.log("No Image Error");  
        // }
    },
    computed:{
        halves: function(){
            return String(this.price).split('.')
        }
    }
})
</script>

<style scoped>

</style>