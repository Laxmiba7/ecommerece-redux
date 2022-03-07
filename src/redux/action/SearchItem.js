import { FILTER_ITEM } from "../constants";

export const searchItem = (minPrice,maxPrice,category) => {
    return {
        type: FILTER_ITEM,
        payload: {
            minPrice: minPrice,
            maxPrice: maxPrice,
            category: category
        }
    }
}