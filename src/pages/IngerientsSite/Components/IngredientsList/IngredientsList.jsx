import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIngredients } from "../../../../redux/selectors";
import css from "./IngredientsList.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchIngredients2 } from "../../../../redux/operations";
export const IngredientsList = () => {
  //funkcja do zmiany strony na pizze ze skladnikami
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const routeChange = (elem) => {
    let path = `IngredientDetails/` + elem;
    navigate(path);
  };

  useEffect(() => {
    dispatch(fetchIngredients2());
  }, [dispatch]);

  const ingredients = useSelector(selectIngredients);
  return (
    <div className={css.Ingredients_Container}>
      <p className={css.IngredientsList__Header}>
        SPRAWDŹ KTÓRA PIZZA ZAWIERA TWÓJ ULUBIONY SKŁADNIK
      </p>
      <div className={css.Ingredients_List}>
        {ingredients.map((elem) => {
          return (
            <div className={css.Ingredients_List__elem} key={elem._id}>
              <img
                onClick={() => routeChange(elem.name)}
                className={css.Ingredients_List__elem_img}
                src={elem.img}
                alt={elem.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
