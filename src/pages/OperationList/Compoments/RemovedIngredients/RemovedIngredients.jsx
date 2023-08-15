import React from "react";
import { useSelector } from "react-redux";
import css from "./RemovedIngredients.module.css";

import { selectOperationsForPizza } from "../../../../redux/selectors";

export const RemovedIngredients = () => {
  const OperationsForPizzas = useSelector(selectOperationsForPizza);
  const RemoveOperations = OperationsForPizzas.filter(
    (elem) => elem.typOperacji === "usun"
  );
  return (
    <div className={css.RemovedIngredients_Container}>
      {RemoveOperations.map((elem) => {
        return (
          <div key={elem.id} className={css.RemovedIngredients_elem}>
            <span>
              Usunięto {elem.skladnik} z {elem.nazwapizzy}
            </span>
          </div>
        );
      })}
    </div>
  );
};
