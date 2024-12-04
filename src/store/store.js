import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature/UserSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
