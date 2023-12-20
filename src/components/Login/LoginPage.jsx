import React, { useEffect, useState } from "react";
import NetflixIcon from "../../assets/IconsSvg/NetflixLogo";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import {  toast } from 'sonner';

const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [parsedToken, setParsedToken] = useState("");
  const [typepasswordVisible, setTypePasswordVisible] = useState(false);
  const [passwordText, setPasswordText] = useState("");
  const navigator = useNavigate();
  const HandleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let email = formData.get("email");
    let password = formData.get("password");
    let checked = formData.get("check");

    if (email === "swapneel@gmail.com" && password === "12345") {
      if (checked === "on") {
        let jwt =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN3YXBuZWVsQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUifQ.6zACJsP2I0JUyk_Vq9alW6A3ggv1LhpGLC-35EoSEM8";
        localStorage.setItem("cAuthToken", jwt);
      }
      setLoggedIn(true);
      localStorage.setItem("loggedin", "true");
      setTimeout(() => {
        navigator("/home");
      }, 3000);
    } else {
      toast("Email or Password Incorrect!");
      setLoggedIn(false);
    }
  };
  useEffect(() => {
    const cauthtoken = localStorage.getItem("cAuthToken");
    if (cauthtoken !== null) {
      setParsedToken(jwtDecode(cauthtoken));
    }
  }, []);
  if (parsedToken) {
    navigator("/home");
  }

  return (
    <section className=" p-4  border-b-4 relative   border-[#232323]">
      <div className="bg-[url('/src/assets/Images/bg-large-netflix.jpg')] absolute inset-0 filter bg-bottom brightness-[0.4] "></div>
      <div className="relative z-30 flex justify-between mx-2">
        <NetflixIcon width={240} />
      </div>

      <form
        onSubmit={(e) => {
          HandleLogin(e);
        }}
        className="rounded-md relative flex flex-col items-center justify-center max-w-[450px] mx-auto bg-black/[70%]  px-[68px] pb-[159px] pt-[40px]"
      >
        {" "}
        <h1 className="w-full text-[32px] font-medium text-white mb-[28px]">
          Sign In
        </h1>
        <div className="flex flex-col items-start w-full px-4 py-1 mt-4 bg-white rounded-lg">
          <label className="text-[11px] text-black " htmlFor="email">
            Email or phone number
          </label>
          <input
            type="email"
            name="email"
            id=""
            required
            className="w-full px-2 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col items-start w-full px-4 py-1 mt-4 bg-white rounded-lg">
          <label className="text-[11px] text-black  " htmlFor="password">
            Password
          </label>
          <div className="inline-flex items-center space-x-2">
            <input
              type={typepasswordVisible ? "text" : "password"}
              name="password"
              id=""
              required
              className="w-full px-2 rounded-md outline-none"
              onChange={(e) => {
                setPasswordText(e.target.value);
              }}
            />
            {passwordText !== "" && (
              <span
                onClick={() => {
                  setTypePasswordVisible(!typepasswordVisible);
                }}
              >
                {!typepasswordVisible ? (
                  <IoMdEye size={20} />
                ) : (
                  <IoMdEyeOff size={20} />
                )}
              </span>
            )}
          </div>
        </div>
        <input
          type="submit"
          value={loggedIn ? "Signing In..." : "Sign In"}
          className="w-full p-4 mt-10 font-medium text-white rounded bg-netflix-red"
        />
        <div className="text-[#b3b3b3] flex justify-between w-full mt-2 text-[13px] leading-4">
          <article className="flex items-end">
            <input type="checkbox" name="check" id="" className="" />
            <span className="ml-1">Remember me</span>
          </article>
          <p>Need help?</p>
        </div>
        <p className="text-[#b3b3b3] font-extralight mt-[3.8125rem]">
          New to Netflix?{" "}
          <span className="font-normal text-white">Sign up now.</span>
        </p>
        <h6 className="text-[#8c8c8c] text-[0.8125rem] mt-[0.8125rem]">
          Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.
        </h6>
      </form>
    </section>
  );
};
export default LoginPage;
