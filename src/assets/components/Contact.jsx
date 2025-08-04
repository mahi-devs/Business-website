import React from "react";
import { ChevronDown } from "lucide-react"; 

const Contact = () => {
  const items = [
    "Expert Team",
    "Personalized Approach",
    "Reliable Service",
    "Client-Centric Focus",
  ];

  return (
    <div className="w-full px-6 py-16 bg-white flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto ">
      
      <div className="pl-20">
        <div className="inline-block bg-green-100 text-green-700 text-[15px] font-lexend font-semibold px-4 py-1 rounded-full mb-[24px]">
          LET’S WORK TOGETHER
        </div>
        <h2 className="text-[56px] font-semibold text-quaternary font-lexend leading-none mb-[24px]">Why Choose Us?</h2>
        <p className="text-tertiary text-base mb-[24px] tracking-[-0.24] leading-[1.8] font-lexend  w-[510px]">
          Whether you're a small business owner, an individual seeking tax
          advice, or a multinational corporation, Porto is here to support you.
          Contact us today to schedule a consultation and discover how we can
          help you achieve financial peace of mind.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-gray-900 transition">
          Contact Us <span>→</span>
        </button>
      </div>

      
      <div className="flex flex-col gap-4  pr-12">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-[30px] py-[23px] bg-white rounded-xl shadow hover:shadow-md transition w-[545px]"
          >
            <span className="font-semibold text-base text-quaternary font-lexend ">
              {item}
            </span>
            <div className="bg-black p-2 rounded-full">
              <ChevronDown className="text-white w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
