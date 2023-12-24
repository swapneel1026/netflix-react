import React, { useState, useEffect } from "react";
import NetflixIcon from "../../assets/IconsSvg/NetflixLogo";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedin } from "../../Store/Slices/LoggedInSlice";

const NavigationBar = () => {
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  const loggedin = useSelector((store) => store.loggedin.loggedin);
  const navigator = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedin === false && localStorage.getItem("cAuthToken") === null) {
      navigator("/login");
    }
  }, [loggedin, navigator]);
  return (
    <div
      className="flex items-center justify-between px-8 text-white "
      onClick={(e) => {
        e.stopPropagation();
        setShowLogoutMenu(false);
      }}
    >
      <section className="flex items-center w-1/2 gap-16 ">
        <NetflixIcon className={"w-[140px]"} onClick={() => navigator("/")} />
        <nav className="flex gap-3 ">
          <Link>Home</Link>
          <Link>Tv Show</Link>
          <Link>Movies</Link>
          <Link>New and Popular</Link>
        </nav>
      </section>
      <section className="flex items-center justify-end w-1/2 gap-10">
        <SearchBar />
        <div
          role="button"
          onClick={(e) => {
            e.stopPropagation();
            setShowLogoutMenu(!showLogoutMenu);
          }}
        >
          <p className="relative p-1 text-4xl font-black text-black bg-red-500 h-fit w-fit">
            N
          </p>
          {
            <ul
              className={`absolute p-2 mt-2 text-gray-500 bg-black right-[2%] transition-opacity duration-500 ease-in ${
                showLogoutMenu ? "opacity-100 visible " : "opacity-0 invisible"
              }  `}
            >
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem("cAuthToken");
                    dispatch(setLoggedin(false));
                    navigator("/login");
                  }}
                >
                  LogOut
                </button>
              </li>
              <li>Profile</li>
              <li>Settings</li>
            </ul>
          }
        </div>
      </section>
    </div>
  );
};
export default NavigationBar;
