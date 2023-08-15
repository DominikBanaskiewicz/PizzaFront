import React from "react";
import { Link } from "react-router-dom";
import css from "./Mavigation.module.css";

export const Navigation = () => {
  return (
    <nav className={css.nav_container}>
      <Link className={css.nav_link} to="/">
        Pizze
      </Link>
      <Link className={css.nav_link} to="/IngredientsSite">
        Składniki
      </Link>
      <Link className={css.nav_link} to="/OperationsList">
        Operacje
      </Link>
    </nav>
  );
};
