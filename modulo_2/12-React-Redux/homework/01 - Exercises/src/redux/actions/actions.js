import axios from 'axios';

import * as types from './types.js';

const BASE_URL = 'http://localhost:3001';

export function addProduct(product){
    return {
        type:types.ADD_PRODUCT,
        payload: product
    }
}

export function deleteProduct(id){
    return {
        type:types.DELETE_PRODUCT,
        payload: id
    }
}

export function getStoreName(){
    return async function(dispatch){
        axios.get(`${BASE_URL}/store`)
            .then(data => dispatch({
                type: types.GET_STORE_NAME,
                payload: data.data.name
            }))
    }
};
