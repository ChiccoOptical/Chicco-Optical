<template>
    <selector-gender glassesType="sunglasses"></selector-gender>
</template>

<script lang="ts">
import Vue from 'vue'
import selectorGender from '@/components/selectorGender.vue'
export default Vue.extend({
    name:"SelectorGenderSunglasses",
    components:{
        'selector-gender': selectorGender
    }
})
</script>