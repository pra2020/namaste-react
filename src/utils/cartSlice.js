import { createSlice } from "@reduxjs/toolkit";

// slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  // reducer functions of a slice
  reducers: {
    addItem: (state, action) => {
      // mutating the state here as per redux toolkit
      // In redux we have to aviod mutation, behind the scenes redux toolkit does the same by using Immer library
      // Mutation is necessary because original main state object needs to be updated, if state = [], this will only clear the local var but not the original main state object
      // return can be used to mutate the state as per RTK i.e it overrides the original main state object
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

// export a single reducer from above multiple reducers
export default cartSlice.reducer;
