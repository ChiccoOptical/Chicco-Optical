import Vue from 'vue';
import { lensColour, frameColour} from '@/types/product'

export default Vue.extend({
    methods:{
        translateFrameColour: function(color: frameColour): string{
            const colorConvert = {
                'J5G Gold':'#b39a85',
                'DDB Gold Copp':'#b39a85',
                'Rose Gold':'#b59a74'
            }
            return colorConvert[color]
        },
        translateLensColour: function(color: lensColour): string{
            const colorConvert = {
                "A9 Blue MS Gold Lens":'#384f67',
                "2K Gray AR Lens":'#565d63',
                "07 Green LTGREENAF Lens":'#58705b',
                "9R Pink Gradient Lens":'#b1797a',
                "SO Violet SF AR Lens":'#8988a9'
            }
            return colorConvert[color]
        }
    }
})