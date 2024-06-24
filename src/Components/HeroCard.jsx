import React from "react";
import imageCurves from "../Assets/imagecurves.png";
import Tick from "../Assets/Tick.svg";

function HeroCard() {
  return (
    <div className="w-[500px] h-[354px] flex flex-col shadow-2xl rounded-[40px] items-start">
      <div className="overflow-hidden">
        <img src={imageCurves} alt="curves" className="overflow-hidden" />
      </div>
      <div className="flex flex-col items-center w-full justify-center  h-full ">
        <div className="flex gap-[30px] w-[350px] h-[66px] items-center">
          <img src={Tick} alt="Tick" />
          <p>Join our BETA Program</p>
        </div>
        <div className="flex gap-[30px] w-[350px] h-[66px] items-center">
          <img src={Tick} alt="Tick" />
          <p>User App Ver 0.2 Available for Testing</p>
        </div>
        <div className="flex gap-[30px] w-[350px] h-[66px] items-center">
          <img src={Tick} alt="Tick" />
          <p>Service Partner App Ver 0.1 Available for Testing</p>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
