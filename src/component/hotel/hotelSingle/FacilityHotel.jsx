import React from 'react'
import fac1 from "../../../image/fac-1.png"
import fac2 from "../../../image/fac-2.png"
import fac3 from "../../../image/fac-3.png"
import fac4 from "../../../image/fac-4.png"

export default function FacilityHotel() {
  return (
    <div className="hotel-decription">
    <div className="hotel-title">
        <h2 className="title">DoubleTree by Hilton Hotel Goa - Arpora - Baga</h2>
        <p className="hotel-address">Ximer Arpora Bardez, Baga, Goa, India, 403518</p>

        </div>

        <div className="hotel-facility section">
        <ul>
        <li><img src={fac1}/><span>Airport transfer </span></li>
        <li><img src={fac2}/><span>Free Wi-Fi in all rooms!</span></li>
        <li><img src={fac3}/><span>Hot tub</span></li>
        <li><img src={fac4}/><span>Sauna</span></li>
        <li><img src={fac4}/><span>Steamroom</span></li>
        </ul>
        </div>
        <div className="section facility">
            <h4>Facilities</h4>
                <ul>
                <li>Airport transfer</li>
                <li>Valet parking</li>
                <li>Shuttle service</li>
                <li>Free Wi-Fi in all rooms!</li>
                <li>Fitness center</li>
                <li>Swimming pool [outdoor]</li>
                <li>Front desk [24-hour]</li>
                <li>Check-in/out [express]</li>
                </ul>
            </div>
        </div>
  )
}

