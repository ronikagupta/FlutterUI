import React from 'react'
import {Link} from "react-router-dom";

export default function SingleNav() {
  return (
    <section className='section single-nav'>
        <div className='container'>
            <div className='navbar-single'>
                <div className='navigation'>
                    <ul>
                        <li><Link to="">Overview</Link></li>
                        <li><Link to="">Room</Link></li>
                        <li><Link to="">Facilities</Link></li>
                        <li><Link to="">Reviews</Link></li>
                        <li><Link to="">Location</Link></li>
                    </ul>
                </div>
                <div className='starting-price'>
                    <span>from</span><h3 className='hotel-price'>Rs. 1,7110</h3>
                    <Link to="" className='btn btn-primary deal-more'>View This Deal</Link>
                </div>
            </div>
        </div>
    </section>
  )
}
