import React from 'react'
import bg from '../../assets/images/bg.jpg'
const Strategies = () => {
  return (
    <div className='w-[1306px] h-[760px] rounded-2xl mx-auto my-[100px] '>
        <div className='object-cover w-[1306px] h-[760px] bg-cover bg-no-repeat bg-center rounded-2xl' style={{backgroundImage:`url(${bg})`}} >
             <div className='w-[1140px]  mx-auto  pt-[20%]'>
                <div className='flex justify-items-center'>
                    <h1 className='font-normal font-lexend text-[32px] text-white mx-auto inline-block'> Outstanding Outcomes</h1>
                </div>
                <div className='flex justify-items-center'>
                   <p className='font-semibold font-lexend text-[56px] text-white mx-auto mb-[32px] leading-none'>
                   We Transform Financial<br/> Strategies into Tangible <br/><span className='flex justify-center items-center '>Success!</span>
                   </p>
                </div>
            
             </div>
        </div>
    </div>
  )
}

export default Strategies