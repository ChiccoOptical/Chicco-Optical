// VUE
import Vue from 'vue'

// FIREACTIVITIES
import db from '../firebase'
import 'firebase/storage';

// TYPES
import product from '../types/product'


export default Vue.extend({
    methods:{
        async getAllProducts(productType: string, gender: string): Promise<product[]>{
            const allProducts = [] as product[]

            const productDatabase = db.firestore().collection(['products', productType, gender].join('/'));

            const snapshot = await productDatabase.get().catch(()=>{console.log("Error in getting all products");})
            if(!snapshot){
                return allProducts
                //EDIT HERE FOR FRONTEND ERROR MESSAGE
            }

            snapshot.forEach(async product=>{
                const nowProduct = product.data() as product;

                nowProduct.id = product.id
                nowProduct.productType = productType
                nowProduct.imageURL = await this.getImageURL(product.id, productType)

                allProducts.push(nowProduct)
            })
            return allProducts
        },
        async getProductByID(id: string, productType: string, gender: string): Promise<product>{
            const productRef = db.firestore().collection(['products', productType, gender].join('/')).doc(id);
            
            const getData = (await productRef.get().catch(()=>{console.log("Error in getting singular product")}))
            if(!getData){
                return {} as product
                //EDIT HERE FOR FRONT END ERROR MESSAGE
            }
            const returnData = getData.data() as product
            returnData.id= id
            returnData.productType = productType
            returnData.imageURL = await this.getImageURL(id, productType)

            return returnData
        },
        async getImageURL(id: string, productType: string){
            return db.storage().ref(productType + '/' + id + '.png').getDownloadURL()
        }
    }
});