import React from 'react'
import hotel1 from "../../../image/hotel1.jpg"
import hotel2 from "../../../image/hotel2.jpg"
import hotel3 from "../../../image/hotel3.jpg"


export default function RoomsHotel() {
  return (
    <div className='room-single-holtel'>
        <h2 className='title'>Select your room</h2>
        <h3>Appartment</h3>
        <div className='room-box'>

            <div className='appartemnt'>
                            <ul className='appartment-image'>
                <li><img src={hotel1} alt=""/></li>
                <li><img src={hotel2} alt=""/></li>
                <li><img src={hotel3} alt=""/></li>
            </ul>
            <ul className='appartment-facility'>
                <li>Free Wi-Fi</li>
            <li>1 single bed &amp; 1 single bed</li>
            <li>View view</li>
            <li>Room size: 900 m²/9688 ft²</li>
            <li>Smoking allowed</li>
            <li>2 bedrooms</li>
            <li>2 bathrooms</li>
            <li>Kitchenette</li>
            </ul>
            </div>
        <div className='room-benefites'>
           <h3>Benefits</h3>
           <h4>Lowest price available!</h4>
           <p>Your price includes:</p>
           <ul>
               <li>Book without credit card</li>
               <li>Pay at the hotel</li>
               <li>Free Wi-Fi</li>
               <li>Cancellation policy</li>
           </ul>
        </div>
        <div className='room-sleep'>
            <h3>Sleeps</h3>
            <p>This offer includes 2 guests and 1 room</p>
        </div>
        <div className='room-price'>
            <h3>Price per night</h3>
            <p> CHEAPEST PRICE YOU'VE SEEN!</p>
            <h3><small>Rs.</small>2,250</h3>
        </div>
        <div className='room-rooms'>
            <h3>Rooms</h3>
            <p> 1</p>

        </div>
        <div className='room-most-booked'>
            <h3>Most booked</h3>
         <button className='btn btn-primary'>Reserve</button>
         <button className='btn btn-primary add-to-cart'>Add to cart</button>

        </div>
        </div>
    </div>
  )
}
