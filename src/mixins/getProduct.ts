// VUE
import {defineComponent} from 'vue'

// FIREACTIVITIES
import db from '../firebase'
import 'firebase/storage';

// TYPES
import product from '../types/product'


export default defineComponent({
    data: () => {
        return{
            tFrameColour:{} as Record<string, string>,
            tLensColour:{} as Record<string, string>
        }
    },
    created(){
        this.getFrameColours().then(data=>{
            this.tFrameColour = data[0]
            this.tLensColour = data[1]
        })
    },
    methods:{
        async getAllProducts(productType: string, gender: string): Promise<product[]>{
            const allProducts = [] as product[]

            const productDatabase = db.firestore().collection(['products', productType, gender].join('/'));

            const snapshot = await productDatabase.get().catch(()=>{console.log("Error in getting all products");})
            
            if(!snapshot){
                return allProducts
                //EDIT HERE FOR FRONTEND ERROR MESSAGE
            }

            return Promise.all(
                snapshot.docs.map(async product => {
                    const nowProduct = product.data() as product;

                    nowProduct.id = product.id
                    nowProduct.productType = productType
                    nowProduct.imageURL = await this.getImageURL(product.id, productType)

                    const [tFrameColour, tLensColour] = await this.getFrameColours()
                    nowProduct.frameColours = nowProduct.frameColours.map(value=>tFrameColour[value])
                    nowProduct.lensColours = nowProduct.lensColours.map(value=>tLensColour[value])

                    return nowProduct
                })
            )
        },

        async getProductByID(id: string, productType: string, gender: string): Promise<product>{
            const productRef = db.firestore().collection(['products', productType, gender].join('/')).doc(id);
            
            // Get the product
            const getData = await productRef.get().catch(()=>{throw "Error in getting singular product"})
            if(!getData){
                return {} as product
                //EDIT HERE FOR FRONT END ERROR MESSAGE
            }
            const returnData = getData.data() as product


            // ADD SOME VALUES
            returnData.id= id
            returnData.productType = productType
            returnData.imageURL = await this.getImageURL(id, productType)

            // Do to colour conversion
            const [tFrameColour, tLensColour] = await this.getFrameColours()
            returnData.frameColours = returnData.frameColours.map(value => tFrameColour[value])
            returnData.lensColours = returnData.lensColours.map(value => tLensColour[value])

            // FINAL RETURN
            return returnData
        },

        async getImageURL(id: string, productType: string){
            return db.storage().ref(productType + '/' + id + '.png').getDownloadURL()
        },

        async getFrameColours(): Promise<Record<string, string>[]>{
            if(Object.keys(this.tFrameColour).length > 0 && Object.keys(this.tLensColour).length > 0){
                return [this.tFrameColour, this.tLensColour]
            }
            const frameColours = (await db.firestore().collection('products').doc('frameColours').get()).data() as Record<string, string>
            const lensColours = (await db.firestore().collection('products').doc('lensColours').get()).data() as Record<string, string>
            return [frameColours, lensColours];
        }
    }
});