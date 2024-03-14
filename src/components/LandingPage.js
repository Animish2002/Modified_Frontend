import React, { useState } from "react";
import Carousel from "./Carousel";
import Event from "./Event";
import News from "./News";
import Info from "./Info";
import Policies from "./Policies";
import LoginModal from "./LoginModal";

function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const backgroundImageUrl =`  ${process.env.PUBLIC_URL}/bgImage.png` ;

  return (
    <div className="block items-start justify-start h-screen relative">
      {showLogin && <LoginModal onClose={handleCloseLogin} />}

      <div id="navbar" className="grid grid-cols-2 w-full p-[0.5px]">
        <div>
          <img className="w-[150px] h-[40px]" src={`${process.env.PUBLIC_URL}/sciqus.png`} alt="logo" />
        </div>
        <div className="flex items-end justify-end mr-[20px]">
          <button className="font-serif text-center mr-[15px]" onClick={handleLoginClick}>LogIn</button>
          <button className="font-serif text-center">Contact</button>
        </div>
      </div> 

      <div className="w-full grid grid-rows-2 px-20 lg:px-40 bg-cover bg-center" style={{backgroundImage: `url(${backgroundImageUrl})`}}>
        <div className="h-[5px] grid grid-cols-2 row-span-1 w-full p-[10px]">
          <div id="col1" className="w-[145%]  ">
            <Carousel></Carousel>
          </div>
          <div id="col1" className="ml-[50%] w-[50%] bg-cyan-100 ">
            {/* Info image with side arrow and content */}
            <Info />
          </div>
        </div>

        <div className="grid grid-cols-3 w-full mt-[57px]">
          <div id="col1" className=" mr-[70px] w-[80%] ">
            {/* Policies with scrollbar */}
            <Policies />
          </div>
          <div id="col1" className=" mr-[70px]  w-[80%]  ">
            {/* News image side arrow with content */}
            <News />
          </div>
          <div id="col1" className=" ml-[70px] w-[80%] ">
            {/* Events with content */}
            <Event />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;