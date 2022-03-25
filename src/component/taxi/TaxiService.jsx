import React, { useState } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Link } from "react-router-dom";

export default function TaxiService() {
  const [outStation, setOutStation] = useState(true);
  const [local, setLocal] = useState(false);
  const [airport, setAirport] = useState(false);
  const [value, onChange] = useState(new Date());
  const [localCalender, setLocalCalender] = useState(false)
  const [airportCalender, setairportCalender] = useState(false)
  const [outstationCalender, setoutstationCalender ] = useState(false)


  const handler1 = () => {
    if (outStation !== true) {
      setOutStation(true);
      setLocal(false);
      setAirport(false);
    }
  };
  const handler2 = () => {
    if (local !== true) {
      setLocal(true);
      setOutStation(false);
      setAirport(false);
    }
  };
  const handler3 = () => {
    if (airport !== true) {
      setAirport(true);
      setOutStation(false);
      setLocal(false);
    }
  };

  return (
    <section className="flight-booking-form">
      <div className="container">
        <form>
          <div className="flight-booking-top">
            <div className="book-fl">
              <input
                type="radio"
                name="flight-trip"
                id="outStation"
                onClick={handler1}
                defaultChecked
              />
              <label htmlFor="outStation">OutStation</label>
            </div>
            <div className="book-fl">
              <input
                type="radio"
                name="flight-trip"
                id="local"
                onClick={handler2}
              />
              <label htmlFor="local">Local</label>
            </div>
            <div className="book-fl">
              <input
                type="radio"
                name="flight-trip"
                id="airport"
                onClick={handler3}
              />
              <label htmlFor="airport">Airport</label>
            </div>
          </div>
          <div className="flight-booking-middle">
            {outStation ? (
              <div className="round-trip">
                <div className="main-box">
                  <div className="form-field">
                    <label>From</label>
                    <select>
                      <option>Delhi</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label>To</label>
                    <select>
                      <option>Mumbai</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label>Pick Up</label>
                    <input type="text" value={value.toLocaleDateString()} onClick={()=>{setoutstationCalender(!outstationCalender )}}/>
                    {outstationCalender ? <Calendar onChange={onChange} value={value} /> : ""}
                  </div>
                  <div className="form-field">
                    <label>Pick Up At</label>
                    <select>
                      <option>1:00 PM</option>
                      <option>2:00 PM</option>
                      <option>3:00 PM</option>
                      <option>4:00 PM</option>
                      <option>5:00 PM</option>

                    </select>
                  </div>

                </div>
              </div>
            ) : (
              ""
            )}
            {local ? (
              <div className="one-way-trip">
                <div className="main-box">
                  <div className="form-field">
                    <label>City</label>
                    <select>
                      <option>Delhi</option>
                    </select>
                  </div>
                  <div className="form-field calender">
                    <label>Pick Up</label>
                    <input placeholder="select Date" onClick={()=>setLocalCalender(!localCalender)} onChange={onChange} value={value.toLocaleDateString()}/>
                    {localCalender ? <Calendar onChange={onChange} value={value} /> :""}

                  </div>
                  <div className="form-field">
                    <label>Pick Up at</label>
                   <select>
                       <option>1:00 AM</option>
                   </select>
                  </div>

                </div>
              </div>
            ) : (
              ""
            )}
            {airport ? (
              <div className="one-way-trip">
                <div className="main-box">
                  <div className="form-field">
                    <label>City</label>
                    <select>
                      <option>Delhi</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label>Trip</label>
                    <select>
                      <option>Select Trip</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label>Pick Up address</label>
                    <input type="text" />
                  </div>
                  <div className="form-field">
                    <label>Pick Up</label>
                    <input type="text" value={value.toLocaleDateString()} onClick={()=>{setairportCalender(!airportCalender )}}/>
                    {airportCalender ? <Calendar onChange={onChange} value={value} /> : ""}

                  </div>
                  <div className="form-field">
                    <label>Pick Up at</label>
                    <select>
                      <option>1:00 PM</option>
                      <option>2:00 PM</option>
                      <option>3:00 PM</option>
                      <option>4:00 PM</option>

                    </select>
                  </div>

                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="form-field-btn">
          <Link to="/taxi-details"><button className="btn btn-warning btn-booking">Select Car</button></Link>
          </div>
        </form>
      </div>
    </section>
  );
}
