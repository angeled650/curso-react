import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "../reducers/contadorReducer";
import shoppingReducer from "../reducers/shoppingCartReducer";
import crudReducer from "../reducers/crudReducer";

const store = configureStore( {
  reducer: {
    contador: contadorReducer,
    shopping: shoppingReducer,
    crud: crudReducer
  }
} )

store.subscribe( () => console.log( store.getState() ) )

export default store