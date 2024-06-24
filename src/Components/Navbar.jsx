import React from "react";
import logo from "../Assets/logo.svg";
import arrow from "../Assets/downArrow.svg";
function Navbar() {
  return (
    <div className="w-full h-[126px] flex justify-around items-center font-figtree sticky top-0 z-10 bg-white">
      <div className="flex items-center justify-center  w-[60%] gap-[50px]">
        <img src={logo} alt="logo" className="w-[75px] h-[67px] " />
        <div className="flex gap-[50px] font-bold">
          <p>Balancers</p>
          <p>Runer</p>
          <p>About</p>
          <p>Career</p>
        </div>
      </div>

      <div className="flex w-[40%] gap-[50px] text-white">
        <button className="flex w-[200px] h-[56px] rounded-[16px] bg-[#635BFF] justify-around items-center ">
          {" "}
          For Balancers
          <div className="flex justify-center items-center h-[32px] w-[32px] rounded-full bg-white">
            <img src={arrow} alt="arrow" />
          </div>
        </button>
        <button className="flex w-[200px] h-[56px] rounded-[16px] bg-[#635BFF] justify-around items-center">
          {" "}
          For Runer
          <div className="flex justify-center items-center h-[32px] w-[32px] rounded-full bg-white">
            <img src={arrow} alt="arrow" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
