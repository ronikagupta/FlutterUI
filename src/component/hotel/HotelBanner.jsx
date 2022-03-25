import React from "react";
import Background from "../../image/hotel-banner.jpg"

const HotelBanner = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 poster" style={{backgroundImage: `url(${Background})`}}>
            <h3>  Hotel Booking</h3>
                      </div>
        </div>
      </div>
    </>
  );
};

export default HotelBanner;
