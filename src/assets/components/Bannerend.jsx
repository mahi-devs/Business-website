import React from 'react'
import shape from '../../assets/images/shape.svg'
import global from '../../assets/images/global.svg'
import admin from '../../assets/images/admin.svg'
import tax from '../../assets/images/tax.svg'

const Bannerend = ({content_one,image_one,image_two,content_two}) => {
  return (
    <div className=" flex">
    
        <div className="relative overflow-hidden" >
            <img className=""src={image_one} alt="" />

            <img className="absolute left-[14px] bottom-[25px] bg-white overflow-hidden outline-none" src={image_two} alt="" />
        </div>
        <div className="pl-[28px]">
           <h1 className=" font-lexend text-[24px] font-semibold text-quaternary mb-[14px] leading-[27px]">
            {content_one}
           </h1>
            <p className="w-[273px] text-[16px] text-tertiary font-lexend leading-[1.6] ">{content_two}
            </p>
        </div>
    </div>
  )
}

export default Bannerend