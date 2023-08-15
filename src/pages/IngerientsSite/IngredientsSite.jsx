import { Helmet, HelmetProvider } from "react-helmet-async";
import { IngredientsList } from "./Components/IngredientsList/IngredientsList";

export default function IngredientsSite() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Check your favourites</title>
        </Helmet>

        {<IngredientsList />}
      </div>
    </HelmetProvider>
  );
}
