import { ADD_CHARACTER_FAVORITE, ADD_NUMBERS_PAGES_PAGINATOR, REMOVE_CHARACTER_FAVORITE } from "./actions";

export function addCharacterFavorite (payload){
    return {
        type:ADD_CHARACTER_FAVORITE,
        payload
    }
}

export function removeCharacterFavorite (id){
    return {
        type:REMOVE_CHARACTER_FAVORITE,
        payload: id
    }
}

export function addNumbersPagesPaginator(payload){
    return {
        type: ADD_NUMBERS_PAGES_PAGINATOR,
        payload
    };
};