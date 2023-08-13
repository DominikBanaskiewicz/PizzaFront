import React from "react";
import { Link } from "react-router-dom";
import css from "./Mavigation.module.css";

export const Navigation = () => {
  return (
    <nav className={css.nav_container}>
      <Link className={css.nav_link} to="/">
        Home
      </Link>
      <Link className={css.nav_link} to="/IngredientsSite">
        Ingredients
      </Link>
      <Link className={css.nav_link} to="/products">
        Products
      </Link>
    </nav>
  );
};
