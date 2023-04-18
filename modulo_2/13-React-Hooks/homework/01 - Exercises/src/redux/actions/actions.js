import { FORM_DATA } from "../actionTypes/actionTypes";

export function enviarForm(formulario){
    return {
        type:FORM_DATA,
        payload: formulario
    }
}