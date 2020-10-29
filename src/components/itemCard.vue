<template>
    <div class="p-6 text-center hoverLarge cursor-pointer">
        <img class="w-full" :src="imageURL" alt="Glasses">
        <h1 class="text-4xl mt-2 font-bold">{{ title }}</h1>
        <h3>${{ halves[0] }}.<small>{{ halves[1] }}</small></h3>
    </div>    
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'itemCard',
    props:['title', 'price', 'imageURL'],
    computed:{
        halves: function(){
            return String(this.price).split('.')
        }
    }
})
</script>

<style scoped>

</style>