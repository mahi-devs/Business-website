import React from 'react'
import SplitCard from './SplitCard'
import sevice1 from '../../assets/images/service-1.jpg'
import sevice2 from '../../assets/images/service-2.jpg'
import sevice3 from '../../assets/images/service-3.jpg'   
import sevice4 from '../../assets/images/service-4.jpg'

const Service = () => {
  return (
    <div className="w-[1306px] py-[72px] bg-[#1f2f28] mx-auto rounded-2xl">
       <div className='w-[1140px] mx-auto '>
          <div className='rounded-3xl bg-quaternary py-[8px] px-[24px] inline-block mb-[24px]'>
            <h5 className='text-[15px] font-lexend font-semibold uppercase text-white'>Our Services</h5>
          </div>
          <h1 className='font-lexend font-semibold leading-none text-white text-[56px] mb-[8px]'>Accounting Services</h1>
          <p className='text-white opacity-70 text-base mb-[20px] leading-[1.8]'>Full-service accounting to drive your financial success.</p>
          <div className='flex gap-x-[46px]'>
          <SplitCard image_three={sevice1} title={"Accounting"} content={"Comprehensive accounting services tailored to your business needs for accurate financial."}/>
          <SplitCard image_three={sevice2} title={"Tax Planning"} content={"Expert tax planning to maximize savings and ensure compliance with tax regulations."}/>
          <SplitCard image_three={sevice3} title={"Business Advisory"} content={"Strategic business advisory to drive growth and enhance financial performance."}/>
          <SplitCard image_three={sevice4} title={"Payroll Management"} content={"Efficient payroll management to ensure timely and accurate employee compensation."}/>
          </div>  
        </div>
       
    </div>
  )
}

export default Service  