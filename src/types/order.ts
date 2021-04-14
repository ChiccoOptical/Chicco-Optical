import {ProductOrder} from '@/types/product'
export default interface Order{
    //for me!!
    items: ProductOrder[],
    
    //take in from form
    name:string,
}