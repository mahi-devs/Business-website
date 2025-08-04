import React from "react";
import { TrendingUp } from "lucide-react"; // icon library

const ExcellenceSection = () => {
  return (
    <div className=" ">
      <div className="">
    
        <h2 className="text-[46px]  font-semibold font-lexend  text-quaternary">
          Delivering Excellence Through <br />     
          <span className="bg-green-400 px-2 text-white ">
            Expertise
          </span>
          and
          <span className="bg-green-400 px-2 text-white">
            Dedication
          </span>
        </h2>

        {/* Stats Row */}
        <div className="flex gap-x-[35px]  mt-10">
          {/* Stat Block 1 */}
          <div className="text-left max-w-xs">
            <div className="flex items-center gap-3">
              <h3 className="text-[80px] font-bold text-quaternary">90%</h3>
              <TrendingUp className="text-green-500 size-[50px]" />
            </div>
            <p className="italic text-[32px]  text-quaternary mt-1">
              Increased Profitability
            </p>
            <p className="text-tertiary font-lexend  text-base leading-[1.7] mt-2">
              Through strategic financial planning and detailed analysis.
            </p>
          </div>

          {/* Stat Block 2 */}
          <div className="text-left max-w-xs">
            <div className="flex items-center gap-3">
              <h3 className="text-[80px] font-bold font-lexend text-quaternary">70%</h3>
              <TrendingUp className="text-green-500 size-[50px]" />
            </div>
            <p className="italic text-[32px] font-lexend text-quaternary mt-1">Tax Savings</p>
            <p className="text-tertiary font-lexend  text-base leading-[1.7] mt-2">
              Saving our clients thousands of dollars each year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcellenceSection;
