import { createSlice } from "@reduxjs/toolkit";

const ingredientsSlice = createSlice({
  name: "operationForIngredient",
  initialState: {
    ingredients: [
      "Mozzarella",
      "Gorgonzola",
      "Parmezan",
      "Cheddar",
      "pepperoni",
      "szynka",
      "salami",
      "kurczak",
    ],
    isLoading: true,
    error: null,
  },
  reducers: {
    fetchingIngredientsInProgress(state) {
      console.log(state);
      state.isLoading = true;
    },
    fetchingIngredientsSuccess(state, action) {
      state.isLoading = false;
      console.log(action.payload.data.data);
      state.ingredients = action.payload.data.data;
      console.log(state.ingredients);
    },
    fetchingIngredientsError(state, action) {
      state.error = action.payload;
      console.log(state);
    },
  },
});

export const {
  fetchingIngredientsInProgress,
  fetchingIngredientsSuccess,
  fetchingIngredientsError,
} = ingredientsSlice.actions;
export const ingredientsReducer = ingredientsSlice.reducer;
