import "./App.css";
import StartPage from "../src/pages/StartPage/StartPage";
import IngredientsSite from "./pages/IngerientsSite/IngredientsSite";
import { Routes, Route } from "react-router-dom";
import { PizzaDetails } from "./pages/StartPage/Components/PizzaDetails/PizzaDetails";
import { IngredientsDetails } from "./pages/IngerientsSite/Components/IngredientDetails/IngredientDetails";
import { Navigation } from "./pages/Components/Navigation/Navigation";
import { OperationsList } from "./pages/OperationList/Compoments/OperationList/OperationList";
function App() {
  return (
    <div className="App">
      <div className="app_container">
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<StartPage />}></Route>
          <Route path="pizzaDetails/:Id" element={<PizzaDetails />} />
          <Route path="IngredientsSite" element={<IngredientsSite />}></Route>
          <Route
            path="IngredientsSite/ingredientDetails/:name"
            element={<IngredientsDetails />}
          />
          <Route path="operations" element={<IngredientsDetails />} />
          <Route path="YourOrders" element={<IngredientsDetails />} />
          <Route path="OperationsList" element={<OperationsList />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

/*
Routes>
          <Route path="/" element={<PizzasList />} />
          <Route path="/pizzaDetails/:Id" element={<PizzaDetails />} />
        </Routes> */
