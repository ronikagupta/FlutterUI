import React from "react";
import Background from "../../image/flight-banner.jpg"

const FlightBanner = () => {
  return (
    <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 poster" style={{backgroundImage: `url(${Background})`}}>
              <h3> Flight Booking</h3>
                        </div>
          </div>
        </div>
    </>
  );
};

export default FlightBanner;
