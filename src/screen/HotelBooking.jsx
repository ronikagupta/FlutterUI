import React,{useEffect} from 'react'
import HotelBanner from "../component/hotel/HotelBanner";
import FiveStar from "../component/hotel/FiveStar";
import ThreeStar from "../component/hotel/ThreeStar";
import ServiceFormHotel from "../component/hotel/ServiceFormHotel";
import HotleFilter from "../component/hotel/HotleFilter";
import HotelSearch from "../component/hotel/HotelSearch";

import Card from "../component/home/Card"
import PopoularDesignation from '../component/home/PopoularDesignation'
import Testimonial from '../component/home/Testimonial'


export default function HotelBooking() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title="Hotel Booking"
  }, [])
  return (
    <>

    <HotelBanner/>
    <ServiceFormHotel />
    {/* <Card /> */}
    <div class="hotel-page section">
    <div class="container">
      <HotleFilter/>
      <div className="right-filter-content">
        <HotelSearch/>
    {/* <FiveStar/>
    <ThreeStar/> */}

      </div>
      </div>
    </div>
    <PopoularDesignation />
      <Testimonial />





    </>
  )
}
