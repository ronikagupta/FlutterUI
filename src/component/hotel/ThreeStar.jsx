import React from "react";
import {Link} from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Slider1 from "../../image/holiday-1.jpg";
import Slider2 from "../../image/holiday-2.jpg";
import Slider3 from "../../image/holiday-3.jpg";
import Slider4 from "../../image/holiday-4.jpg";

const ThreeStar = () => {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <div class="section best-offer">
    <h2 class="title left">3 Star <span>Hotels</span></h2>
            <ul class="">
        <Slider {...settings}>
        <li>
        <Link to="/hotel-palace">
        <div class="inner-content">
            <div class="offer-image">
                <img src={Slider1}/>
            </div>
            <div class="offer-content">
                <div class="top"><h2>Dubai</h2><h4>₹ 51,000</h4></div>
                <div class="bottom"><p>Packages </p><p>Starting Price</p></div>
            </div>
            </div>
            </Link>
            </li>
             <li>
             <Link to="/hotel-palace">
        <div class="inner-content">
            <div class="offer-image">
            <img src={Slider2}/>

            </div>
            <div class="offer-content">
                <div class="top"><h2>Paris</h2><h4>₹ 31,000</h4></div>
                <div class="bottom"><p>Packages </p><p>Starting Price</p></div>
            </div>
            </div>
            </Link>
            </li>
             <li>
             <Link to="/hotel-palace">
        <div class="inner-content">
            <div class="offer-image">
            <img src={Slider3}/>

            </div>
            <div class="offer-content">
                <div class="top"><h2>Maldives  </h2><h4>₹ 41,000</h4></div>
                <div class="bottom"><p>Packages </p><p>Starting Price</p></div>
            </div>
            </div>
            </Link>
            </li>
             <li>
             <Link to="/hotel-palace">
        <div class="inner-content">
            <div class="offer-image">
            <img src={Slider4}/>

            </div>
            <div class="offer-content">
                <div class="top"><h2>Thailand</h2><h4>₹ 11,000</h4></div>
                <div class="bottom"><p>Packages </p><p>Starting Price</p></div>
            </div>
            </div>
            </Link>
            </li>
<li>
<Link to="/hotel-palace">
<div class="inner-content">
    <div class="offer-image">
    <img src={Slider4}/>

    </div>
    <div class="offer-content">
        <div class="top"><h2>Thailand</h2><h4>₹ 11,000</h4></div>
        <div class="bottom"><p>Packages </p><p>Starting Price</p></div>
    </div>
    </div>
    </Link>
    </li>
            </Slider>
        </ul>
    </div>

  );
};

export default ThreeStar;
