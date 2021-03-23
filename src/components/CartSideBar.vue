<template>
    <div class="bg-white rounded-bl-2xl py-7 px-10 w-1/4 fixed right-0 bottom-0 z-10 flex flex-col" style="height:calc(100vh - 72px);">
        <h1 class="font-bold text-3xl mb-3 mt-2">Shopping Cart</h1>
        <p>You have {{this.$store.state.cart.length}} items in the cart</p>
        
        <div class="flex flex-col gap-4 mt-10">
            <div v-for="(item, i) in this.$store.state.cart" :key="i">
                <router-link :to="`/${item.productType}/${item.gender}/${item.id}`">
                    <div class="flex flex-row items-center justify-between" v-on:click="$emit('toggle-cart')">
                        <img :src="item.imageURL" class="h-10" alt="Glasses" >
                        <p class="font-bold text-2xl">{{item.model}}</p>
                        <p class="font-bold text-gray-400">{{format(item.price ? item.price : 0)}}</p>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="flex-1 flex flex-col justify-end">
            <button
                class="font-semibold text-2xl w-full p-3 rounded-xl bg-blue-500 relative disabled:opacity-50 disabled:cursor-not-allowed noOutline focus:ring"
                :disabled="!!this.$store.state.cart.length == 0"
                v-on:click="checkout()"
            >
                <svg class="w-6 h-6 absolute verticalCenter" style="right:5%" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                Checkout
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"Cart-Sidebar",
    methods:{
        checkout(){
            this.$emit('toggle-cart')
            this.$router.push('/checkout')
        },
		format(num:number){
			return num.toLocaleString('en-US', { style: 'currency', currency: 'USD', })
		}
    }
})
</script>