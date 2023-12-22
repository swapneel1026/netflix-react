import { createSlice } from "@reduxjs/toolkit";
const LoggedInSlice = createSlice({
  name: "loggedin",
  initialState: {
    loggedin: false,
  },
  reducers: {
    setLoggedin: (state, actions) => {
      state.loggedin = actions.payload;
    },
  },
});
export const { setLoggedin } = LoggedInSlice.actions;
export default LoggedInSlice.reducer;
