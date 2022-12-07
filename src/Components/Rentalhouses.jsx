import React from 'react'
import { AiFillStar } from 'react-icons/ai'

function Rentalhouses({title,image,price}) {
    const mes=[
        'jan.',
        'feb.',
        'mar.',
        'apr.',
        'may',
        'june',
        'july',
        'aug',
        'oct',
        'nov',
        'dec',
    ]
  return (
    <div className="">
        <div className="flex justify-between items-start">
            <img src={image} alt="House" className="w-[25rem] md:max-h-[12.5rem] sm:max-h-[20rem] object-cover rounded-[1.3rem]" />
        </div>
        <div className="flex flex-row justify-between font-semibold">
            {title} 
            
            <div className="flex items-center space-x-1">
                
                <AiFillStar /> 
                <p className="font-normal"> 
                { Math.floor(Math.random() * 6).toFixed(1) }
                </p>
            </div>
        </div>
            

            <p className="font-medium text-[#717188] ">
                {Math.floor(Math.random() * 1000)} km away {Math.floor(Math.random() * 31)} - {Math.floor(Math.random() * 31)} of {mes[Math.floor(Math.random() * 11)]}
            </p>

            <p className="font-bold">
                $ {price} <span className="font-normal">night</span>
            </p>
        </div>
    
  )
}
export default Rentalhouses;
