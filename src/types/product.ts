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
    
    // FOR BACKEND ISH
    id: string;
    productType: string;

    // GENERATE THINGS
    imageURL: string;
}

type brand = "dior" | "silhouette" | "rayband"

export {brand};
export default Product;