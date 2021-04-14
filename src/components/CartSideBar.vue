<template>
    <div class="bg-white rounded-bl-2xl py-7 px-10 w-1/3 fixed right-0 bottom-0 z-20 flex flex-col" style="height:calc(100vh - 72px);">
        <h1 class="font-bold text-3xl mb-3 mt-2">Shopping Cart</h1>
        <p class="mb-10">You have {{$store.state.cart.length}} items in the cart</p>
        
        <transition-group name="cartSlide" mode="out-in" tag="div" class="relative">
            <div v-for="(item, i) in $store.state.cart" :key="i" class="flex flex-row items-center mb-4">
                <router-link :to="`/${item.productType}/${item.gender}/${item.id}`" class="flex-1">
                    <div class="flex flex-row items-center justify-between" v-on:click="$emit('toggle-cart')">
                        <img :src="item.imageURL" class="h-10" alt="Glasses" >
                        <p class="font-bold text-2xl">{{item.model}}</p>
                        <p class="font-bold text-gray-400">{{format(item.price ? item.price : 0)}}</p>
                    </div>
                </router-link>
                <svg class="w-6 h-6 flex-0 ml-4 cursor-pointer" @click="removeItem(i)" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
        </transition-group>

        <div class="flex-1 flex flex-col justify-end">
            <button
                class="font-semibold text-2xl w-full p-3 rounded-xl bg-blue-500 relative disabled:opacity-50 disabled:cursor-not-allowed noOutline focus:ring"
                :disabled="!!($store.state.cart.length == 0)"
                v-on:click="checkout()"
            >
                <svg class="w-6 h-6 absolute verticalCenter" style="right:5%" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                Checkout
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name:"Cart-Sidebar",
    methods:{
        checkout(){
            this.$emit('toggle-cart')
            this.$router.push('/checkout')
        },
		format(num:number){
			return num.toLocaleString('en-US', { style: 'currency', currency: 'USD', })
		},
        removeItem(itemNum: number){
            this.$store.commit('removeFromCart', itemNum)
        }
    }
})
</script>

<style scoped>
    /* CART SLIDE */
    .cartSlide-enter-active{
        transition: opacity 0.25 ease;
    }
    .cartSlide-leave-active{
        transition: opacity 0.25 ease;
        position: absolute
    }
    .cartSlide-move{
        transition: all 0.3 ease;
    }
    .cartSlide-enter,
    .cartSlide-leave-to {
        transform: translateX(20%);
        opacity: 0;
    }
</style>