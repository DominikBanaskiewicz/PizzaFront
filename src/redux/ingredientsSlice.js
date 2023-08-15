import { createSlice } from "@reduxjs/toolkit";

const ingredientsSlice = createSlice({
  name: "operationForIngredient",
  initialState: {
    ingredients: [
      {
        _id: "64d91b4bc8a0b6b11021c66c",
        name: "ananas",
        img: "https://i.ibb.co/9hW77KV/ananas.jpg",
      },
      {
        _id: "64d91b90c8a0b6b11021c66d",
        name: "bazylia",
        img: "https://i.ibb.co/vcN0qJw/bazylia.jpg",
      },
      {
        _id: "64d91be2c8a0b6b11021c66e",
        name: "cebula",
        img: "https://i.ibb.co/GsNrr6R/cebula.jpg",
      },
      {
        _id: "64d91c08c8a0b6b11021c66f",
        img: "https://i.ibb.co/4WTw19r/kie-basa.jpg",
        name: "kiełbasa",
      },
      {
        _id: "64d91c48c8a0b6b11021c670",
        name: "kukurydza",
        img: "https://i.ibb.co/vDBnVbt/kukurydza.jpg",
      },
      {
        _id: "64d91c76c8a0b6b11021c671",
        name: "kurczak",
        img: "https://i.ibb.co/kxqnT6S/kurczak.jpg",
      },
      {
        _id: "64d91c97c8a0b6b11021c672",
        name: "mozarella",
        img: "https://i.ibb.co/b3RfMD2/mozarella.jpg",
      },
      {
        _id: "64d91cc6c8a0b6b11021c673",
        name: "jalapenio",
        img: "https://i.ibb.co/KNTJSyG/papryczka-jalapenio.jpg",
      },
      {
        _id: "64d91ce9c8a0b6b11021c674",
        name: "papryka",
        img: "https://i.ibb.co/LY5GyWK/papryka.jpg",
      },
      {
        _id: "64d91d15c8a0b6b11021c675",
        name: "pieczarki",
        img: "https://i.ibb.co/m0w0NB4/pieczarki.jpg",
      },
      {
        _id: "64d91d31c8a0b6b11021c676",
        name: "pomidor",
        img: "https://i.ibb.co/vcn7XMz/pomidor.jpg",
      },
      {
        _id: "64d91d56c8a0b6b11021c677",
        name: "rukola",
        img: "https://i.ibb.co/ypdvg1t/rukola.jpg",
      },
      {
        _id: "64d91d78c8a0b6b11021c678",
        name: "salami",
        img: "https://i.ibb.co/PhDkXcS/salami.jpg",
      },
      {
        _id: "64d91d95c8a0b6b11021c679",
        name: "sos-BBQ",
        img: "https://i.ibb.co/4dhXTy0/sos-BBQ.jpg",
      },
      {
        _id: "64d91dbec8a0b6b11021c67a",
        name: "sos pomidorowy",
        img: "https://i.ibb.co/YQM5yQF/sos-pomidorowy.jpg",
      },
      {
        _id: "64d91dddc8a0b6b11021c67b",
        name: "szynka",
        img: "https://i.ibb.co/FY9bw8x/szynka.jpg",
      },
    ],
    isLoading: true,
    error: null,
  },
  reducers: {
    fetchingIngredientsInProgress(state) {
      state.isLoading = true;
    },
    fetchingIngredientsSuccess(state, action) {
      state.isLoading = false;
      state.ingredients = action.payload.data.data;
    },
    fetchingIngredientsError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  fetchingIngredientsInProgress,
  fetchingIngredientsSuccess,
  fetchingIngredientsError,
} = ingredientsSlice.actions;
export const ingredientsReducer = ingredientsSlice.reducer;
