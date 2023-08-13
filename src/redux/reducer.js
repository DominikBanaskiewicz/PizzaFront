// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "operationForPizza/addOperation":
//       let isIngredientInPizza = true;
//       // eslint-disable-next-line array-callback-return
//       state.operationsForPizza.map((elem) => {
//         if (elem.skladnik === action.payload.skladnik) {
//           isIngredientInPizza = false;
//         }
//       });
//       if (isIngredientInPizza) {
//         return {
//           ...state,
//           operationsForPizza: [...state.operationsForPizza, action.payload],
//         };
//       } else {
//         //tutaj dodaj popup z informacją że jest już w pizzy
//         return { ...state, operationsForPizza: [...state.operationsForPizza] };
//       }
//     case "operationforYOurPizza/addYourPizza":
//       if (
//         !state.yourPizzas.some(
//           (pizza) => pizza.nazwapizzy === action.payload.nazwapizzy
//         )
//       ) {
//         let tmp;
//         // eslint-disable-next-line array-callback-return
//         state.pizzas.map((elem) => {
//           if (elem.name === action.payload.nazwapizzy) {
//             tmp = {
//               id: action.payload.id,
//               nazwapizzy: action.payload.nazwapizzy,
//               ingredients: [...elem.ingredients, action.payload.skladnik],
//               isModified: true,
//               addedIngredients: [action.payload.skladnik],
//               deletedIngredients: [""],
//             };
//           }
//         });
//         return { ...state, yourPizzas: [...state.yourPizzas, tmp] };
//       } else {
//         return {
//           ...state,
//           yourPizzas: [
//             ...state.yourPizzas.map((elem) => {
//               if (elem.nazwapizzy === action.payload.nazwapizzy) {
//                 return {
//                   id: elem.id,
//                   nazwapizzy: elem.nazwapizzy,
//                   ingredients: [...elem.ingredients, action.payload.skladnik],
//                   isModified: true,
//                   addedIngredients: [
//                     ...elem.addedIngredients,
//                     action.payload.skladnik,
//                   ],
//                   deletedIngredients: [],
//                 };
//               } else {
//                 return { ...elem };
//               }
//             }),
//           ],
//         };
//       }

//     case "operationforYOurPizza/removeIngredient":
//       return {
//         ...state,
//         yourPizzas: [
//           ...state.yourPizzas.map((elem) => {
//             if (elem.nazwapizzy === action.payload.nazwapizzy) {
//               return {
//                 id: elem.id,
//                 nazwapizzy: elem.nazwapizzy,
//                 ingredients: elem.ingredients.filter(
//                   (elem) => elem !== action.payload.skladnik
//                 ),
//                 isModified: true,
//                 addedIngredients: elem.addedIngredients,
//                 deletedIngredients: [
//                   ...elem.deletedIngredients,
//                   action.payload.skladnik,
//                 ],
//               };
//             } else {
//               return { ...elem };
//             }
//           }),
//         ],
//       };
//     case "operationforYOurPizza/OrderPizza":
//       console.log(action.payload);
//       return {
//         ...state,
//         orderedPizzas: [
//           ...state.orderedPizzas,
//           ...state.yourPizzas.filter(
//             (elem) => elem.nazwapizzy !== action.payload.nazwapizzy
//           ),
//         ],
//       };
//     default:
//       return state;
//   }
// };
