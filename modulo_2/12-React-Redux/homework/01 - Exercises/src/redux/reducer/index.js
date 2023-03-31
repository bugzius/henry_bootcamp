import { GET_STORE_NAME, DELETE_PRODUCT, ADD_PRODUCT } from "../actions/types";

const initialState = {
   list: [],
   storeName: ""
};

const rootReducer = (state = initialState, action) => {
   const typeAction = ({
      [`${ADD_PRODUCT}`]: () => ({
         ...state,
         list: [...state.list, action.payload]
      }),
      [`${DELETE_PRODUCT}`]: () => ({
         ...state,
         list: state.list.filter( ({id}) => id !== action.payload)
      }),
      [`${GET_STORE_NAME}`]: () => ({
         ...state,
         storeName: action.payload
      }),
   })[action.type]

   return typeAction ? typeAction() : state;
};

export default rootReducer;
