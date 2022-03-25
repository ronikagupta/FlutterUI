import React from 'react'
import Navbar from "../src/component/share/Navbar";
import Footer from "../src/component/share/Footer";
import Home from "./screen/Home"
import HotelBooking from "./screen/HotelBooking"
import FlightBooking from "./screen/FlightBooking"
import HotelSingle from "./screen/HotelSingle"
import HolidayTour from "./screen/HolidayTour"
import TourPackage from "./screen/TourPackage"
import TaxiBooking from "./screen/TaxiBooking"
import SpecialOffer from "./screen/SpecialOffer"
import TaxiDetails from './component/taxi/TaxiDetails';
import BookingForm from './component/taxi/BookingForm';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
export default function Router() {
  return (
    <div>
      <HashRouter basename='/'>
      <Navbar />

    <Routes>
    <Route  path="/"  element={<Home />}/>
    <Route  path="/hotel-booking"  element={<HotelBooking />}/>
    <Route  path="/hotel-palace"  element={<HotelSingle/>}/>
    <Route  path="/flight-booking"  element={<FlightBooking />}/>
    <Route  path="/tour-package"  element={<HolidayTour/>}/>
    <Route  path="/tour-product"  element={<TourPackage/>}/>
    <Route  path="/special-offer"  element={<SpecialOffer/>}/>
          <Route path="/taxi-booking" element={<TaxiBooking />} />
          <Route path="/taxi-details" element={<TaxiDetails />} />
          <Route path="/BookingForm" element={<BookingForm />} />

          

          


    </Routes>
   <Footer />
  </HashRouter>
    </div>
  )
}
