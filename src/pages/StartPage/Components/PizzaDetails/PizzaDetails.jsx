import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addOperationToPizza } from "../../../../redux/operationsForPizzaSlice";
import { addModifyPizza } from "../../../../redux/operationsForYOurPizzaSlice";
import { deleteIngredientFromPizza } from "../../../../redux/operationsForYOurPizzaSlice";
import { orderPizza } from "../../../../redux/actions";
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
      <div>
        <p>{SelectedPizza[0].name} </p>
        <img width={200} src={SelectedPizza[0].img} alt=" data obraz pizzy" />
      </div>
      <div>
        {SelectedPizza[0].ingredients.map((elem) => (
          <div key={elem}>
            <span>{elem}</span>
          </div>
        ))}
        <div>
          <p>Wszyskie składniki</p>
          {listaWszyskichSkladnikow.map((elem) => (
            <div key={elem}>
              <span>{elem}</span>
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
                usun
              </button>
            </div>
          ))}
        </div>

        <button>Zamów taką pizze </button>
        <Link to="/IngredientsSite">Składniki</Link>
      </div>
    </div>
  );
};
