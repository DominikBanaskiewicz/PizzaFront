import { createSlice } from "@reduxjs/toolkit";

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    pizzas: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    fetchingInProgress(state) {
      console.log(state);
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;

      state.pizzas = action.payload;
    },
    fetchingError(state, action) {
      state.error = action.payload;
      console.log(state);
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  pizzaSlice.actions;
export const pizzasReducer = pizzaSlice.reducer;
