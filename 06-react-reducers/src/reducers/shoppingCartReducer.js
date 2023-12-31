import { TYPES } from "../actions/shoppingCartActions";


export const shoppingCartInitialState = {
  products: [
    { id: 1, name: "Placa Base", price: 100 },
    { id: 2, name: "Procesador", price: 200 },
    { id: 3, name: "Memoria RAM", price: 300 },
    { id: 4, name: "SSD", price: 400 },
    { id: 5, name: "Fuente de Poder", price: 500 },
    { id: 6, name: "Case", price: 600 } ],
  cart: []
}

export function shoppingCartReducer( state, action ) {
  switch ( action.type ) {
    case TYPES.ADD_ONE_TO_CART: {
      let newItem = state.products.find( product => product.id === action.payload )

      let itemInCart = state.cart.find( item => item.id === newItem.id )

      return itemInCart
        ? {
          ...state, cart: state.cart.map( item => item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item )
        }
        : { ...state, cart: [ ...state.cart, { ...newItem, quantity: 1 } ] }
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find( item => item.id === action.payload )

      return itemToDelete.quantity > 1
        ? {
          ...state, cart: state.cart.map( item => item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item ),
        }
        : { ...state, cart: state.cart.filter( item => item.id !== action.payload ) }
    }

    case TYPES.REMOVE_ALL_FROM_CART: return { ...state, cart: state.cart.filter( item => item.id !== action.payload ) }

    case TYPES.CLEAR_CART: return shoppingCartInitialState

    default:
      return state;
  }
}
