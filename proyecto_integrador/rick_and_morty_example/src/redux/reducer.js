import { ADD_CHARACTER_FAVORITE, REMOVE_CHARACTER_FAVORITE } from "./actions";
//TOMAR DE EL LOCAL STORAGE
const NAME_STORAGE_STATE_LIST_FAVORITE = 'H9SD5SDG022';

const initialState = {
    list_favorite: getStorageValue(NAME_STORAGE_STATE_LIST_FAVORITE) ?? []
} 

const rootReducer = (state = initialState, action) => {
    const actionType = ({
        [`${ADD_CHARACTER_FAVORITE}`]:() => {
            const val = {
                ...state,
                list_favorite: [...new Set([...state.list_favorite, action.payload])]
            }
            setStorageValue(NAME_STORAGE_STATE_LIST_FAVORITE,val.list_favorite);
            return val;
        },
        [`${REMOVE_CHARACTER_FAVORITE}`]:() => {
            const val = {
                ...state,
                list_favorite: state.list_favorite.filter(id => id !== action.payload)
            }
            setStorageValue(NAME_STORAGE_STATE_LIST_FAVORITE,val.list_favorite);
            return val;
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