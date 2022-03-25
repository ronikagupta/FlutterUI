import React,{useEffect} from "react";

import Banner from "../component/home/Banner"
import Card from "../component/home/Card"
import HolidayPackages from "../component/home/HolidayPackages"
import HotelBookings from "../component/home/HotelBookings"
import Service from '../component/home/Service'
import FlightBooking from '../component/home/FlightBooking'
import TaxiBooking from '../component/home/TaxiBooking'
import PopoularDesignation from '../component/home/PopoularDesignation'
import Testimonial from '../component/home/Testimonial'


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>

      <Banner />
      <Service />
      <Card />

      <HolidayPackages />
      <HotelBookings />
      <FlightBooking />
      <TaxiBooking />
      <PopoularDesignation />
      <Testimonial />

    </>
  );
};

export default Home;
