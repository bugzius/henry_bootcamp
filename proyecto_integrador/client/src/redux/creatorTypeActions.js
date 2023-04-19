import { ADD_CHARACTER_FAVORITE, REMOVE_CHARACTER_FAVORITE } from "./actions";

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