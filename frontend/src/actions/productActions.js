import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../constants/productConstants"
import Axios from 'axios';
const listProducts = () => async(dispatch) => {
    try{

        dispatch({ type: PRODUCT_LIST_REQUEST });
        const {data} = await Axios.get(`${Axios.defaults.baseURL}/api/products`);
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

    }
    catch(error)
    {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message});
    }
}

const detailsProduct = (productId) => async(dispatch) => {

    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId});
        const {data} = await Axios.get(`${Axios.defaults.baseURL}/api/products/` + productId);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload:data});
    }
     catch (error) 
     {
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.message});
        
    }
}

export {listProducts, detailsProduct}