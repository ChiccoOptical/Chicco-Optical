<template>
    <selector-gender glassesType="sunglasses"></selector-gender>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import selectorGender from '@/components/selectorGender.vue'
export default defineComponent({
    name:"SelectorGenderSunglasses",
    components:{
        'selector-gender': selectorGender
    }
})
</script>