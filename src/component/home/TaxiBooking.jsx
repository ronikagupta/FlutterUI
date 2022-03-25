import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Slider1 from "../../image/taxi-1.png";
import Slider2 from "../../image/taxi-2.png";
import Slider3 from "../../image/taxi-3.png";
import Slider4 from "../../image/taxi-4.png";

export default function TaxiBooking() {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
  return (
    <section class="section best-offer">
    <div class="container">
        <h2 class="title left">Taxi <span>Bookings</span></h2>
        <ul class="">
        <Slider {...settings}>
        <li>
        <div class="inner-content">
            <div class="offer-image">
                           <img src={Slider1}/>

            </div>
            <div class="offer-content">
                <div class="top"><h2>Chennai Flights </h2><h4>₹ 51,000</h4></div>
                <div class="bottom"><p>Via - Delhi, Mumbai, Coimbatore, Madurai </p></div>
            </div>
            </div>
            </li>
             <li>
        <div class="inner-content">
            <div class="offer-image">
            <img src={Slider2}/>

            </div>
            <div class="offer-content">
                <div class="top"><h2>Goa Flights </h2><h4>₹ 31,000</h4></div>
                <div class="bottom"><p>Via - Delhi , Mumbai, Bangalore, Ahmedabad </p></div>
            </div>
            </div>
            </li>
             <li>
        <div class="inner-content">
            <div class="offer-image">
            <img src={Slider3}/>

            </div>
            <div class="offer-content">
                <div class="top"><h2>Mumbai Flights   </h2><h4>₹ 41,000</h4></div>
                <div class="bottom"><p>Via - Delhi, Bangalore, Chennai, Ahmedabad </p></div>
            </div>
            </div>
            </li>
             <li>
        <div class="inner-content">
            <div class="offer-image">
            <img src={Slider4}/>
            </div>
            <div class="offer-content">
                <div class="top"><h2>Hyderabad Flights </h2><h4>₹ 11,000</h4></div>
                <div class="bottom"><p>Via - Chennai, Mumbai, Bangalore, Delhi </p></div>
            </div>
            </div>
            </li>
            <li>
        <div class="inner-content">
            <div class="offer-image">
            <img src={Slider4}/>
            </div>
            <div class="offer-content">
                <div class="top"><h2>Hyderabad Flights </h2><h4>₹ 11,000</h4></div>
                <div class="bottom"><p>Via - Chennai, Mumbai, Bangalore, Delhi </p></div>
            </div>
            </div>
            </li>
            </Slider>
        </ul>
    </div>
    </section>
      )
}
