import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "Placa Base", price: 100 },
    { id: 2, name: "Procesador", price: 200 },
    { id: 3, name: "Memoria RAM", price: 300 },
    { id: 4, name: "SSD", price: 400 },
    { id: 5, name: "Fuente de Poder", price: 500 },
    { id: 6, name: "Case", price: 600 } ],
  cart: []
}

const shoppingSlice = createSlice( {
  name: "shopping",
  initialState,
  reducers: {
    add_one_to_cart: ( state, action ) => {
      let newItem = state.products.find( product => product.id === action.payload )

      let itemInCart = state.cart.find( item => item.id === newItem.id )

      return itemInCart
        ? {
          ...state, cart: state.cart.map( item => item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item )
        }
        : { ...state, cart: [ ...state.cart, { ...newItem, quantity: 1 } ] }
    },
    remove_one_from_cart: ( state, action ) => {
      let itemToDelete = state.cart.find( item => item.id === action.payload )

      return itemToDelete.quantity > 1
        ? {
          ...state, cart: state.cart.map( item => item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item ),
        }
        : { ...state, cart: state.cart.filter( item => item.id !== action.payload ) }
    },
    remove_all_from_cart: ( state, action ) => {
      return {
        ...state, cart: state.cart.filter( item => item.id !== action.payload )
      }
    },
    clear_cart: () => initialState
  },
} )

export const { add_one_to_cart, remove_one_from_cart, remove_all_from_cart, clear_cart } = shoppingSlice.actions
export default shoppingSlice.reducer