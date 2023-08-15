import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPizzas, fetchIngredients2 } from "../../../../redux/operations";
import { selectPizzaData } from "../../../../redux/selectors";
import { motion } from "framer-motion";

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
              <motion.div
                className={css.PizzasList__elem}
                key={elem._id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <p className={css.PizzasList__header}>{elem.name}</p>

                <img
                  onClick={() => routeChange(elem._id)}
                  className={css.img}
                  src={elem.img}
                  alt=""
                />
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};
