import React, {useEffect} from 'react'
import TaxiMainBanner from "../component/taxi/TaxiMainBanner"
import TaxiService from "../component/taxi/TaxiService"
import TaxiSatisfaction from "../component/taxi/TaxiSatisfaction"
import TaxiContent from "../component/taxi/TaxiContent"

export default function TaxiBooking() {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title="Taxi Booking"
      }, [])
  return (
    <>
    <TaxiMainBanner/>
    <TaxiService/>
    <TaxiContent/>
    <TaxiSatisfaction/>
    </>
    )
}
