import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPizzaData } from "../../../../redux/selectors";
import { YourPizzasModification } from "../../../../redux/selectors";
import { selectIngredients } from "../../../../redux/selectors";
import { nanoid } from "@reduxjs/toolkit";

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

  return (
    <>
      <div>Pizze które zawierają wybrany składnik</div>
      <div>{ingredientdetails[0].name}</div>
      <img width={300} src={ingredientdetails[0].img} alt="" />
      {pizzasWithIngredient.map((elem) => {
        return (
          <div key={nanoid()}>
            <span>{elem.name}</span>
            <img width={200} src={elem.img} alt=" data obraz pizzy" />
          </div>
        );
      })}
      <div>Operacje na składniku</div>
      <ul>
        {operationsWithIngredient.map((elem) => {
          return (
            <li key={nanoid()}>
              <p>Nazwa pizzy która jest modyfikowana {elem.nazwapizzy} </p>
              <p>Typ operacji {elem.typOperacji}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
