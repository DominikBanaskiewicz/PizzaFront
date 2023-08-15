import React from "react";
import { AddedIngredients } from "../AddedIngredients/AddedIngredients";
import { RemovedIngredients } from "../RemovedIngredients/RemovedIngredients";
import css from "./OperationList.module.css";

export const OperationsList = () => {
  return (
    <div className={css.OperationList__container}>
      <div className={css.OperationList__elem}>
        <p className={css.OperationsList_Name}>Dodano składniki</p>
        <AddedIngredients />
      </div>
      <div className={css.OperationList__elem}>
        <p className={css.OperationsList_Name}>Usunięto składniki</p>
        <RemovedIngredients />
      </div>
    </div>
  );
};
