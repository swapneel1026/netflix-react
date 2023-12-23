import React from "react";
import Logo from '../Images/Netflix_Logo_PMS.png'

function NetflixIcon({onClick,className}) {
  return (
    <img onClick={onClick}  src={Logo} alt="logo" className={`${className}`}  />
  );
}

export default NetflixIcon;
