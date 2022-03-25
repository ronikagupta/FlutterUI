import React from "react";
import {Link} from "react-router-dom";

import Slider1 from "../../image/holiday-1.jpg";
import Slider2 from "../../image/holiday-2.jpg";
import Slider3 from "../../image/holiday-3.jpg";
import Slider4 from "../../image/holiday-4.jpg";

const HotelSearch = () => {

  return (
    <div class="best-offer">

        <ul class="filter-hotel-search">

        <li>
            <Link to="/hotel-palace">
        <div class="inner-content">
            <div class="offer-image">
                <img src={Slider1}/>
            </div>
            <div class="offer-content">
                <div class="top"><h2>Hills Town</h2><h4>₹ 51,000</h4></div>
  <div class="bottom"><ul>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    </ul>
                    <p><i class="fa fa-map-marker"></i> New Delhi</p></div>            </div>
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
                <div class="top"><h2>Croma Top</h2><h4>₹ 31,000</h4></div>
  <div class="bottom"><ul>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    </ul>
                    <p><i class="fa fa-map-marker"></i> New Delhi</p></div>            </div>
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
                <div class="top"><h2>Delgem South  </h2><h4>₹ 41,000</h4></div>
  <div class="bottom"><ul>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    </ul>
                    <p><i class="fa fa-map-marker"></i> New Delhi</p></div>            </div>
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
                <div class="top"><h2>Hills Town</h2><h4>₹ 11,000</h4></div>
  <div class="bottom"><ul>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    </ul>
                    <p><i class="fa fa-map-marker"></i> New Delhi</p></div>            </div>
            </div>
            </Link>
            </li>
            <li>

<div class="inner-content">
    <div class="offer-image">
    <img src={Slider4}/>

    </div>
    <div class="offer-content">
        <div class="top"><h2>Delgem South</h2><h4>₹ 11,000</h4></div>
        <div class="bottom"><p>Packages </p><p>Starting Price</p></div>
    </div>
    </div>
    </li>

        </ul>
    </div>

  );
};

export default HotelSearch;
