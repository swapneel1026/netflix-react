import React, { useEffect } from "react";
import NavigationBar from "../LandingPage/NavigationBar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate, useHref } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Home = () => {
  const path = useHref();
  const navigator = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigator(path);
      } else {
        navigator("/login");
      }
    });
  }, [navigator, path]);
  return (
    <>
      {auth.currentUser !== null && (
        <div className="h-screen bg-[#141414]">
          <NavigationBar />
          <Outlet />
        </div>
      )}
    </>
  );
};
export default Home;
