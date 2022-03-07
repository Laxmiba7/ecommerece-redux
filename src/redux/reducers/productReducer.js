import { PRODUCT_LIST, ADD_TO_CART, DELETE_ITEM, FILTER_ITEM } from "../constants";

const initialState = {
  products: [],
  isLoading: true,
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TO_CART:
      const inCart = state.cart.find((x) => x.id === action.payload.id);
      const cartProduct = state.products.filter(
        (product) => product.id === action.payload.id
      )[0];
    return {
        ...state,
        cart: inCart
          ? state.cart.map((cartItem) =>
              cartItem.id === action.payload.id
                ? { ...cartItem, qty: cartItem.qty + action.payload.value }
                : cartItem
            )
          : [...state.cart, { ...cartProduct, qty: action.payload.value }],
      };

    case DELETE_ITEM:
      let filteredItem = state.cart.filter((i) => i.id !== action.payload.id);
      
      return {
        ...state,
        cart: filteredItem,
      };
    case FILTER_ITEM: 
       
       let searchedItem = state.products.filter((x)=> 
         x.price >= action.payload.minPrice && x.price <= action.payload.maxPrice
         &&  x.category[1] === action.payload.category
       )
    return{
      ...state,
      products: searchedItem

    }

    default:
      return state;
  }
};
export default productReducer;
