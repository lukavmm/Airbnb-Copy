import React from 'react'
import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs'
import { FaSnapchatGhost } from 'react-icons/fa'

function Footer() {
  return (
    <div className="bg-white border-t-2 shadow-t shadow-gray-400 w-full h-10 bottom-0 sticky 
        flex items-center justify-center gap-6">
        <div className="hover:text-black duration-100 ease-out text-[30px] text-gray-600"><BsTwitter /></div>
        <div className="hover:text-black duration-100 ease-out text-[30px] text-gray-600"><BsInstagram /></div>
        <div className="hover:text-black duration-100 ease-out text-[30px] text-gray-600"><BsFacebook /></div>
        <div className="hover:text-black duration-100 ease-out text-[30px] text-gray-600"><FaSnapchatGhost /></div>
    </div>
    
  )
}export default Footer;
