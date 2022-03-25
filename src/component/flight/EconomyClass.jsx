
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Slider1 from "../../image/e1.png";
import Slider2 from "../../image/e2.png";
import Slider3 from "../../image/e3.png";
import Slider4 from "../../image/e4.png";


const EconomyClass = () => {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
  return (
    <section className="section best-offer hotel-booking">
    <div className="container">
        <h2 className="title left">Economy <span>Class</span></h2>
        <ul className="">
        <Slider {...settings}>
        <li>
        <div className="inner-content">
            <div className="offer-image">
            <img src={Slider1}/>
            </div>
            <div className="offer-content">
                <div className="top"><h2>Air India</h2><h4>₹ 51,000</h4></div>
                <div className="bottom"><ul>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    </ul>
                    <p><i className="fa fa-map-marker"></i> New Delhi</p></div>
            </div>
            </div>
            </li>
             <li>
        <div className="inner-content">
            <div className="offer-image">
            <img src={Slider2}/>
            </div>
            <div className="offer-content">
                <div className="top"><h2>Indigo</h2><h4>₹ 31,000</h4></div>
                <div className="bottom"><ul>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    </ul>
                    <p><i className="fa fa-map-marker"></i> Kolkata</p></div>
            </div>
            </div>
            </li>
             <li>
        <div className="inner-content">
            <div className="offer-image">
            <img src={Slider3}/>
            </div>
            <div className="offer-content">
                <div className="top"><h2>Air India</h2><h4>₹ 61,000</h4></div>
                <div className="bottom"><ul>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    </ul>
                    <p><i className="fa fa-map-marker"></i> Sri Lanka</p></div>
            </div>
            </div>
            </li>
             <li>
        <div className="inner-content">
            <div className="offer-image">
            <img src={Slider4}/>
            </div>
            <div className="offer-content">
                <div className="top"><h2>Spicejet</h2><h4>₹ 51,000</h4></div>
                <div className="bottom"><ul>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    </ul>
                    <p><i className="fa fa-map-marker"></i> New Delhi</p></div>
            </div>
            </div>
            </li>
            <li>
        <div className="inner-content">
            <div className="offer-image">
            <img src={Slider4}/>
            </div>
            <div className="offer-content">
                <div className="top"><h2>Air India</h2><h4>₹ 51,000</h4></div>
                <div className="bottom"><ul>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    </ul>
                    <p><i className="fa fa-map-marker"></i> New Delhi</p></div>
            </div>
            </div>
            </li>
            </Slider>
        </ul>
    </div>
    </section>
  );
};

export default EconomyClass;
