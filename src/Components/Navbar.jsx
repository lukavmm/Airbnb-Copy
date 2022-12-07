import React from 'react';
import logo from '../assets/logo.png'
import { TbWorld } from 'react-icons/tb'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi'

function Navbar() {
  return(
    <div className="flex top-0 sticky z-50 bg-white/[95%] justify-between items-center border-b h-16  ">
        {/* left */}
        <div className=" h-auto flex">
            <img src={logo} alt="logo" className="object-cover h-8 m-2" />
        </div>

        {/* middle */}
        <div className="hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full">
            <input type="search" 
                placeholder=""
                className="py-2 w-[20rem] rounded-full outline-0"
                />
                <div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600">
                    <button className="w-full">Place</button>
                    <button className="border-l border-x px-6 w-full">Time</button>
                    <button className="w-full text-gray-600/60 pl-1 text-sm">Group Size</button>
                </div>
                <div className="bg-[#ff5a60] rounded-full p-2 mr-2">
                    <FiSearch className="text-white w-full" />
                </div>
        </div>

        {/* right */}
        <div className="flex items-center pr-3 font-semibold text-gray-600">
            <p className="text-[17px]">Rent House</p>

            <div className="flex items-center mx-8 gap-1">
                <TbWorld className="" />
                <div>En</div>
            </div>
            

            <div
                className="flex items-center border px-3 py-2 gap-3 rounded-full bg-[#ff5a60] 
                text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#ff6f74] duration-100 ease-out"  
            >
                
                <FiMenu className="text-[22px]" />
                <BiUser className=" text-[22px]" />
            </div>
        </div>

    </div>
  )
}

export default Navbar;