import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addOperationToPizza } from "../../../../redux/operationsForPizzaSlice";
import { addModifyPizza } from "../../../../redux/operationsForYOurPizzaSlice";
import { deleteIngredientFromPizza } from "../../../../redux/operationsForYOurPizzaSlice";
import { orderPizza } from "../../../../redux/actions";
import css from "./PizzaDetails.module.css";
import {
  selectPizzaData,
  selectIngredientsNameArray,
} from "../../../../redux/selectors";
import { Link } from "react-router-dom";

export const PizzaDetails = (pizza) => {
  const { pizzas } = useSelector(selectPizzaData);
  const pizzaData = pizzas.data.data;

  const { Id } = useParams();
  const listaWszyskichSkladnikow = useSelector(selectIngredientsNameArray);

  const getPizzaData = (Id) => {
    return pizzaData.filter((elem) => elem._id === Id);
  };

  const SelectedPizza = getPizzaData(Id);
  const dispatch = useDispatch();

  function dodajSkladnik(nazwapizzy, typOperacji, skladnik) {
    dispatch(addModifyPizza(nazwapizzy, typOperacji, skladnik));
    dispatch(addOperationToPizza(nazwapizzy, typOperacji, skladnik));
  }
  function usunSkladnik(nazwapizzy, typOperacji, skladnik) {
    dispatch(addOperationToPizza(nazwapizzy, typOperacji, skladnik));
    dispatch(deleteIngredientFromPizza(nazwapizzy, typOperacji, skladnik));
  }

  function orderPizza2(nazwapizzy) {
    dispatch(orderPizza(nazwapizzy));
  }

  return (
    <div key={pizza._id}>
      <div className={css.pizzaDetails__Container}>
        <div className={css.PizzaDetails__Content_Box}>
          <div className={css.PizzaDetails__Pizza__Box}>
            <p className={css.PizzaDetails__Pizza_Name}>
              {SelectedPizza[0].name}
            </p>
            <img
              className={css.PizzaDetails__Pizza_img}
              src={SelectedPizza[0].img}
              alt="pizza"
            />
            <p className={css.PizzaDetails__IngredientsName}> Składniki</p>
            <div className={css.PizzaDetails__Pizza_ingredients_Box}>
              {SelectedPizza[0].ingredients.map((elem) => (
                <span key={elem} className={css.__ingredients_name}>
                  {elem}
                </span>
              ))}
            </div>
          </div>
          <div className={css.PizzaDetails__IngredientsList_Box}>
            <p className={css.PizzaDetails__IngredientsList_Name}>
              Wszyskie składniki
            </p>
            {listaWszyskichSkladnikow.map((elem) => (
              <div
                key={elem}
                className={css.PizzaDetails__IngredientsList_Elem}
              >
                <span className={css.PizzaDetails__IngredientsList_Elem_Name}>
                  {elem}
                </span>
                <button
                  onClick={() => {
                    dodajSkladnik(SelectedPizza[0].name, "dodaj", elem);
                  }}
                >
                  dodaj
                </button>
                <button
                  onClick={() => {
                    usunSkladnik(SelectedPizza[0].name, "usun", elem);
                  }}
                >
                  usuń
                </button>
              </div>
            ))}
            <button className={css.PizzaDetails__Order_Btn}>
              Zamów taką pizzę
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
