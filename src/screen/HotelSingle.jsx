import React,{useEffect} from 'react'
import HotelImage from "../component/hotel/hotelSingle/HotelImage"
import SingleNav from "../component/hotel/hotelSingle/SingleNav"
import FacilityHotel from "../component/hotel/hotelSingle/FacilityHotel"
import AsideHotel from "../component/hotel/hotelSingle/AsideHotel"
import RoomsHotel from "../component/hotel/hotelSingle/RoomsHotel"
import FaqHotel from "../component/hotel/hotelSingle/FaqHotel"
import FacilityHotels from "../component/hotel/hotelSingle/FacilityHotels"
import ReviewHotel from "../component/hotel/hotelSingle/ReviewHotel"

export default function HotelSingle() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title="Hotel Booking"
  }, [])
  return (
    <>
    <HotelImage/>
    <SingleNav/>
    <section class="section hotelsection">
        <div class="container">
    <FacilityHotel/>
    <AsideHotel/>
    </div>
    </section>
      <section className='section'>
        <div className='container'>
        {/* <RoomsHotel/> */}
        <FaqHotel/>
        <FacilityHotels/>
        {/* <ReviewHotel/> */}
        </div>
      </section>

    </>
  )
}
