import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [loggedin]=useState(localStorage.getItem("loggedin"))
  const navigator = useNavigate();
  console.log(loggedin);
    if (loggedin === "false") {
      navigator("/login");
    }

  return (
    <div>
      <h1>LoggedIn</h1>
      <button
        className="p-2 text-white rounded-md bg-netflix-red"
        onClick={() => {
          localStorage.removeItem("cAuthToken");
          localStorage.setItem("loggedin", "false");
          navigator("/login");
        }}
      >
        LogOut
      </button>
    </div>
  );
};
export default Home;
