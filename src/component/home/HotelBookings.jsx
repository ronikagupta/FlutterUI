import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Slider1 from "../../image/holiday-1.jpg";
import Slider2 from "../../image/holiday-2.jpg";
import Slider3 from "../../image/holiday-3.jpg";
import Slider4 from "../../image/holiday-4.jpg";

const HotelBookings = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <section class="section best-offer hotel-booking">
      <div class="container">
        <h2 class="title left">
          Hotel <span>Bookings</span>
        </h2>
        <ul class="">
          <Slider {...settings}>
            <li>
              <Link to="/hotel-palace">
                <div class="inner-content">
                  <div class="offer-image">
                    <img src={Slider1} />
                  </div>
                  <div class="offer-content">
                    <div class="top">
                      <h2>Hills Town</h2>
                      <h4>₹ 51,000</h4>
                    </div>
                    <div class="bottom">
                      <ul>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                      </ul>
                      <p>
                        <i class="fa fa-map-marker"></i> New Delhi
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/hotel-palace">
                <div class="inner-content">
                  <div class="offer-image">
                    <img src={Slider2} />
                  </div>
                  <div class="offer-content">
                    <div class="top">
                      <h2>Croma Top</h2>
                      <h4>₹ 31,000</h4>
                    </div>
                    <div class="bottom">
                      <ul>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                      </ul>
                      <p>
                        <i class="fa fa-map-marker"></i> Kolkata
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/hotel-palace">
                <div class="inner-content">
                  <div class="offer-image">
                    <img src={Slider3} />
                  </div>
                  <div class="offer-content">
                    <div class="top">
                      <h2>Delgem South</h2>
                      <h4>₹ 61,000</h4>
                    </div>
                    <div class="bottom">
                      <ul>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                      </ul>
                      <p>
                        <i class="fa fa-map-marker"></i> Sri Lanka
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/hotel-palace">
                <div class="inner-content">
                  <div class="offer-image">
                    <img src={Slider4} />
                  </div>
                  <div class="offer-content">
                    <div class="top">
                      <h2>Dubai</h2>
                      <h4>₹ 51,000</h4>
                    </div>
                    <div class="bottom">
                      <ul>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                      </ul>
                      <p>
                        <i class="fa fa-map-marker"></i> New Delhi
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/hotel-palace">
                <div class="inner-content">
                  <div class="offer-image">
                    <img src={Slider4} />
                  </div>
                  <div class="offer-content">
                    <div class="top">
                      <h2>Dubai</h2>
                      <h4>₹ 51,000</h4>
                    </div>
                    <div class="bottom">
                      <ul>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                      </ul>
                      <p>
                        <i class="fa fa-map-marker"></i> New Delhi
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </Slider>
        </ul>
      </div>
    </section>
  );
};

export default HotelBookings;
