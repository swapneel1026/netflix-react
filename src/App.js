import React, { useState } from "react";
import NetflixIcon from "./assets/IconsSvg/NetflixLogo";
import Tv from "./assets/Images/tv-iamgenetflix.png";
import Stranger from "./assets/Images/stranger-things-img.jpg";
import SacredGames from "./assets/Images/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png";
import AppleTv from "./assets/Images/device-pile-in.png";
import { Link } from "react-router-dom";
function App() {
  const [focus, setfocus] = useState(false);
  return (
    <>
      <div className="" onClick={(e) => setfocus(false)}>
        <section className="h-screen p-4  border-b-4 relative   border-[#232323]">
          <div className="bg-[url('/src/assets/Images/bg-large-netflix.jpg')] absolute inset-0 filter bg-bottom brightness-[0.4] "></div>
          <div className="relative z-30 flex justify-between mx-28">
            <NetflixIcon width={220} />

            <div className="relative flex items-center gap-4 ">
              <select className="px-[1.625rem] py-[0.375rem] border   border-white rounded-md bg-[#171717] text-white text-[16px] ">
                <option> English</option>
                <option> Hindi</option>
              </select>
              <Link to={"/login"}>
                <button className="px-4 py-1 font-medium text-white rounded-md bg-netflix-red">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
          <div className="relative text-white md:max-w-[907px] lg:max-w-full text-center  mt-[188px]  flex flex-col items-center">
            <h1 className="text-[52px] font-[900]">
              Unlimited movies, TV shows and more
            </h1>
            <h4 className="text-[24px]">Watch anywhere. Cancel anytime.</h4>
            <h4 className="text-[20px]">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <form className="flex items-center gap-2 mt-10 max-h-[]">
              <div
                className={`flex flex-col border ${
                  focus ? "border-purple-700" : "border-[#2bb871]"
                }  rounded-md bg-transparent px-2 py-1`}
              >
                <label className="text-left">Email address</label>
                <input
                  type="email"
                  className={`w-[354px] bg-transparent outline-none `}
                  onClick={(e) => {
                    e.stopPropagation();
                    setfocus(true);
                  }}
                />
              </div>
              <button className="text-[1.5rem] font-medium bg-netflix-red px-[1.5rem] py-[12px] leading-[24px] rounded-md">
                Get Started {">"}
              </button>
            </form>
          </div>
        </section>
        <section className="flex items-center gap-2  justify-center h-screen bg-black px-[175px] border-b-4 border-t-4 border-[#232323]">
          <div className="w-full text-white ">
            <h1 className="text-[48px] font-extrabold">Enjoy on your TV</h1>
            <p className="text-[24px] mt-4 ">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="w-full ">
            <img src={Tv} alt="some" height={434} width={579} />
          </div>
        </section>
        <section className="flex items-center gap-2  justify-center h-screen bg-black px-[175px] border-b-4 border-t-4 border-[#232323]">
          <div className="w-full ">
            <img src={Stranger} alt="some" height={434} width={579} />
          </div>
          <div className="w-full text-white ">
            <h1 className="text-[48px] font-extrabold">
              Download your shows to watch offline
            </h1>
            <p className="text-[24px] mt-4 ">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </section>
        <section className="flex items-center gap-2  justify-center h-screen bg-black px-[175px] border-b-4 border-t-4 border-[#232323]">
          <div className="w-full text-white ">
            <h1 className="text-[48px] font-extrabold">Watch everywhere</h1>
            <p className="text-[24px] mt-4 ">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="w-full ">
            <img src={AppleTv} alt="some" height={434} width={579} />
          </div>
        </section>
        <section className="flex items-center gap-2  justify-center h-screen bg-black px-[175px] border-b-4 border-t-4 border-[#232323]">
          <div className="w-full ">
            <img src={SacredGames} alt="some" height={434} width={579} />
          </div>
          <div className="w-full text-white ">
            <h1 className="text-[48px] font-extrabold">
              Create profiles for kids
            </h1>
            <p className="text-[24px] mt-4 ">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
