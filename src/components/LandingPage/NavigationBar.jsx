import React, { useState } from "react";
import NetflixIcon from "../../assets/IconsSvg/NetflixLogo";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const NavigationBar = () => {
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  const navigator = useNavigate();

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
          <Link>Tv-Show</Link>
          <Link>Movies</Link>
          <Link>{auth.currentUser.email}</Link>
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
          <p className="relative px-4 py-2 text-4xl font-black text-black bg-red-500 h-fit w-fit">
            {auth.currentUser.displayName !== null
              ? auth.currentUser.displayName.substring(0, 1).toUpperCase()
              : "?"}
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
                    auth.signOut();
                    navigator("/login");
                  }}
                >
                  LogOut
                </button>
              </li>
              <li
                onClick={() => {
                  navigator("/home/profile");
                }}
              >
                Profile
              </li>
              <li
                onClick={() => {
                  navigator("/home/settings");
                }}
              >
                Settings
              </li>
            </ul>
          }
        </div>
      </section>
    </div>
  );
};
export default NavigationBar;
