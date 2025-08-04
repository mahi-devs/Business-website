import React from "react";
import generic2 from '../../assets/images/generic-2.jpg'
import generic3 from '../../assets/images/generic-3.jpg'

const ImageCardStack = () => {
  return (
    <div className="relative  ">

    <div className="  absolute top-0 left-[235px] w-64 h-72 rounded-2xl overflow-hidden shadow-md">
      <img
        src={generic2}
        alt="Back"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Front Image */}
    <div className="absolute top-[110px] left-[50px] w-64 h-72 rounded-2xl overflow-hidden shadow-xl">
      <img
        src={generic3}
        alt="Front"
        className="w-full h-full object-cover  "
      />
    </div>
  </div>
  );
};

export default ImageCardStack;
