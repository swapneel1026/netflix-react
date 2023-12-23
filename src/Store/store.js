import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./Slices/CountSlice";
import LoggedInSlice from "./Slices/LoggedInSlice";
import EmailDefaultSlice from "./Slices/EmailDefaultSlice";
const store = configureStore({
  reducer: {
    count: CountSlice,
    loggedin:LoggedInSlice,
    emaildefault:EmailDefaultSlice
  },
});
export default store;
