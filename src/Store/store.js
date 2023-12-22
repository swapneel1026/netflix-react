import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./Slices/CountSlice";
import LoggedInSlice from "./Slices/LoggedInSlice";
const store = configureStore({
  reducer: {
    count: CountSlice,
    loggedin:LoggedInSlice
  },
});
export default store;
