import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPizzas, fetchIngredients2 } from "../../../../redux/operations";
import { selectPizzaData } from "../../../../redux/selectors";
import css from "./PizzasList.module.css";
export const PizzasList = () => {
  const dispatch = useDispatch();

  const { pizzas, isLoading } = useSelector(selectPizzaData);

  useEffect(() => {
    dispatch(fetchPizzas());
    dispatch(fetchIngredients2());
  }, [dispatch]);

  let navigate = useNavigate();
  const routeChange = (elemId) => {
    let path = `/pizzaDetails/` + elemId;
    navigate(path);
  };

  return (
    <div>
      {isLoading && <p>Loading data...</p>}
      {!isLoading && (
        <div className={css.pizzasList__container}>
          {pizzas.data.data.map((elem) => {
            return (
              <div className={css.PizzasList__elem} key={elem._id}>
                <p>{elem.name}</p>

                <button onClick={() => routeChange(elem._id)}>
                  <img className={css.img} src={elem.img} alt="" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
