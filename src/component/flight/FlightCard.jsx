import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Slider1 from "../../image/flightSlider-1.png";
import Slider2 from "../../image/flightSlider-2.png";
import Slider3 from "../../image/flightSlider-3.png";

export default function FlightCard() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <section className="section best-offer">
    <div className="container">
         <Slider {...settings}>
    <div className="card-image" style={{padding:"0 10px"}}>
              <img src={Slider1} alt="" />
            </div>
            <div className="card-image"  style={{padding:"0 10px"}} >
              <img src={Slider2} alt="" />
            </div>
            <div className="card-image"   style={{padding:"0 10px"}}>
              <img src={Slider3} alt="" />
            </div>
            <div  className="card-image"  style={{padding:"0 10px"}}>
              <img src={Slider3} alt="" />
              </div>
    </Slider>
    </div>
</section>
  );
}
