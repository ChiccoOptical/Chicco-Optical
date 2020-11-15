import Vue from 'vue'
import {brand} from '../types/product'

export default Vue.extend({
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