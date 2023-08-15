// import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "@reduxjs/toolkit";

// const operationForPizzaInitialState = {
//   operationsForPizza: [],
// };
// const pizzaSlice = createSlice({
//   name: "operationForPizzaReducer",
//   initialState: operationForPizzaInitialState,
//   reducers: {
//     addOperationToPizza: {
//       reducer(state, action) {
//         let isIngredientInPizza = true;
//         // eslint-disable-next-line array-callback-return
//         state.operationsForPizza.map((elem) => {
//           if (elem.skladnik === action.payload.skladnik) {
//             isIngredientInPizza = false;
//           }
//         });
//         if (isIngredientInPizza) {
//           return {
//             ...state,
//             operationsForPizza: [...state.operationsForPizza, action.payload],
//           };
//         } else {
//           //tutaj dodaj popup z informacją że jest już w pizzy
//           return {
//             ...state,
//             operationsForPizza: [...state.operationsForPizza],
//           };
//         }
//       },
//       prepare(nazwapizzy, typOperacji, skladnik) {
//         return {
//           payload: {
//             id: nanoid(),
//             nazwapizzy: nazwapizzy,
//             typOperacji: typOperacji,
//             skladnik: skladnik,
//           },
//         };
//       },
//     },
//   },
// });

// export const { addOperationToPizza } = pizzaSlice.actions;
// export const operationForPizzaReducer = pizzaSlice.reducer;
