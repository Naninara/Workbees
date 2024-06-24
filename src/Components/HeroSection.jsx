import React from "react";
import HeroCard from "./HeroCard";

import arrow from "../Assets/downArrow.svg";
import phone1 from "../Assets/phone1.png";
import phone2 from "../Assets/phone2.png";
import vector from "../Assets/Vector.png";

function HeroSection() {
  return (
    <>
      <div className="flex overflow-hidden relative">
        <div className="flex flex-col font-figtree gap-[25px] w-[70%] mx-[14%]">
          <h1 className="text-[65px] font-[700]">Maintenance and</h1>
          <h1 className="text-[65px] font-[700]">Marketing Simplified</h1>

          <div>
            <h4 className="text-[20px] font-[500]">
              Managing Apartments, Automobiles and marketing Brands
            </h4>
          </div>
          <HeroCard />

          <button className="flex w-[262px] h-[58px] rounded-[16px] bg-[#635BFF] justify-around items-center text-white ">
            {" "}
            Know more about beta
            <div className="flex justify-center items-center h-[32px] w-[32px] rounded-full bg-white">
              <img src={arrow} alt="arrow" />
            </div>
          </button>
        </div>
        <div className="relative w-[40%]  h-auto">
          <img
            src={phone2}
            alt="phone2"
            className="absolute h-[634px] w-[700px] top-[-8%] right-[45%] animate-mobile"
          />
          <img
            src={phone1}
            alt="phone1"
            className="absolute top-[0%] h-[600px] right-[0%] animate-mobile"
          />
        </div>
        <div className="absolute w-[1000px] h-[1000px] top-0 rounded-full animate-hero shadow-spread">
          <img src={vector} alt="vector" className="rounded-full opacity-50" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
