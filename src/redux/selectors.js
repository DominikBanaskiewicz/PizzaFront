export const selectPizzaData = (state) => state.pizzas;

export const YourPizzasModification = (state) => state.operationforYOurPizza;

export const selectIngredients = (state) => {
  return state.ingredients.ingredients;
};

export const selectIngredientsNameArray = (state) => {
  return state.ingredients.ingredients.map((elem) => {
    return elem.name;
  });
};
