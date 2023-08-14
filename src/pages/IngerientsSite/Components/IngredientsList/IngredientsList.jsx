import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIngredients } from "../../../../redux/selectors";
import css from "./IngredientsList.module.css";
export const IngredientsList = () => {
  //funkcja do zmiany strony na pizze ze skladnikami

  let navigate = useNavigate();
  const routeChange = (elem) => {
    let path = `IngredientDetails/` + elem;
    navigate(path);
  };

  const ingredients = useSelector(selectIngredients);
  console.log(ingredients);
  return (
    <div className={css.Ingredients_Container}>
      <p>SPRAWDZ KTÓRA PIZZA ZAWIERA TWOJ ULUBIONY SKŁADNIK</p>
      <div className={css.Ingredients_List}>
        {ingredients.map((elem) => {
          return (
            <div className={css.Ingredients_List__elem} key={elem._id}>
              <button onClick={() => routeChange(elem.name)}>
                <img
                  className={css.Ingredients_List__elem_img}
                  src={elem.img}
                  alt={elem.name}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
