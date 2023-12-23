import React from "react";
import Logo from '../Images/Netflix_Logo_PMS.png'

function NetflixIcon({width,onClick}) {
  return (
    <img onClick={onClick}  src={Logo} alt="logo" width={width}  />
  );
}

export default NetflixIcon;
