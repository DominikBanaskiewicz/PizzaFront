import { configureStore } from "@reduxjs/toolkit";
import { operationForPizzaReducer } from "./operationsForPizzaSlice";
import { ingredientsReducer } from "./ingredientsSlice";
import { operationforYOurPizzaReducer } from "./operationsForYOurPizzaSlice";
import { pizzasReducer } from "./pizzaSlice";

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    operationsForPizza: operationForPizzaReducer,
    operationforYOurPizza: operationforYOurPizzaReducer,
    ingredients: ingredientsReducer,
  },
});
