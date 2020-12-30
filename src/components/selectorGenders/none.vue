<template>
    <selector-gender glassesType="none"></selector-gender>
</template>

<script lang="ts">
import Vue from 'vue'
import selectorGender from '@/components/selectorGender.vue'
export default Vue.extend({
    name:"SelectorGenderNone",
    components:{
        'selector-gender': selectorGender
    }
})
</script>