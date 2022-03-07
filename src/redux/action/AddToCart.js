import { ADD_TO_CART } from "../constants";

export const addToCart = (itemId,value) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id: itemId,
            value
        }
    }
   
}