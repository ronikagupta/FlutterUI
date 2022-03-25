import React,{useEffect} from 'react'
import FlightBanner from "../component/flight/FlightBanner";
import BussinessClass from "../component/flight/BussinessClass";
import EconomyClass from "../component/flight/EconomyClass";
import ServiceFormFligh from "../component/flight/ServiceFormFligh";


import FlightCard from "../component/flight/FlightCard"
import ChipestFlight from '../component/flight/ChipestFlight'
import Testimonial from '../component/home/Testimonial'


export default function FlightBooking() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title="Flignt Booking"
  }, [])
  return (
    <>

    <FlightBanner/>
    <ServiceFormFligh />
    <FlightCard />
    <BussinessClass/>
    <EconomyClass/>
    <ChipestFlight />
      <Testimonial />




    </>
  )
}
