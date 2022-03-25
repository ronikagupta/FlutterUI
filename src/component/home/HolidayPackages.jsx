import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Slider1 from "../../image/s1.png";
import Slider2 from "../../image/s2.png";
import Slider3 from "../../image/s3.png";
import Slider4 from "../../image/s4.png";

const HolidayPackages = () => {
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
        <h2 class="title left">Holiday <span>Packages</span></h2>
        <ul class="">
        <Slider {...settings}>
        <li>
        <div class="inner-content">
            <div class="offer-image">
                <img src={Slider1}/>
            </div>
            <div class="offer-content">
                <div class="top"><h2>Dubai</h2><h4>₹ 51,000</h4></div>
                <div class="bottom"><p>Packages </p><p>Starting Price</p></div>
            </div>
            </div>
            </li>
             <li>
        <div class="inner-content">
            <div class="offer-image">
            <img src={Slider2}/>

            </div>
            <div class="offer-content">
                <div class="top"><h2>Paris</h2><h4>₹ 31,000</h4></div>
                <div class="bottom"><p>Packages </p><p>Starting Price</p></div>
            </div>
            </div>
            </li>
             <li>
        <div class="inner-content">
            <div class="offer-image">
            <img src={Slider3}/>

            </div>
            <div class="offer-content">
                <div class="top"><h2>Maldives  </h2><h4>₹ 41,000</h4></div>
                <div class="bottom"><p>Packages </p><p>Starting Price</p></div>
            </div>
            </div>
            </li>
             <li>

        <div class="inner-content">
            <div class="offer-image">
            <img src={Slider4}/>

            </div>
            <div class="offer-content">
                <div class="top"><h2>Thailand</h2><h4>₹ 11,000</h4></div>
                <div class="bottom"><p>Packages </p><p>Starting Price</p></div>
            </div>
            </div>
            </li>
            <li>

<div class="inner-content">
    <div class="offer-image">
    <img src={Slider4}/>

    </div>
    <div class="offer-content">
        <div class="top"><h2>Thailand</h2><h4>₹ 11,000</h4></div>
        <div class="bottom"><p>Packages </p><p>Starting Price</p></div>
    </div>
    </div>
    </li>
            </Slider>
        </ul>
    </div>
    </section>
  );
};

export default HolidayPackages;
