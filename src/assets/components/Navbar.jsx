import React from 'react'
import logo from '../../assets/images/logo.png'
import phone from '../../assets/images/phone.svg'
import Dropdown from './Dropdown'
const Navbar = () => {
  return (
    
      <nav className="fixed top-0 left-0 w-full bg-white  z-50">
      <div className="w-full mx-auto px-[48px] py-[50px] flex items-center justify-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="h-[27px] w-[131px] "
          />
          
        </div>

        {/* Menu */}
        <ul className=" flex pl-[305px] pr-[115px] gap-x-[20px]">
          <li><a href="#home" className="hover:text-secondary transition  font-lexend font-medium text-tiny text-primary tracking-[-0.6px] ">Home</a></li>
          <li><a href="#services" className=" font-lexend font-medium text-tiny transition tracking-[-0.6px] "><Dropdown/></a></li>
          <li><a href="#about" className=" font-lexend font-medium text-tiny hover:text-secondary transition tracking-[-0.6px] ">About</a></li>
          <li><a href="#team" className=" font-lexend font-medium text-tiny hover:text-secondary transition tracking-[-0.6px] ">Process</a></li>
          <li><a href="#pricing" className=" font-lexend font-medium text-tiny hover:text-secondary transition tracking-[-0.6px]">Project</a></li>
          <li><a href="#blog" className=" font-lexend font-medium text-tiny hover:text-secondary transition tracking-[-0.6px]">News</a></li>
          <li><a href="#faq" className=" font-lexend font-medium text-tiny hover:text-secondary transition tracking-[-0.6px]">Contact</a></li>
        </ul>

        {/* Button */}
        <div className=" flex gap-x-[20px]">
          <a href="#" className="flex"><img src={phone} alt="phone"/> <div className="w-[130px] mt-[8px] text-[19px] font-semibold">800 123 4567</div></a>
          <a href="#" className="rounded-[35px] py-[8px] px-[16px] bg-black text-white font-lexend font-medium text-[15px]">Get Free Quote   <span className='text-white font-black text-[15px]'>&#10095;</span></a>
          
          
        </div>  
      </div>
    </nav>
  
    
  )
}

export default Navbar