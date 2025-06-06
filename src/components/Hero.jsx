import React from "react";
import bannerImg from "../assets/banner.png";

const Hero = () => {
  return (
    <div>
      <div>
        <img className="w-full md:max-w-md mx-auto" src={bannerImg} alt="" />
      </div>
      <div className="flex flex-col items-center gap-5 mt-4">
        <h1 className="text-5xl">Borwse, Search, View, Buy</h1>
        <p className="text-center">
          {" "}
          Best Place o browse, search, view details and purcash of top
          FlagShipsOff phones <br /> of the current time- FlagShipsOff
        </p>
        <div className="flex  items-center gap-4">
          <input
            type="text"
            placeholder="Search Phone by Name"
            className="input md:w-[500px] input-primary"
          />

          <button className="relative inline-block text-lg group cursor-pointer">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Search</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
