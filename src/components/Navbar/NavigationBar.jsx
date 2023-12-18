import React from "react";
import SearchBar from "./SearchBar";
const NavigationBar = () => {
const LinksArray=['Men',"Women","Kids","Home & Living", "Beauty","Studio"]

  return <nav>
<section className="logo">Logo</section>
<section className="Links">
  {LinksArray.map(link=>{
    return(

      <li>{link}</li>
    )
  })}
  
</section>
<section>
  <SearchBar/>
</section>
<section>
  {/* <ProfileIcon/>
  <WishListIcon/>
  <BagIcon/> */}
</section>
 
  </nav>;
};
export default NavigationBar;
