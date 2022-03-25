import React from "react";
import Slider1 from "../../image/cheap-1.png";
import Slider2 from "../../image/cheap-2.png";
import Slider3 from "../../image/cheap-3.png";

const ChipestFlight = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <h4 className="title">
            Cheapest Flight<span> Tickets Booking</span>
            </h4>
          </div>
          <div className="slider d-flex">
            <div className="col-md-4">
              <img src={Slider1} alt="" />
            </div>
            <div className="col-md-4">
              <img src={Slider2} alt="" />
            </div>
            <div className="col-md-4">
              <img src={Slider3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChipestFlight;

