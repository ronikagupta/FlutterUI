import React,{useEffect} from 'react'
import BannerTour from "../component/tour/BannerTour"
import ServiceTour from "../component/tour/ServiceTour"
import SideFilter from "../component/tour/SideFilter"
import TourData from "../component/tour/TourData"

export default function HolidayTour() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title="Holiday Packages"
  }, [])
  return (
    <>
    <BannerTour/>
    <ServiceTour/>
    <div class="hotel-page section">
    <div class="container">
      <SideFilter/>
      <TourData/>
      </div>
    </div>
    </>
  )
}
