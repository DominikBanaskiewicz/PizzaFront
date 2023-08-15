import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPizzaData } from "../../../../redux/selectors";
import { YourPizzasModification } from "../../../../redux/selectors";
import { selectIngredients } from "../../../../redux/selectors";
import { nanoid } from "@reduxjs/toolkit";
import css from "./IngredientsDetails.module.css";
import { NavLink } from "react-router-dom";

export const IngredientsDetails = () => {
  const { name } = useParams();
  // znajdz pizze z tym skladnikiem
  const pizzas = useSelector(selectPizzaData);
  const pizzaData = pizzas.pizzas.data.data;
  const isTheSameName = (element) => {
    return element.toLowerCase() === name.toLowerCase();
  };
  // pobierz caly element skladnika
  const ingredients = useSelector(selectIngredients);
  const ingredientdetails = ingredients.filter((elem) => elem.name === name);
  const pizzasWithIngredient = pizzaData.filter((elem) => {
    return elem.ingredients.some(isTheSameName);
  });

  // znajdz liste operacji na składniku
  const operations = useSelector(YourPizzasModification);
  const operationsWithIngredient = operations.filter((elem) => {
    return elem.skladnik === name;
  });

  const getPizzaLink = (elem) => {
    return "/PizzaDetails/" + elem._id;
  };

  const changeToProperWord = (elem) => {
    if (elem === "dodaj") return "Dodano do";
    else return "Usunięto z";
  };

  return (
    <div className={css.IngredientsDetails__Container}>
      <div className={css.IngredientDetails__box}>
        <div className={css.IngredientDetails__Ingredient_Name}>
          {ingredientdetails[0].name}
        </div>
        <img
          className={css.IngredientDetails__Ingredient_Image}
          src={ingredientdetails[0].img}
          alt={ingredientdetails[0].name}
        />
        <div className={css.IngredientDetails_Operations_Title}>
          Operacje na składniku
        </div>
        <ul className={css.IngredientDetails__Operations_List}>
          {operationsWithIngredient.map((elem) => {
            return (
              <li
                key={nanoid()}
                className={css.IngredientDetails__Operations_List_Elem}
              >
                <span>
                  {changeToProperWord(elem.typOperacji)} {elem.nazwapizzy}
                </span>{" "}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={css.IngredientDetails__box}>
        <div className={css.IngredientDetails_Pizzas_With_Ingredient_header}>
          Pizze zawierające wybrany składnik
        </div>
        <div className={css.IngredientDetails__Pizzas_List}>
          {pizzasWithIngredient.map((elem) => {
            return (
              <div
                key={nanoid()}
                className={css.IngredientDetails__Pizzas_List_Elem}
              >
                <span className={css.IngredientDetails__Pizzas_List_Elem_Label}>
                  {elem.name}
                </span>
                <NavLink to={getPizzaLink(elem)}>
                  <img
                    className={css.IngredientDetails__Pizzas_List_Elem_Img}
                    src={elem.img}
                    alt={elem.name}
                  />
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
