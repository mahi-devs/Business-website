import React from "react";
import generic from "../../assets/images/generic-1.jpg"
const Card = () => {
  return (
    <div className="relative w-[582px] h-[617px] bg-gray-100 rounded-xl overflow-hidden">
      {/* Background Image */}
      <img
        src={generic} // Replace with actual image
        alt="Professional Woman"
        className="w-full h-full object-cover"
      />
      {/* Bottom Right Guarantee Badge */}
      <div className="absolute bottom-0 right-0 bg-secondary text-black p-5 rounded-tl-2xl w-[250px] h-[100px] flex flex-col justify-center">
        <span className="text-4xl font-bold">100%</span>
        <span className="italic text-lg">guaranteed</span>
      </div>
    </div>
  );
};

export default Card;
