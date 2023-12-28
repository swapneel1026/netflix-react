import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./Slices/CountSlice";
import EmailDefaultSlice from "./Slices/EmailDefaultSlice";
const store = configureStore({
  reducer: {
    count: CountSlice,
    emaildefault: EmailDefaultSlice,
  },
});
export default store;
