import {defineComponent} from 'vue'
import {brand} from '../types/product'

export default defineComponent({
    methods:{
        resolveBrandImage: function(brandName: brand): string{
            const resolveObject = {
                'dior':'dior.png',
                'rayband':'rayband.svg',
                'silhouette':'silhouette.png'
            }
            return resolveObject[brandName]
        }
    }
})