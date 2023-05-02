import { ADD_CHARACTER_FAVORITE, ADD_NUMBERS_PAGES_PAGINATOR, REMOVE_CHARACTER_FAVORITE } from "./actions";
//TOMAR DE EL LOCAL STORAGE
const NAME_STORAGE_STATE_LIST_FAVORITE = 'H9SD5SDG022';

const initialState = {
    list_favorite: getStorageValue(NAME_STORAGE_STATE_LIST_FAVORITE) ?? [],
    numbers_pages_paginator: 0
} 

const rootReducer = (state = initialState, action) => {
    const actionType = ({
        [`${ADD_CHARACTER_FAVORITE}`]:() => {
            const list_favorite = [...new Set([...state.list_favorite, action.payload])];

            setStorageValue(NAME_STORAGE_STATE_LIST_FAVORITE,list_favorite);
            return {...state,list_favorite};
        },
        [`${REMOVE_CHARACTER_FAVORITE}`]:() => {
            const list_favorite = state.list_favorite.filter(({id}) => {
                return id !== action.payload;
            })

            setStorageValue(NAME_STORAGE_STATE_LIST_FAVORITE,list_favorite);
            return {...state,list_favorite};
        },
        [`${ADD_NUMBERS_PAGES_PAGINATOR}`]: () => {
            return {
                ...state,
                numbers_pages_paginator: action.payload
            }
        }
    })[action.type];
    return actionType ? actionType() : state;
};

function setStorageValue(name,value){
    localStorage.setItem(name,JSON.stringify(value));
}
function getStorageValue(name){
    return JSON.parse(localStorage.getItem(name));
}
export default rootReducer;