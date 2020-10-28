<template>
    <div class="h-full">
        <router-link to="/glasses/men" class="w-1/2 h-full inline-block relative">
            <img src="https://i.warbycdn.com/v/c/assets/summer-nav-flyout/image/men-optical/0/e4e2c1a158.jpg" alt="Guy">
            <p class="absolute verticalCenter" style="right:96px">Shop Mens</p>
        </router-link>
        <router-link to="/glasses/women" class="w-1/2 h-full inline-block relative">
            <img src="https://i.warbycdn.com/v/c/assets/summer-nav-flyout/image/women-optical/0/860555cab5.jpg" alt="Woman">
            <p class="absolute verticalCenter" style="right:96px">Shop Womens</p>
        </router-link>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        props:['glassesType']
    })
</script>