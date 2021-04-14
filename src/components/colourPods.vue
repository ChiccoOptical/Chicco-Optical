<template>
    <div class="inline-flex flex-row gap-x-3 justify-center mt-1">                        
        <div 
            id="colorPods"
            class="h-6 w-6 rounded-full overflow-hidden flex flex-row relative"
            v-for="(_, index) in frameColours"
            :key="index"
        >
            <div class="h-full w-1/2" :style="'background-color:' + frameColours[index]"></div>
            <div class="h-full w-1/2" :style="'background-color:' + lensColours[index]"></div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name:'colour-pods',
    props:['frameColours', 'lensColours']
})
</script>

<style scoped>
    #colorPods::before{
        content:'';
        border-radius: 999px;
        width: 100%;
        height: 100%;
        position:absolute;
        border: 3px solid #d1d1d1;
    }
    #colorPods.active{
        transform: scale(1.3);
        box-shadow: 0 0 0 1pt black;
    }
</style>