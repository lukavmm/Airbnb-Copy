import React from 'react'

function Filtericon({icon, title}){
  return (
    <div 
        className="mb-4 gap-2 py-1 px-3 sm:px-4 text-[#6B6B6B]
        hover:bg-white hover:text-[#000000] hover:border-b-2  duration-200 ease-out text-[14px] 
        sm:text-[16px]"
    >
        <div className="flex justify-center items-center">
            {icon}
        </div>
        {title}
        </div>
    
  )
}
export default Filtericon;
