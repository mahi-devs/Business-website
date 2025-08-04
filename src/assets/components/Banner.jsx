import React from 'react'
import waves from '../../assets/images/waves.svg'
import Card from './Card'
import { ArrowRight } from "lucide-react";
import CircularBadge from './CircularBadge';
import Bannerend from './Bannerend';
import shape from '../../assets/images/shape.svg'
import global from '../../assets/images/global.svg'
import admin from '../../assets/images/admin.svg'
import tax from '../../assets/images/tax.svg'
const Banner = () => {
  return (
    <div className="pt-[150px]">
      <div className="w-[1306px] h-[750px] bg-secondary mx-auto rounded-2xl p-[60px] overflow-hidden relative">
        <div className="relative">
            <img src={waves} alt="" className="absolute top-[-150px] right-[-458px]" />
        </div>
        <div className="absolute top-[70px] right-[80px]"><Card/></div>
        <div className=" relative z-10">
            <h6 className="font-medium font-lexend text-[29px] text-quaternary mb-4 mt-25"> Streamline Your Finances
            </h6>
            <p className="text-[56px] font-lexend font-semibold text-quaternary leading-13 mb-[32px]">Trusted Financial <br/> Guidance for Your <br/> Business Success.</p>
            <p className="text-[24px] opacity-[0.7] leading-[1.5] text-quaternary mb-[24px] font-lexend">Your Partner in Achieving Financial<br/> Stability and Growth.</p>
        </div>
        <div className="mt-[16px]">
            <button className="flex items-center space-x-2 bg-white rounded-full px-6 py-4 shadow-md text-black font-semibold relative transition-all hover:scale-105">
            <span className="pr-[70px]">Get Started</span>
            <div className="w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center">
            <ArrowRight size={20} className="text-black" />
           </div>
           </button>
        </div>
        <div className="absolute top-[55%] left-[43%]"><CircularBadge/></div>
      </div>
      <div className=" px-5 border-b-[2px] border-b-[#eaeaea]">
      <div className=" w-[1140px] mx-auto py-[48px] flex ">
        <Bannerend image_one={shape} image_two={global} content_one={"Global Accounting"} content_two={"Expert accounting solutions for  businesses worldwide."}/>
        <Bannerend image_one={shape} image_two={tax} content_one={"Tax Services"} content_two={"Optimize your taxes with expert consulting planning."}/>
        <Bannerend image_one={shape} image_two={admin} content_one={"Admin Services"} content_two={"Streamline your operations with our administrative services."}/>
      </div>
      </div>
     
    </div>
  )
}

export default Banner