import Product from '@/types/product'
export default interface Order{
    //for me!!
    items: Product[],
    
    //take in from form
    name:string,
    
}