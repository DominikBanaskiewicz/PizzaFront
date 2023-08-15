import { configureStore } from "@reduxjs/toolkit";

import { ingredientsReducer } from "./ingredientsSlice";
import { operationforYOurPizzaReducer } from "./operationsForYOurPizzaSlice";
import { pizzasReducer } from "./pizzaSlice";

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,

    operationforYOurPizza: operationforYOurPizzaReducer,
    ingredients: ingredientsReducer,
  },
});
