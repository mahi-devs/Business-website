import React from 'react'
import { ArrowRight } from "lucide-react";
import phone from '../../assets/images/phone.svg'
import ImageCardStack from './ImageCardStack';

const Experience = () => {
  return (
    <div className="py-[48px]">
        <div className="w-[1140px] mx-auto flex">
            <div>
                <h2 className="text-[#2e895b] font-lexend font-semibold text-[15px] mb-[24px] inline-block ">Who We Are</h2>
                <h1 className=" text-[56px] font-lexend font-semibold mb-[24px] leading-none ">Your Trusted Financial<br/>Partners and Advisors</h1>
                <p className="pr-[48px] tracking-[-0.24px] leading-[1.8] text-[16px] font-lexend text-tertiary mb-[20px]">We provide comprehensive accounting and financial services<br/> tailored to meet the needs of businesses and individuals alike.<br/>  We are here to help you navigate the complexities of the<br/>  financial world.</p>
                <div className="flex mb-[24px]">
                    <span className="text-[80px] tracking-[-3.5px] leading-none font-bold text-quaternary">30+</span>
                    <h6 className="text-[29px] text-tertiary 
                    leading-[-1px] pl-[5px] mt-[35px]">Years of Experience</h6>
                </div>
                <div className="pt-[16px] flex gap-x-[16px]">
                <button className="flex items-center space-x-2 bg-black rounded-full px-6 py-4 shadow-md text-white font-semibold relative transition-all hover:scale-105">
                    <span className="pr-[25px]">Learn More</span>
                    <div className="w-8 h-8 bg-black shadow-md rounded-full flex items-center justify-center">
                        <ArrowRight size={20} className="text-white" />
                   </div>
                </button> 
                <div className="flex ">
                    <div className="size-[60px] rounded-full bg-secondary flex justify-center items-center">
                        <img src={phone} alt="" />
                    </div>
                    <div>
                        <p className="text-[14px] text-secondary font-bold font-lexend uppercase">Call us</p>
                        <span className="font-semibold text-[24px] text-quaternary">800 123 4567</span>
                    </div>

                </div>
                </div>
            </div>
            <div>
              <ImageCardStack/>
               
            </div>
        </div>
    </div>
  )
}

export default Experience