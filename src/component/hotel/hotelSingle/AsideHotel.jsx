import React from 'react'
import {Link} from "react-router-dom"

export default function AsideHotel() {
  return (
    <div className="aside-hotel">
    <div className="hotel-contact">
        <h3>Contact to hotel</h3>
        <h2><Link to=""><span className="fa fa-phone"></span>+91 XXXXXXX</Link></h2>
        <h2><Link to=""><span className="fa fa-envelope"></span>info@gmail.com</Link></h2>
        <div className="hotel-book-btn">
        <button className="btn btn-primary hotel-book-popup-btn">Book Now</button>
        </div>
        </div>
    </div>
  )
}
