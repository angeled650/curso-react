import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  db: []
}

const crudSlice = createSlice( {
  name: "crud",
  initialState,
  reducers: {
    read_all_data: ( state, action ) => Array.isArray( action.payload ) ? { ...state, db: action.payload.map( ( data ) => data ) } : { ...state, db: [] },
    create_data: ( state, action ) => { return { ...state, db: [ ...state.db, action.payload ] } },
    update_data: ( state, action ) => {
      let newData = state.db.map( ( el ) => ( el.id === action.payload.id ? action.payload : el ) );

      return { ...state, db: newData }
    },
    delete_data: ( state, action ) => {
      let newData = state.db.filter( ( el ) => el.id != action.payload );

      return { ...state, db: newData }
    },
    no_data: () => initialState
  }
} )

export const { read_all_data, create_data, update_data, delete_data, no_data } = crudSlice.actions;
export default crudSlice.reducer