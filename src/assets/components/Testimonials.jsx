import React from 'react';
import { Star, Users } from 'lucide-react';
import Starrate from './Starrate';


 const Testimonials = ({ testimonials }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className=" flex justify-between">
          <div className="">
            <div className="inline-flex mb-[20px] items-center rounded-full bg-green-50 px-[8px] py-[4px]">
              <span className="text-[15px] font-semibold font-lexend text-secondary">LOVED BY OUR CLIENTS</span>
              <span className="ml-2 text-red-500">❤️</span>
            </div>

            <h2 className="text-[56px] font-semibold text-quaternary font-lexend mb-[24px]">
              What Our Clients Say
            </h2>

            <p className="text-base text-tertiary font-lexend mb-[20px] w-[546px]">
              Our commitment to delivering exceptional accounting services is reflected in the feedback we receive from our valued clients.
            </p>

            <div className="flex items-center gap-3 text-gray-900">
              <Users className="text-[22px] font-lexend text-green-600" />
              <span className="font-semibold text-[22px] font-lexend">Join Us</span>
              <span className="text-quaternary text-[22px] font-lexend">|</span>
              <span>1000+ clients globally!</span>
            </div>

            <div className='mt-[24px]'>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors duration-200"
              >
                Become a Client
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          <div className="">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 w-[546px] h-[332px] mb-[30px]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-base text-quaternary font-lexend">
                      {testimonial.name}
                    </h3>
                    <p className="text-tertiary text-[12px] font-semibold font-lexend">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-tertiary text-base font-lexend mb-4 ">
                  {testimonial.content}
                </p>
                <Starrate />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;