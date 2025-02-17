import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Fern", price: 10, category: "Indoor", image: "fern.jpg" },
  { id: 2, name: "Cactus", price: 15, category: "Succulent", image: "cactus.jpg" },
  { id: 3, name: "Aloe Vera", price: 12, category: "Succulent", image: "aloe.jpg" },
  { id: 4, name: "Bonsai", price: 50, category: "Tree", image: "bonsai.jpg" },
  { id: 5, name: "Orchid", price: 30, category: "Flowering", image: "orchid.jpg" },
  { id: 6, name: "Snake Plant", price: 20, category: "Indoor", image: "snake.jpg" },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;