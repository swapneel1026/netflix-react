import { createSlice } from "@reduxjs/toolkit";
const CountSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    increasecount: (state) => {
      state.count += 1;
    },
    decreaseCount: (state) => {
      state.count -= 1;
    },
  },
});
export const { increasecount, decreaseCount } = CountSlice.actions;
export default CountSlice.reducer;
