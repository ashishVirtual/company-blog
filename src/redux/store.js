import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slice";

const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});

export default store;
