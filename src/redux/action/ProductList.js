import {PRODUCT_LIST} from './../constants';
import axios from 'axios';

export const fetchData =()=> async(dispatch) => {
    let res = await axios.get('https://electronic-ecommerce.herokuapp.com/api/v1/product');
    const newData = res.data.data.product.map((i)=>( 
        
        { 
        ...i, 
        price: parseInt(i.price.split("").slice(1).join("")) * 120 ,
        
    })
    )
    dispatch( {
        type: PRODUCT_LIST,
        payload: newData || []
    });
};