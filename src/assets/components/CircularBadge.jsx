import React from "react";
import circle from "../../assets/images/circle.svg";

const CircularBadge = () => {
    return (
      <div className="relative w-40 h-40 flex items-center justify-center bg-black text-white rounded-full border border-black">
        {/* Rotating Text */}
        <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              id="circlePath"
              d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              fill="transparent"
            />
            <text fontSize="7.5" className="fill-white tracking-wide">
              <textPath href="#circlePath" startOffset="50%">
                GLOBAL ACCOUNTING COMPANY - TAX ADVISOR - NEW YORK BASED  
              </textPath>
              
            </text>
          </svg>
        </div>
  
        {/* Center Icon */}
        <div className="flex items-center justify-center w-16 h-16 border-2 border-green-500 rounded-full overflow-hidden">
          <span className="overflow-hidden">
            <img className="stroke-blue-500 fill-amber-500 bg-secondary outline-none overflow-hidden" src={circle} alt="" />
          </span>
        </div>
      </div>
    );
  };

export default CircularBadge;
