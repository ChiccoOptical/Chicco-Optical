interface Product{
    // FIREBASE THINGS
    title: string;
    brand: brand;
    model: string;
    size: string;
    frameColours: frameColour[];
    lensColours?: lensColour[];
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
type frameColour = "J5G Gold" | "DDB Gold Copp" | "Rose Gold"
type lensColour = "A9 Blue MS Gold Lens" | "2K Gray AR Lens" | "07 Green LTGREENAF Lens" | "9R Pink Gradient Lens" | "SO Violet SF AR Lens"

export {frameColour};
export {lensColour}
export {brand};
export default Product;