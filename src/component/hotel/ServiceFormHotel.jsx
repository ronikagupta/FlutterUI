import React from 'react'

export default function ServiceFormHotel() {
  return (
    <section className="hotel-booking-form">
    <div className="container">
      <form>
        <div className="main-box">
         <div className="form-field">
                    <label>Where are you going?</label>
            <select>
                <option>Delhi</option>
                <option>Jaipur</option>
                <option>Goa</option>
                <option>Jammu</option>
                </select>
                    </div>
          <div className="form-field">
                     <label>Check in</label>
           <input type="date"/>

                    </div>
          <div className="form-field">
                     <label>Check Out</label>
           <input type="date"/>

                    </div>
            <div className="form-field">
                     <label>Number Of Room</label>
         <select>
                <option>0</option>
                <option defaultValue>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                </select>

                    </div>
          <div className="form-field">
                     <label>Number Of Adults</label>
           <select>
             <option>0</option>
              <option defaultValue >1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                </select>

                    </div>
          <div className="form-field">
                     <label>Number Of Children</label>
          <select>
              <option defaultValue>0</option>
               <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                </select>

                    </div>
            </div>
          <div className="form-field-btn">
        <button className="btn btn-warning btn-booking  ">Search</button>
        </div>
        </form>
      </div>
    </section>
  )
}
