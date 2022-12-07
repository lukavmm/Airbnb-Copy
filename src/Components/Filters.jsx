import React from 'react'
import Filtericon from '../Components/Filtericon'
import { GiSailboat, GiUfo } from 'react-icons/gi'
import { ImKey, ImFire } from 'react-icons/im'
import { BsFillTreeFill } from 'react-icons/bs'

function Filters(){
    const sorting = [
        {title:"New",icon:<ImKey/> },
        {title:"Trending",icon:<ImFire/> },
        {title:"Boat",icon:<GiSailboat/> },
        {title:"Forest",icon:<BsFillTreeFill/> },
        {title:"OMG!",icon:<GiUfo/> }
    ]
    return(
        <div className="sm:mx-6 md:mx-10 lg:mx-12">
            <div className="flex justify-start gap-3 sm:gap-4 mt-4 px-3">
                { 
                sorting.map((obj) => <Filtericon title={obj.title} key={obj.title} icon={obj.icon} />) 
                }
            </div>
        </div>
    )
}
export default Filters;
