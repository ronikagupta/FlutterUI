import React from 'react'
import {Link} from "react-router-dom"

export default function MainData() {
  return (
    <section className="section hotelsection holiday-single">
    <div className="container">
    <div className="hotel-decription">
    <div className="hotel-title">
        <h2 className="title">Dubai Package Overview</h2>
        <p className='packages'><strong>3 Nights stay at Dubai</strong></p>
        <p className="hotel-address">With striking natural beauty, vibrant cultures, artistic brilliance and majestic architectures, Dubai becomes one of the most sought after tourist destinations in the world with its exotic aura. It is an ideal place to explore a world-className living environment. Take this holiday package for Dubai and visit some of the most gorgeous attractions of the city. </p>

        </div>


        <div className="section facility">
        <h4>Inclusions</h4>
            <ul>
            <li>3 Nights stay at Dubai</li>
            <li>Daily Breakfast</li>
            <li>Dubai airport- Hotel – Airport on Private basis</li>
            <li>Half day city tour Dubai and Night Safari tour</li>
            <li>Garden by the bay admission ticket</li>
            <li>Sentosa package (One way cable Car and SEA Aquarium)</li>
            <li>RT PCR test</li>
            <li>Meals- Lunch and Dinner</li>
            </ul>
        </div>
         </div>
        <div className="aside-hotel">
        <div className="hotel-contact">
            <h3>Contact to Agent</h3>
            <h2><Link to=""><span className="fa fa-phone"></span>+91 XXXXXXX</Link></h2>
            <h2><Link to=""><span className="fa fa-envelope"></span>info@gmail.com</Link></h2>
            <div className="hotel-book-btn">
            <button className="btn btn-primary">Book Now</button>
            </div>
            </div>
        </div>
    </div>
</section>

  )
}
