import { createSlice, nanoid } from "@reduxjs/toolkit";

const yourPizzasInitialState = [];

const pizzaSlice = createSlice({
  name: "operationforYOurPizza",
  initialState: yourPizzasInitialState,
  reducers: {
    addModifyPizza: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(nazwapizzy, typOperacji, skladnik) {
        return {
          payload: {
            id: nanoid(),
            nazwapizzy: nazwapizzy,
            typOperacji: typOperacji,
            skladnik: skladnik,
          },
        };
      },
    },
    deleteIngredientFromPizza: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(nazwapizzy, typOperacji, skladnik) {
        return {
          payload: {
            id: nanoid(),
            nazwapizzy: nazwapizzy,
            typOperacji: typOperacji,
            skladnik: skladnik,
          },
        };
      },
    },
  },
});

export const { addModifyPizza, deleteIngredientFromPizza } = pizzaSlice.actions;
export const operationforYOurPizzaReducer = pizzaSlice.reducer;
