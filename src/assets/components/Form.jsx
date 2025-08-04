import React from "react";
import { FaPhoneAlt, FaAt, FaArrowRight } from "react-icons/fa";

const Form = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
      {/* Left Section */}
      <div>
        <span className="inline-block bg-green-100 text-secondary font-semibold text-base font-lexend px-[8px] py-[4px] rounded-full mb-4">
          FREE QUOTE
        </span>
        <h2 className="text-[56px] font-semibold mb-[32px] text-quaternary font-lexend leading-none ">
          Get a Free Quote <br /> Calculation
        </h2>
        <p className="text-tertiary text-base font-lexend leading-[1.8] tracking-[-0.24px] w-[510px] mb-[20px]">
          We understand that every business is unique, and so are its financial
          requirements. That’s why we offer a free, no-obligation quote
          calculation to help you understand how much you can save by partnering
          with us.
        </p>

        <div className="flex items-center gap-4 mb-6 ">
          <button className="bg-white border border-gray-200 px-4 py-2 rounded-full text-[14px] font-lexend text-quaternary font-semibold uppercase shadow-sm">
            QUICK REPLY
          </button>
          <span className="text-quaternary font-lexend text-[15.4px]">Usually in 24 hours in working days.</span>
        </div>

        <div className="flex items-center gap-8 pt-[24px]">
          <div className="flex items-center gap-4">
            <div className="bg-[#2e895b] text-white p-5 size-[60px] rounded-full">
              <FaPhoneAlt className="size-[20px]"/>
            </div>
            <div>
              <p className="text-[#2e895b] font-bold text-sm font-lexend">CALL US</p>
              <p className="text-[24px] font-semibold text-quaternary">800 123 4567</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-[#2e895b] text-white p-5 size-[60px] rounded-full">
              <FaAt  className="size-[20px]"/>
            </div>
            <div>
              <p className="text-[#2e895b] font-bold text-sm font-lexend">SEND E-MAIL</p>
              <p className="text-[24px] font-semibold text-quaternary">you@domain.com</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-tertiary text-[15px] mt-8">
          *Submitting your information, you consent to the terms of this{' '}
          <a href="#" className="text-green-600 text-[15px] underline">
            Privacy Notice.
          </a>
        </p>
      </div>

      {/* Right Section */}
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block  font-bold text-quaternary text-[14.4px] font-lexend mb-1">YOUR NAME *</label>
          <input
            type="text"
            className="w-full border rounded-md p-3 placeholder-gray-400"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block  font-bold text-quaternary text-[14.4px] font-lexend mb-1">EMAIL ADDRESS</label>
          <input
            type="email"
            className="w-full border rounded-md p-3 placeholder-gray-400"
            placeholder="Enter your e-mail address"
          />
        </div>
        <div>
          <label className="block  font-bold text-quaternary text-[14.4px] font-lexend mb-1">PHONE NUMBER</label>
          <input
            type="tel"
            className="w-full border rounded-md p-3 placeholder-gray-400"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label className="block  font-bold text-quaternary text-[14.4px] font-lexend mb-1">COMPANY NAME</label>
          <input
            type="text"
            className="w-full border rounded-md p-3 placeholder-gray-400"
            placeholder="Enter your company name"
          />
        </div>
        <div>
          <label className="block  font-bold text-quaternary text-[14.4px] font-lexend mb-1">INDUSTRY</label>
          <input
            type="text"
            className="w-full border rounded-md p-3 placeholder-gray-400"
            placeholder="Enter your industry name"
          />
        </div>
        <div>
          <label className="block  font-bold text-quaternary text-[14.4px] font-lexend mb-1">ANNUAL REVENUE</label>
          <input
            type="text"
            className="w-full border rounded-md p-3 placeholder-gray-400"
            placeholder="Enter your annual revenue"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block  font-bold text-quaternary text-[14.4px] font-lexend mb-1">ADDITIONAL INFORMATION</label>
          <textarea
            rows="5"
            className="w-[600px] h-[227px] border rounded-md p-3 placeholder-gray-400"
            placeholder="Enter Additional Information or Questions"
          ></textarea>
        </div>
        <button className="w-[148px] bg-black text-white text-sm font-lexend font-medium py-3  rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition">
          Submit <FaArrowRight />
        </button>
      </form>
    </div>
  );
};

export default Form;
