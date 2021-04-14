<template>
    <div>
        <div class="relative">
            <img src="https://bl-img-s3-2.imgix.net/common/lenses/Lenses_desktop_3072x1068.jpg?auto=format&fit=clip&ixlib=php-1.2.1&w=2048&s=3f9349bce4f031378698f532fa3760f6" alt="Lens">
            <h1 class="absolute text-6xl font-bold font-lora verticalCenter" style="right:10%">Contact Lenses</h1>
        </div>
        <div class="grid grid-cols-2 mx-56 gap-x-10 gap-y-16 mb-10" id="blog">
            <div>
                <img src="https://bl-img-s3.imgix.net/common/lenses/Lenses_Type_2700x1650.jpg?auto=format&fit=clip&ixlib=php-1.2.1&w=900&s=90983a4468cb9db979e0d72499fb528f" alt="">
                <h1>Find Right Perscription</h1>
            </div>

            <div>
                <img src="https://bl-img-s3-2.imgix.net/common/lenses/Lenses_Treatments_Soho_2700x1650.jpg?auto=format&fit=clip&ixlib=php-1.2.1&w=900&s=0b2ee34c515c2833bcb8049114f04315" alt="">
                <h1>Treat your lenses</h1>
            </div>

            <div>
                <img src="https://bl-img-s3.imgix.net/common/lenses/Lenses_Progressive_Joy_2700x1650.jpg?auto=format&fit=clip&ixlib=php-1.2.1&w=900&s=cb8c34623212fb7cea170346644bf7a2" alt="">
                <h1>Single vision vs Presbyopic Lenses</h1>
            </div>
            
            <div>
                <img src="https://bl-img-s3-2.imgix.net/common/lenses/Lenses_anti_fatigue_loft_2700x1650.jpg?auto=format&fit=clip&ixlib=php-1.2.1&w=900&s=5fdcf41ea12aadcaae83bbda935a0da3" alt="">
                <h1>Anti-fatigue Lens</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #blog div h1{
        font-family: Lora;
        text-align: center;
        font-size: 1.8rem;
        font-weight: 700;
        margin-top: 0.5rem;
    }
</style>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    
})
</script>
