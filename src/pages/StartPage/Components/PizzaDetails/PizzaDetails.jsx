import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
//import { addOperationToPizza } from "../../../../redux/operationsForPizzaSlice";
import { addModifyPizza } from "../../../../redux/operationsForYOurPizzaSlice";
import { deleteIngredientFromPizza } from "../../../../redux/operationsForYOurPizzaSlice";
//import { orderPizza } from "../../../../redux/actions";
import css from "./PizzaDetails.module.css";
import Notiflix from "notiflix";
import { useEffect } from "react";
import {
  selectPizzaData,
  selectIngredientsNameArray,
} from "../../../../redux/selectors";

export const PizzaDetails = (pizza) => {
  useEffect(() => {}, []);

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
    //  dispatch(addOperationToPizza(nazwapizzy, typOperacji, skladnik));
  }
  function usunSkladnik(pizza, typOperacji, skladnik) {
    if (isIngredientInPizza(skladnik, pizza)) {
      // dispatch(addOperationToPizza(pizza.name, typOperacji, skladnik));
      dispatch(deleteIngredientFromPizza(pizza.name, typOperacji, skladnik));
    } else {
      Notiflix.Notify.failure("Ta pizza nie posiada tego składnika", {
        timeout: 4000,
      });
    }
  }

  const isIngredientInPizza = (ingredient, pizza) => {
    return pizza.ingredients.some((elem) => elem === ingredient);
  };

  function orderPizza2(elem) {
    console.log(elem);
    Notiflix.Notify.success("Dziękujemy za dodanie pizzy do koszyka");
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
                  className={css.PizzaDetails__Ingredients_Btn}
                  onClick={() => {
                    dodajSkladnik(SelectedPizza[0].name, "dodaj", elem);
                  }}
                >
                  dodaj
                </button>
                <button
                  className={css.PizzaDetails__Ingredients_Btn}
                  onClick={() => {
                    isIngredientInPizza(elem, SelectedPizza[0]);
                    usunSkladnik(SelectedPizza[0], "usun", elem);
                  }}
                >
                  usuń
                </button>
              </div>
            ))}
            <button
              onClick={() => orderPizza2(SelectedPizza[0])}
              className={css.PizzaDetails__Order_Btn}
            >
              Zamów taką pizzę
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
