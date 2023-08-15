import axios from "axios";
import {
  fetchingError,
  fetchingSuccess,
  fetchingInProgress,
} from "./pizzaSlice";
import {
  fetchingIngredientsInProgress,
  fetchingIngredientsSuccess,
} from "./ingredientsSlice";

axios.defaults.baseURL = "http://192.168.0.178:3001/";

export const fetchPizzas = () => async (dispatch) => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get("/pizzas");
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};

export const fetchIngredients2 = () => async (dispatch) => {
  try {
    dispatch(fetchingIngredientsInProgress());
    const response = await axios.get("/ingredients");

    dispatch(fetchingIngredientsSuccess(response.data));
  } catch (e) {}
};
