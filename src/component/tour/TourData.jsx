import React from 'react'
import {Link} from "react-router-dom"
import offer1 from "../../image/offer-1.jpg"
import offer2 from "../../image/offer-2.jpg"
import offer3 from "../../image/offer-3.jpg"
import offer4 from "../../image/offer-4.jpg"

export default function TourData() {
  return (
    <div className="right-filter-content">

    <section className="best-offer hotel-booking">

            <ul className="filter-hotel-search">
            <li>
            <div className="inner-content">
               <Link to="/tour-product">
                <div className="offer-image">
                    <img src={offer1} alt=""/>
                </div>
               <div className="offer-content">
                    <div className="top"><h2>Dubai</h2><h4>₹ 51,000</h4></div>
                    <div className="bottom"><p>3 Nights/4 Days </p><p>Starting Price</p></div>
                </div>
                   </Link>
                </div>
                </li>
                 <li>
            <div className="inner-content">
               <Link to="/tour-product">
                <div className="offer-image">
                <img src={offer2} alt=""/>

                </div>
               <div className="offer-content">
                    <div className="top"><h2>Dubai</h2><h4>₹ 51,000</h4></div>
                    <div className="bottom"><p>3 Nights/4 Days </p><p>Starting Price</p></div>
                </div>
                   </Link>
                </div>
                </li>
                 <li>
            <div className="inner-content">
               <Link to="/tour-product">
                <div className="offer-image">
                <img src={offer3} alt=""/>

                </div>
               <div className="offer-content">
                    <div className="top"><h2>Dubai</h2><h4>₹ 51,000</h4></div>
                    <div className="bottom"><p>3 Nights/4 Days </p><p>Starting Price</p></div>
                </div>
                   </Link>
                </div>
                </li>
                 <li>
            <div className="inner-content">
               <Link to="/tour-product">
                <div className="offer-image">
                <img src={offer4} alt=""/>

                </div>
               <div className="offer-content">
                    <div className="top"><h2>Dubai</h2><h4>₹ 51,000</h4></div>
                    <div className="bottom"><p>3 Nights/4 Days </p><p>Starting Price</p></div>
                </div>
                   </Link>
                </div>
                </li>



            </ul>

        </section>

        </div>
  )
}
