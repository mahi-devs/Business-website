import React from 'react'
import { Phone, Mail, Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';
import logo from '../../assets/images/logo.png'
const Footer = () => {
    return (
        <div className="min-h-screen bg-white">
          {/* Header */}
          <header className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={logo} className='w-[131px] h-[27px]' alt="" />
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="bg-[#2e895b] p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">CALL US</p>
                  <p className="font-semibold">800 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="bg-[#2e895b] p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">SEND E-MAIL</p>
                  <p className="font-semibold">you@domain.com</p>
                </div>
              </div>
            </div>
          </header>
    
          {/* Main Content */}
          <main className="container mx-auto px-4 py-16 grid grid-cols-4 gap-8">
            {/* Porto Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Porto</h2>
              <p className="text-gray-500">
                Porto - Expert Accounting Solutions Tailored to Your Needs—Ensuring Accuracy, Compliance, and Financial Peace of Mind.
              </p>
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">30+</span>
                  <span className="text-xl italic">Years of Experience</span>
                </div>
                <div className="flex gap-4">
                  <Instagram className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
                  <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
                  <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
                </div>
              </div>
            </div>
    
            {/* About Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">About</h2>
              <nav className="space-y-3">
                {['Home', 'Services', 'About', 'Process', 'Projects', 'News', 'Contact'].map((item) => (
                  <a key={item} href="#" className="block text-gray-500 hover:text-gray-900">
                    {item}
                  </a>
                ))}
              </nav>
            </div>
    
            {/* Services Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Services</h2>
              <nav className="space-y-3">
                {[
                  'Accounting',
                  'Tax Planning',
                  'Business Advisory',
                  'Payroll Management',
                  'Global Accounting',
                  'Admin Services'
                ].map((service) => (
                  <a key={service} href="#" className="block text-gray-500 hover:text-gray-900">
                    {service}
                  </a>
                ))}
              </nav>
            </div>
    
            {/* Newsletter Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Newsletter</h2>
              <p className="text-gray-500 mb-6">
                Want to receive news and updates? Enter your email.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button className="flex items-center gap-2 px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                  Submit
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </main>
    
          {/* Footer */}
          <footer className="border-t border-gray-200 mt-16">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
              <p className="text-gray-500">
                © 2025 Porto is Proudly Powered by{' '}
                <a href="#" className="text-emerald-600 hover:text-emerald-700">
                  Okler
                </a>
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Terms of Use
                </a>
              </div>
            </div>
          </footer>
        </div>
      );
}

export default Footer