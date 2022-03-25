import React,{useEffect} from 'react'
import MainImage from "../component/tour/tourSingle/MainImage"
import MainData from "../component/tour/tourSingle/MainData"
import FaqTour from "../component/tour/tourSingle/FaqTour"

export default function TourPackage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tour Packages";
  }, [])
  return (

   <>
   <MainImage/>
   <MainData/>
   <FaqTour/>
   </>
  )
}
