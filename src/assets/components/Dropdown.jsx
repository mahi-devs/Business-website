import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
const Dropdown = () => {
  return(
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-[0.1px] rounded-md   shadow-xs ring-inset font-lexend border-none font-medium text-tiny  hover:text-secondary cursor-pointer ">
              Services
              <ChevronDownIcon aria-hidden="true" className="w-[20px] h-[20px]  text-black-400" />
            </MenuButton>
          </div>
    
          <MenuItems
            transition
            className="absolute right-[-90px] z-10 mt-2 w-[200px] origin-top-right   rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in ml-10"
          >
            <div className="">
              <MenuItem>
                <a
                  href="#"
                  className="block px-[22px] py-[12px] bg-transparent transition duration-300 hover:translate-x-2 hover:text-secondary font-lexend font-normal text-sm text-tertiary"
                >
                  Overview
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-[22px] py-[12px] bg-transparent transition duration-300 hover:translate-x-2 hover:text-secondary font-lexend font-normal text-sm text-tertiary"
                >
                  Accounting
                </a>
              </MenuItem>
            </div>
            <div className="">
              <MenuItem>
                <a
                  href="#"
                  className="block px-[22px] py-[12px] bg-transparent transition duration-300 hover:translate-x-2 hover:text-secondary font-lexend font-normal text-sm text-tertiary"
                >
                 Tax Planning
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-[22px] py-[12px] bg-transparent transition duration-300 hover:translate-x-2 hover:text-secondary font-lexend font-normal text-sm text-tertiary"
                >
                  Business Advisory
                </a>
              </MenuItem>
            </div>
            <div className="">
              <MenuItem>
                <a
                  href="#"
                  className="block px-[22px] py-[12px] bg-transparent transition duration-300 hover:translate-x-2 hover:text-secondary font-lexend font-normal text-sm text-tertiary"
                >
                  Payroll Management
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-[22px] py-[12px] bg-transparent transition duration-300 hover:translate-x-2 hover:text-secondary font-lexend font-normal text-sm text-tertiary"
                >
                    Global Accounting
                </a>
              </MenuItem>
            </div>
            <div className="">
              <MenuItem>
                <a
                  href="#"
                  className="block px-[22px] py-[12px] bg-transparent transition duration-300 hover:translate-x-2 hover:text-secondary font-lexend font-normal text-sm text-tertiary"
                >
                  Admin Servics
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
    
  )
}

export default Dropdown