import React, { useState } from "react";
import NetflixIcon from "./assets/IconsSvg/NetflixLogo";
import Tv from "./assets/Images/tv-iamgenetflix.png";
import Stranger from "./assets/Images/stranger-things-img.jpg";
import SacredGames from "./assets/Images/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png";
import AppleTv from "./assets/Images/device-pile-in.png";
import appleTvGif from './assets/Images/tvgif.gif'
import { Link } from "react-router-dom";
import DownloadBanner from "./components/Navbar/DownloadBanner";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from'react-redux'
import { setEmail } from "./Store/Slices/EmailDefaultSlice";
function App() {
  const [focus, setfocus] = useState(false);
  const navigator=useNavigate()
  const dispatch=useDispatch()
  return (
    <>
      <div className="" onClick={(e) => setfocus(false)}>
        <section className="h-screen p-4  border-b-4 relative   border-[#232323]">
          <div className="bg-[url('/src/assets/Images/bg-large-netflix.jpg')] absolute inset-0 filter bg-bottom brightness-[0.4] "></div>
          <div className="relative z-30 flex justify-between lg:mx-28">
            <NetflixIcon width={120} className={"md:w-[15rem] w-[7.5rem]"}/>

            <div className="relative flex items-center gap-4 ">
              <select className="md:px-[1.625rem] md:py-[0.375rem] border   border-white rounded-md bg-[#171717] text-white md:text-[16px] text-[12px] ">
                <option> English</option>
                <option> Hindi</option>
              </select>
              <Link to={"/login"}>
                <button className="px-2 py-1 font-medium text-white text-[12px] md:text-[16px] rounded-md md:px-4 bg-netflix-red">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
          <div className="relative text-white md:max-w-[907px] lg:max-w-full text-center  mt-16 xl:mt-[158px]  flex flex-col items-center">
            <h1 className="md:text-[40px] text-[32px] lg:text-[52px] font-[900]">
              Unlimited movies, TV shows and more
            </h1>
            <h4 className="md:text-[20px] text-[16px] lg:text-[24px]">Watch anywhere. Cancel anytime.</h4>
            <h4 className="md:text-[20px] text-[16px] lg:text-[24px] mt-4 ">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <form className="flex flex-col items-center gap-2 mt-10 lg:flex-row ">
              <div
                className={`flex flex-col border ${
                  focus ? "border-purple-700" : "border-[#2bb871]"
                }  rounded-md bg-white bg-opacity-20 px-2 py-1`}
              >
                <label className="text-[12px] text-left">Email address</label>
                <input
                  type="email"
                  className={`lg:w-[354px] w-[250px] bg-transparent outline-none `}
                  onChange={(e)=>dispatch(setEmail(e.target.value))}
                  onClick={(e) => {
                    e.stopPropagation();
                    setfocus(true);
                  }}
                />
              </div>
              <button onClick={(e)=>{e.preventDefault()
              navigator("/login")}} className="lg:text-[1.5rem] lg:mt-0 mt-4 text-[20px] font-medium bg-netflix-red px-[1.5rem] lg:py-[12px] py-2 lg:leading-[24px] rounded-md">
                Get Started {">"}
              </button>
            </form>
          </div>
        </section>
        <section className="flex lg:flex-row flex-col items-center  lg:gap-2  gap-y-2   md:px-16  justify-center h-screen bg-black lg:px-[175px] px-4 border-b-4 border-t-4 border-[#232323]">
          <div className="w-full text-center text-white lg:text-left">
            <h1 className="text-[32px] lg:text-[48px] font-bold lg:font-extrabold">Enjoy on your TV</h1>
            <p className="text-[18px] lg:text-[24px] mt-4 ">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="w-full ">
            <img src={Tv} alt="some" height={434} width={579} />
          </div>
        </section>
        <section className="flex lg:flex-row flex-col-reverse  lg:items-center lg:gap-2  gap-y-2   md:px-16   lg:justify-center h-screen bg-black lg:px-[175px] px-4 border-b-4 border-t-4 border-[#232323]">
          <div className="relative flex justify-center w-full">
            <DownloadBanner className="absolute bottom-10 "/>
            <img src={Stranger} alt="some" height={434} width={579} className=""/>
          </div>
          <div className="w-full text-center text-white lg:text-left">
            <h1 className="text-[32px] lg:text-[48px] font-bold lg:font-extrabold">
              Download your shows to watch offline
            </h1>
            <p className="text-[24px] mt-4 ">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </section>
        <section className="flex lg:flex-row flex-col items-center lg:gap-2  gap-y-2   justify-center h-screen bg-black lg:px-[175px] md:px-16 px-4  border-b-4 border-t-4 border-[#232323]">
          <div className="w-full text-center text-white lg:text-left">
            <h1 className="text-[32px] lg:text-[48px] font-bold lg:font-extrabold">Watch everywhere</h1>
            <p className="text-[24px] mt-4 ">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="relative flex justify-center w-full">
            <img src={appleTvGif} alt="" className="absolute top-10 md:top-12 w-[140px] md:w-[300px] lg:w-[220px] xl:w-[320px]"/>
            <img src={AppleTv} alt="some" height={434} width={579} className="relative"/>
          </div>
        </section>
        <section className="flex lg:flex-row flex-col-reverse items-center  gap-y-2 lg:gap-2  md:px-16  justify-center h-screen bg-black lg:px-[175px] px-4 border-b-4 border-t-4 border-[#232323]">
          <div className="w-full ">
            <img src={SacredGames} alt="some" height={434} width={579} />
          </div>
          <div className="w-full text-center text-white lg:text-left">
            <h1 className="text-[32px] lg:text-[48px] font-bold lg:font-extrabold">
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
