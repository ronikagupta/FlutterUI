import React,{useState, useEffect, useRef } from "react";
import {NavLink, Link } from "react-router-dom";
import Logo from "../../image/Logo.png";

const Navbar = () => {
  const [navheight, setNavheight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setNavheight(ref.current.clientHeight)
  })
  return (
    <>
     <div style={{paddingTop:(navheight + 3),}}>
      {/* {navheight} */}
    </div>
      <nav className="navbar navbar-expand-lg navbar-light" ref={ref}>
        <div className="container">
          <NavLink  className="navbar-brand" to="/">
            <img src={Logo} alt="" />
          </NavLink >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink  className="nav-NavLink"   to="/" >
                  Home
                </NavLink >
              </li>
              <li className="nav-item">
                <NavLink  className="nav-NavLink" to="/hotel-booking" >
                  Hotel Booking
                </NavLink >
              </li>
              <li className="nav-item">
                <NavLink  className="nav-NavLink" to="/flight-booking" >
                  Flight Booking
                </NavLink >
              </li>
              <li className="nav-item">
                <NavLink  className="nav-NavLink" to="/taxi-booking">
                  Taxi Booking
                </NavLink >
              </li>
              <li className="nav-item">
                <NavLink  className="nav-NavLink" to="/tour-package" >
                  Tour Packages
                </NavLink >
              </li>
              <li className="nav-item">
                <NavLink  className="nav-NavLink" to="/special-offer" >
                  Special Offers
                </NavLink >
              </li>
              <li className="nav-item">
                <Link  className="nav-NavLink" to="#!">
                  Gallery
                </Link >
              </li>
              <li className="nav-item">
                <Link  className="nav-NavLink" to="#!">
                  Contact US
                </Link >
              </li>
            </ul>
            <button type="button" className="btn btn-primary">
              BOOK NOW
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
