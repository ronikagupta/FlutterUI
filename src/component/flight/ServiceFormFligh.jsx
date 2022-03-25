import React,{useState} from 'react'

export default function ServiceFormFligh() {
    const[oneWay, setoneWay] = useState(false);
    const[twoWay, setTwoWay] = useState(true);
    const handler1=()=>{
if(oneWay !== true){
    setoneWay(true);
    setTwoWay(false)
}
    };
    const handler2= ()=>{
        if(twoWay !== true){
            setTwoWay(true)
            setoneWay(false)
        }
            };


  return (
<section className="flight-booking-form">
    <div className="container">
    <form>
        <div className="flight-booking-top">
       <div className="book-fl">
            <input type="radio" name="flight-trip" id="round-trip" onClick={handler2} defaultChecked/>
           <label htmlFor="round-trip">Round-trip</label>
            </div>
            <div className="book-fl">
            <input type="radio" name="flight-trip" id="one-way" onClick={handler1}/>
           <label htmlFor="one-way">One-way</label>
            </div>

        </div>
        <div className="flight-booking-middle">
       {twoWay ?
        <div className="round-trip">
            <div className="main-box">
                <div className="form-field">
                    <label>Where from?</label>
            <select>
                <option>Delhi</option>
                </select>
                    </div>
                <div className="form-field">
                     <label>Where to?</label>
            <select>
                <option>Mumbai</option>
                </select>
                    </div>
                <div className="form-field">
                     <label>Arrived Date</label>
           <input type="date"/>

                    </div>
                 <div className="form-field">
                      <label>Return Date</label>
           <input type="date"/>
                    </div>
                 <div className="form-field">
                    <label>Flight Type</label>
            <select>
                <option>Economy</option>
                <option>Premium economy</option>
                <option>Business</option>
                <option>First-className</option>
                </select>
                    </div>
                 <div className="form-field">
                    <label>Number of Adult</label>
            <select>
                <option>0</option>
                <option defaultValue>1</option>
                <option>2</option>
                <option>3</option>
                </select>
                    </div>
                <div className="form-field">
                    <label>Number of Children</label>
            <select>
                <option>0</option>
                <option defaultValue>1</option>
                <option>2</option>
                <option>3</option>
                </select>
                    </div>
            </div>
            </div>
             :""}
            {oneWay ?<div className="one-way-trip">
            <div className="main-box">
                <div className="form-field">
                    <label>Where from?</label>
            <select>
                <option>Delhi</option>
                </select>
                    </div>
                <div className="form-field">
                     <label>Where to?</label>
            <select>
                <option>Mumbai</option>
                </select>
                    </div>
                <div className="form-field">
                     <label>Arrived Date</label>
           <input type="date"/>

                    </div>
                                 <div className="form-field">
                    <label>Flight Type</label>
            <select>
                <option>Economy</option>
                <option>Premium economy</option>
                <option>Business</option>
                <option>First-className</option>
                </select>
                    </div>
                  <div className="form-field">
                    <label>Number of Adult</label>
            <select>
                <option>0</option>
                <option defaultValue>1</option>
                <option>2</option>
                <option>3</option>
                </select>
                    </div>
                <div className="form-field">
                    <label>Number of Children</label>
            <select>
                <option>0</option>
                <option defaultValue>1</option>
                <option>2</option>
                <option>3</option>
                </select>
                    </div>

            </div>
            </div>:"" }

        </div>

        <div className="form-field-btn">
        <button className="btn btn-warning btn-booking  ">Submit</button>
        </div>
    </form>
    </div>
    </section>
  )
}
