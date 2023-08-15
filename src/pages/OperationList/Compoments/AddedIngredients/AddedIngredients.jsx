import React from "react";
import { useSelector } from "react-redux";
import css from "./AddedIngredients.module.css";
import { selectOperationsForPizza } from "../../../../redux/selectors";

export const AddedIngredients = () => {
  const OperationsForPizzas = useSelector(selectOperationsForPizza);
  const AddOperations = OperationsForPizzas.filter(
    (elem) => elem.typOperacji === "dodaj"
  );
  return (
    <div className={css.AddedIngredients_Container}>
      {AddOperations.map((elem) => {
        return (
          <div key={elem.id} className={css.AddedIngredients_elem}>
            <span>
              Dodano {elem.skladnik} do {elem.nazwapizzy}
            </span>
          </div>
        );
      })}
    </div>
  );
};
