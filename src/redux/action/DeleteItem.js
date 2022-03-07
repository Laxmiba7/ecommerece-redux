import { DELETE_ITEM } from "../constants";

export const deleteItem = (itemID) => {
    return {
        type: DELETE_ITEM,
        payload: {
            id: itemID
        } 
    }
    
}