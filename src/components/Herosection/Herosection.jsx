import React from "react";
import NetflixIcon from "../../assets/IconsSvg/NetflixLogo";
const HeroSection = () => {
  return (
    <section className=" p-4  border-b-4 relative   border-[#232323]">
      <div className="bg-[url('/src/assets/Images/bg-large-netflix.jpg')] absolute inset-0 filter bg-bottom brightness-[0.4] "></div>
      <div className="relative z-30 flex justify-between mx-2">
        <NetflixIcon width={240} />
      </div>

      <form className="rounded-md relative flex flex-col items-center justify-center max-w-[450px] mx-auto bg-black/[70%]  px-[68px] pb-[159px] pt-[40px]">
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
            className="w-full px-2 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col items-start w-full px-4 py-1 mt-4 bg-white rounded-lg">
          <label className="text-[11px] text-black  " htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id=""
            className="w-full px-2 rounded-md outline-none"
          />
        </div>
        <input
          type="submit"
          value="Sign In"
          className="w-full p-4 mt-10 font-medium text-white rounded bg-netflix-red"
        />
        <div className="text-[#b3b3b3] flex justify-between w-full mt-2 text-[13px] leading-4">
          <article className="flex items-end">
            <input type="checkbox" name="" id="" className="" />
            <span className="ml-1">Remember me</span>
          </article>
          <p>Need help?</p>
        </div>
        <p className="text-[#b3b3b3] font-extralight mt-[61px]">
          New to Netflix?{" "}
          <span className="font-normal text-white">Sign up now.</span>
        </p>
        <h6 className="text-[#8c8c8c] text-[13px] mt-[13px]">
          Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.
        </h6>
      </form>
    </section>
  );
};
export default HeroSection;
