/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = 0

export const contadorSlice = createSlice( {
  name: "contador",
  initialState,
  reducers: {
    increment: ( state ) => state += 1,
    decrement: ( state ) => state -= 1,
    increment_5: ( state, action ) => state += action.payload,
    decrement_5: ( state, action ) => state -= action.payload,
    reset: () => initialState
  }
} )

export const { increment, decrement, increment_5, decrement_5, reset } = contadorSlice.actions

export default contadorSlice.reducer 