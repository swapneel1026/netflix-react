import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedin } from "../../Store/Slices/LoggedInSlice";

const Home = () => {
  const loggedin = useSelector((store) => store.loggedin.loggedin);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  console.log(loggedin, "home");

  useEffect(() => {
    if (loggedin === false && localStorage.getItem("cAuthToken") === null) {
      navigator("/login");
    }
  }, [loggedin, navigator]);

  return (
    <div>
      <h1>LoggedIn</h1>
      <button
        className="p-2 text-white rounded-md bg-netflix-red"
        onClick={() => {
          localStorage.removeItem("cAuthToken");
          dispatch(setLoggedin(false));
          navigator("/login");
        }}
      >
        LogOut
      </button>
    </div>
  );
};
export default Home;
