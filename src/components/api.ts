import { ProductData } from "../../types/types.ts"
export const storeToLocalStorage = async (productData: ProductData) => {
    try {
        const existingDataString = localStorage.getItem('productData');
        let existingData: ProductData[] = [];
        if (existingDataString) {
            // Parse existing data from localStorage string to array of ProductData
            existingData = JSON.parse(existingDataString);
        }
        // Add new productData to existingData array
        existingData.push(productData);

        // Store updated array back into localStorage
        localStorage.setItem('productData', JSON.stringify(existingData));
    } catch (error) {
        console.log("Error in storing Product to LocalStorage", error);
    }
}

export const fetchProductsFromLocalStorage = async () => {
    try {
        const existingDataString = localStorage.getItem('productData');
        let existingData: ProductData[] = [];
        if (existingDataString) {
            // Parse existing data from localStorage string to array of ProductData
            existingData = JSON.parse(existingDataString);
            return existingData;
        } else {
            return []; // Return an empty array if no data is found
        }
    } catch (error) {
        console.log("Error Fetching from LocalStorage");
        throw error;
    }
}

export const deleteProductFromLocalStorage = (productId: string) => {
    try {
        const existingDataString = localStorage.getItem('productData');
        if (existingDataString) {
            const existingData: ProductData[] = JSON.parse(existingDataString);

            // Filter out the product with the specified productId
            const updatedData = existingData.filter((product) => product.productId !== productId);

            // Update localStorage with the filtered data
            localStorage.setItem('productData', JSON.stringify(updatedData));
        } else {
            throw new Error("No products found in localStorage");
        }

    } catch (error) {
        console.log("Error in Delteing Product", error)
        throw error;
    }
}