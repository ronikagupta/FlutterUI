import React from 'react'
import hotel1 from "../../../image/hotel1.jpg"
import hotel2 from "../../../image/hotel2.jpg"
import hotel3 from "../../../image/hotel3.jpg"
import hotel4 from "../../../image/hotel4.jpg"
import hotel5 from "../../../image/hotel5.jpg"
import hotel6 from "../../../image/hotel6.jpg"
import hotel7 from "../../../image/hotel7.jpg"


export default function HotelImage() {
  return (
   <section className='hotelimage'>
       <div className='container'>
           <ul>
               <li><img src={hotel1} alt=""/></li>
               <li><img src={hotel2} alt=""/></li>
               <li><img src={hotel3} alt=""/></li>
               <li><img src={hotel4} alt=""/></li>
               <li><img src={hotel5} alt=""/></li>
               <li><img src={hotel6} alt=""/></li>
               <li><img src={hotel7} alt=""/></li>
           </ul>
       </div>
   </section>
  )
}
