import React from "react";


const SplitCard = ({image_three,content,title}) => {
  return (
    <div className="w-[250px] h-[427px] rounded-xl shadow-lg overflow-hidden bg-white">
      
      <div className="h-1/2 w-full">
        <img
          src={image_three}
          alt="Card visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Half - Content */}
      <div className="h-1/2 w-full p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-[20px] font-semibold  font-lexend text-quaternary mb-2">{title}</h3>
          <p className="text-[14px] text-tertiary font-lexend leading-[1.7] w-[200px]">
           {content}
          </p>
        </div>
        <button className="mt-4  text-secondary text-sm font-lexend font-semibold uppercase px-4 py-2 rounded-md hover:bg-green-700 hover:text-white">
          view details
        </button>
      </div>
    </div>
  );
};

export default SplitCard;
