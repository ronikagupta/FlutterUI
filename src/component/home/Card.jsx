import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../../image/slide1.png";
import Slider2 from "../../image/slide2.png";
import Slider3 from "../../image/slide3.png";

export default function Card() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <section class="section best-offer">
    <div class="container">
        <h2 class="title left">Best offers exclusively  <span>for you!</span></h2>

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
