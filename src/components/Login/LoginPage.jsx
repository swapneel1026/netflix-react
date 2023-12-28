import React, { useState, useEffect } from "react";
import NetflixIcon from "../../assets/IconsSvg/NetflixLogo";
import { useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const LoginPage = () => {
  const [typepasswordVisible, setTypePasswordVisible] = useState(false);
  const [passwordText, setPasswordText] = useState("");
  const email = useSelector((store) => store.emaildefault.email);
  const [signUp, setSingUp] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigator("/home");
      } else {
        navigator("/login");
      }
    });
  }, [navigator]);

  const HandleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let email = formData.get("email");
    let password = formData.get("password");
    let checked = formData.get("check");
    if (signUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          toast("Signed Up Successfully!");
          if (user) {
            setSingUp(false);
          }
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          toast("Logged In Successfully!" + user.email);
          if (checked === "on") {
            localStorage.setItem("accessToken", user.accessToken);
          }
          navigator("/home");
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast(errorMessage);
        });
    }
  };

  return (
    <>
      <section className=" p-4  border-b-4 relative border-[#232323]">
        <div className="bg-[url('/src/assets/Images/bg-large-netflix.jpg')] absolute inset-0 filter bg-bottom brightness-[0.4] "></div>
        <div className="relative z-30 flex justify-between mx-2">
          <NetflixIcon className={"w-[240px]"} onClick={() => navigator("/")} />
        </div>

        <form
          onSubmit={(e) => {
            HandleLogin(e);
          }}
          className="rounded-md relative flex flex-col items-center justify-center max-w-[450px] mx-auto bg-black/[70%]  sm:px-[68px] px-10 pb-[9.9375rem] pt-[40px]"
        >
          {" "}
          <h1 className="w-full text-[32px] font-medium text-white mb-[28px]">
            {signUp ? "Sign Up" : "Sign In"}
          </h1>
          {signUp && (
            <div className="flex flex-col items-start w-full px-4 py-1 mt-4 bg-white rounded-lg">
              <label className="text-[11px] text-black " htmlFor="name">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter name"
                name="name"
                required
                className="w-full px-2 rounded-md outline-none placeholder:text-sm"
              />
            </div>
          )}
          <div className="flex flex-col items-start w-full px-4 py-1 mt-4 bg-white rounded-lg">
            <label className="text-[11px] text-black " htmlFor="email">
              Email or phone number
            </label>
            <input
              type="email"
              defaultValue={email}
              placeholder="Enter email"
              name="email"
              required
              className="w-full px-2 rounded-md outline-none placeholder:text-sm"
            />
          </div>
          <div className="flex flex-col items-start w-full px-4 py-1 mt-4 bg-white rounded-lg">
            <label className="text-[11px] text-black" htmlFor="password">
              Password
            </label>
            <div className="inline-flex items-center space-x-2">
              <input
                type={typepasswordVisible ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                autoComplete="true"
                required
                className="w-full px-2 rounded-md outline-none placeholder:text-sm "
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
          {!signUp && (
            <input
              type="submit"
              value={auth.currentUser === null ? "Sign In" : "Signing In..."}
              className="w-full p-4 mt-10 font-medium text-white rounded bg-netflix-red"
            />
          )}
          {signUp && (
            <input
              type="submit"
              value={"Sign Up"}
              className="w-full p-4 mt-10 font-medium text-white rounded bg-netflix-red"
            />
          )}
          {!signUp && (
            <div className="text-[#b3b3b3] flex justify-between w-full mt-2 text-[13px] leading-4">
              <article className="flex items-end">
                <input
                  type="checkbox"
                  defaultChecked
                  name="check"
                  className=""
                />
                <span className="ml-1">Remember me</span>
              </article>
              <p>Need help?</p>
            </div>
          )}
          <p className="text-[#b3b3b3] font-extralight mt-[3.8125rem]">
            New to Netflix?{" "}
            <span
              className="font-normal text-white cursor-pointer"
              onClick={() => {
                setSingUp(!signUp);
              }}
            >
              {signUp ? "Sign in now." : "Sign up now"}
            </span>
          </p>
          <h6 className="text-[#8c8c8c] text-[0.8125rem] mt-[0.8125rem]">
            Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.
          </h6>
        </form>
      </section>
    </>
  );
};
export default LoginPage;
