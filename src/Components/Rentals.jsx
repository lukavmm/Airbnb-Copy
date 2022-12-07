import React from 'react'
import Rentalhouses from './Rentalhouses';
import house1 from '../assets/house1.jpg';
import house2 from '../assets/house2.jpg';
import house3 from '../assets/house3.jpg';
import house4 from '../assets/house4.jpg';
import house5 from '../assets/house5.jpg';
import house6 from '../assets/house6.jpg';
import house7 from '../assets/house7.jpg';
import house8 from '../assets/house8.jpg';
import house9 from '../assets/house9.jpg';
import house10 from '../assets/house10.jpg';
import house11 from '../assets/house11.jpg';
import house12 from '../assets/house12.jpg';


function Rentals() {
    const rentals = [
        {title: "Cape Town, South Africa", image:house1, price:"1,541"},
        {title: "Cape Town, South Africa", image:house2, price:"1,541"},
        {title: "Cape Town, South Africa", image:house3, price:"1,541"},
        {title: "Cape Town, South Africa", image:house4, price:"1,541"},
        {title: "Cape Town, South Africa", image:house5, price:"1,541"},
        {title: "Cape Town, South Africa", image:house6, price:"1,541"},
        {title: "Cape Town, South Africa", image:house7, price:"1,541"},
        {title: "Cape Town, South Africa", image:house8, price:"1,541"},
        {title: "Cape Town, South Africa", image:house9, price:"1,541"},
        {title: "Cape Town, South Africa", image:house10, price:"1,541"},
        {title: "Cape Town, South Africa", image:house11, price:"1,541"},
        {title: "Cape Town, South Africa", image:house12, price:"1,541"},
    ];

  return (
    <div className="pt-3">
        <div className="ml-[2rem] grid grid-cols-1 gap-4 md:grid-cols-2 md:ml-0 lg:grid-cols-4 lg:ml-0">
            { rentals.map((rental) => 
            <Rentalhouses key={rental.image} title={rental.title} image={rental.image} price={rental.price} /> ) }
        </div>
    </div>
  )
}
export default Rentals;
