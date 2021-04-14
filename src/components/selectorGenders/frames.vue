<template>
    <selector-gender glassesType="frames"></selector-gender>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import selectorGender from '@/components/selectorGender.vue'
export default defineComponent({
    name:"SelectorGenderFrames",
    components:{
        'selector-gender': selectorGender
    }
})
</script>