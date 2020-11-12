import Vue from 'vue'
import {brand} from '../types/product'

export default Vue.extend({
    methods:{
        resolveBrandImage: function(brandName: brand): string{
            const resolveObject = {
                'dior':'/img/dior.fa251eef.png',
                'rayband':'/img/rayband.b7aebb1f.svg',
                'silhouette':'/img/silhouette.7ae87446.png'
            }
            return resolveObject[brandName]
        }
    }
})