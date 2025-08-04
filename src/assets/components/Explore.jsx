import React from "react";
import { ArrowRight } from "lucide-react"; // or use SVG

const Explore = () => {
  return (
    <div className="mt-[30px]  absolute w-[1306px] bg-green-600 rounded-b-lg   py-4 flex   text-white justify-center">
      {/* Left Label */}
      <div className="bg-gradient-to-r from-green-500 to-green-800 px-6 py-2 rounded-full font-semibold text-sm mb-3 md:mb-0 font-lexend">
        EXPLORE FURTHER:
      </div>

      {/* Links Section */}
      <div className="flex pl-[20px] font-lexend items-center gap-6 text-sm font-semibold">
        <a href="#" className="flex items-center gap-2 hover:underline">
          Learn About Our Process <ArrowRight className="w-4 h-4" />
        </a>
        <div className="h-5 w-px bg-white/50" />
        <a href="#" className="flex font-lexend items-center gap-2 hover:underline">
          Get Free Consultation <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default Explore;
