import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import Home from "./components/Dashboard/Home";
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Provider store={store}>
          <Toaster position="top-right" />
          <LoginPage />
        </Provider>
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <Provider store={store}>
        <Home />
      </Provider>
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
