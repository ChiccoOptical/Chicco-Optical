interface Product{
    // FIREBASE THINGS
    title: string;
    brand: brand;
    model: string;
    size: string;
    frameColours: string[];
    lensColours: string[];
    nosepad: string;
    fitRangeLow: number;
    fitRangeHigh: number;
    price: number;
    
    // FOR BACKEND ISH
    id: string;
    gender:string;
    productType: string;

    // GENERATE THINGS
    imageURL: string;
}

interface ProductOrder{
    id: string;
    gender: string;
    productType: string;
}

type brand = "dior" | "silhouette" | "rayband"

export {brand, ProductOrder};
export default Product;