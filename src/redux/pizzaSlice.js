import { createSlice } from "@reduxjs/toolkit";

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    pizzas: {
      status: "success",
      code: 200,
      data: {
        data: [
          {
            _id: "64d8c82ac8a0b6b11021c656",
            ingredients: ["sos pomidorowy", "mozarella", "bazylia"],
            name: "Margherita",
            img: "https://i.imgur.com/JkjXy44.jpg",
          },
          {
            _id: "64d8c979c8a0b6b11021c658",
            ingredients: [
              "sos pomidorowy",
              "mozarella",
              "szynka ",
              "pieczarki",
            ],
            name: "Capriciosa",
            img: "https://i.imgur.com/vyeyOuQ.jpg",
          },
          {
            _id: "64d8c9c6c8a0b6b11021c659",
            ingredients: ["sos pomidorowy", "mozarella", "szynka", "papryka"],
            name: "Pepperoni",
            img: "https://i.imgur.com/ttV4TcT.jpg",
          },
          {
            _id: "64d8ca10c8a0b6b11021c65a",
            ingredients: ["sos pomidorowy", "mozarella", "szynka", "ananas"],
            name: "Hawajska",
            img: "https://i.imgur.com/tsWlQHs.jpg",
          },
          {
            _id: "64d8ca97c8a0b6b11021c65b",
            ingredients: [
              "sos pomidorowy",
              "mozarella",
              "kiełbasa",
              "cebula",
              "papryka",
              "pieczarki",
            ],
            name: "Farmerska",
            img: "https://i.imgur.com/SldB1uE.jpg",
          },
          {
            _id: "64d8caaec8a0b6b11021c65c",
            ingredients: [
              "sos pomidorowy",
              "mozarella",
              "kurczak",
              "cebula",
              "kukurydza",
              "sos BBQ",
            ],
            name: "Teksas",
            img: "https://i.imgur.com/pd5TiIP.jpg",
          },
          {
            _id: "64d8cadac8a0b6b11021c65d",
            ingredients: [
              "sos pomidorowy",
              "mozarella",
              "szynka",
              "rukola",
              "pomidor",
              "oliwki",
            ],
            name: "Włoska",
            img: "https://i.imgur.com/6iyyd1Z.jpg",
          },
          {
            _id: "64d8cb2ec8a0b6b11021c65e",
            ingredients: [
              "sos pomidorowy",
              "mozarella",
              "salami",
              "papryka",
              "cebula",
              "jalapeno",
            ],
            name: "Vulcano",
            img: "https://i.imgur.com/jCTfLEx.jpg",
          },
          {
            _id: "64d8cb4dc8a0b6b11021c65f",
            ingredients: [
              "sos pomidorowy",
              "mozarella",
              "pomidor",
              "papryka",
              "cebula",
              "pieczarki",
            ],
            name: "Wegetariańska",
            img: "https://i.imgur.com/dxMrVxV.jpg",
          },
        ],
      },
    },
    isLoading: true,
    error: null,
  },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.pizzas = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  pizzaSlice.actions;
export const pizzasReducer = pizzaSlice.reducer;
