import React,{useEffect} from 'react'
import OfferBanner from "../component/offer/OfferBanner"

export default function SpecialOffer() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title="Special Offers"
  }, [])
  return (
    <>
    <OfferBanner/>
    </>
  )
}
