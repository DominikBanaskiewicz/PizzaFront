import { configureStore } from "@reduxjs/toolkit";
import { orderedPizzasReducer } from "./reducer";
import { operationForPizzaReducer } from "./operationsForPizzaSlice";
import { ingredientsReducer } from "./ingredientsSlice";
import { operationforYOurPizzaReducer } from "./operationsForYOurPizzaSlice";

import { pizzasReducer } from "./pizzaSlice";

// Początkowa wartość statusu Redux dla Reducera root,
// jeżeli nie przekaże się parametru preloadedState.

// Tymczasem wykorzystujemy reducer, który
// zwraca tylko otrzymany status
export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    operationsForPizza: operationForPizzaReducer,
    operationforYOurPizza: operationforYOurPizzaReducer,
    ingredients: ingredientsReducer,
  },
});
