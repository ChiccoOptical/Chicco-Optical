<template>
    <selector-gender glassesType="none"></selector-gender>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import selectorGender from '@/components/selectorGender.vue'
export default defineComponent({
    name:"SelectorGenderNone",
    components:{
        'selector-gender': selectorGender
    }
})
</script>