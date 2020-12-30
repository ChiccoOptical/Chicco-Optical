<template>
    <selector-gender glassesType="frames"></selector-gender>
</template>

<script lang="ts">
import Vue from 'vue'
import selectorGender from '@/components/selectorGender.vue'
export default Vue.extend({
    name:"SelectorGenderFrames",
    components:{
        'selector-gender': selectorGender
    }
})
</script>