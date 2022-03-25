import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function TaxiDetails() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flax-wrap-wrap gx-5">
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                    ONE WAY
 
                    </label>
                  </div>
                  <div class="form-check ms-5">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label class="form-check-label" for="flexRadioDefault2">
                    ROUND TRIP
                    </label>
                  </div>
                    </div>
                <div class="mb-3 pt-4">
                <label for="exampleFormControlInput1" class="form-label">From:</label>
                <input type="location" class="form-control" id="exampleFormControlInput1" placeholder="Bangalore, Karnataka"/>
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">To:</label>
                    <input type="location" class="form-control" id="exampleFormControlInput1" placeholder="Dum dum Airport, Kolkata"/>
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">PICK UP:</label>
                    <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Dum dum Airport, Kolkata"/>
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">PICK UP AT
                    :</label>
                    <input type="time" class="form-control" id="exampleFormControlInput1" placeholder="Dum dum Airport, Kolkata"/>
                  </div>
                </Modal.Body>
        <Modal.Footer>
        <div className="form-field-btn">
          <Link to="/taxi-details"><button className="btn btn-warning btn-booking">Select Car</button></Link>
          </div>
        
        </Modal.Footer>
      </Modal>
        
        <div className="container1">
   
			<div className="row d-flex justify-content-center pt-5">
                <div className="box-4 ">
                    <div className="col-md-4">
                    <p className=" detail-text ps-5">Bangalore- Kolkata (Dum dum Airport) (One Way)</p>
                    </div>
                    <div className="col-md-2">
                    <p className="  detail-text content-text ps-5">PICKUP- 02/03/2022</p>
                    </div>
                    <div className="col-md-2">
                    <p className="  detail-text content-text ps-5">TIME- 1:30 PM</p>
                    </div>
                    <div className="col-md-3 content-1">
                    <div className="form-field-btn">
                <button className="btn btn-warning btn-booking" onClick={handleShow}>Modify</button>
                    </div>
                    </div>
                    
                </div>
			</div>
			<div className="row d-flex justify-content-center pt-5">
				<div className="box-2 ">
					<div className=" col-md-6 heading-left">
						<p className="heading-text">DISCOUNTED FARES</p>
					</div>
					<div className=" col-md-6 heading-left">
						<p className="heading-text1">TOLL CHARGES AND TAXES INCLUDED</p>
					</div>
				</div>
			</div>
			<div className="row d-flex justify-content-center pt-5">
				<div className="box d-flex shadow-lg p-3 mb-5 bg-body rounded">
					<div className="col-md-3 content-1">
						<div>
							<img src="https://www.savaari.com/assets/img/cars/Savaari-Etios-Cab.jpg"></img>
						</div>
						<div>
							<span>Toyota Etios</span>
							<span>or equivalent</span>
						</div>
					</div>
					<div className="col-md-3 content-1">
						<div>
							<img src="https://www.savaari.com/assets/img/certified-chauffeurs.png"></img>
						</div>
						<div>
							<span className="content-text">
								Includes Toll, State Tax & GST
							</span>
						</div>
					</div>
					<div className="col-md-3 content-1">
						<div>
							<img src="https://www.savaari.com/assets/img/inclusive-gst.png"></img>
						</div>
						<div>
							<span className="content-text">
								Includes Toll, State Tax & GST
							</span>
						</div>
					</div>
					<div className="col-md-1 content-1">
						<div>
							<span className="content-text">rs-4567889</span>
						</div>
					</div>

					<div className="col-md-6 content-1">
                    <div className="form-field-btn">
                    <Link to="/BookingForm"><button className="btn btn-warning btn-booking">Select Car</button></Link>
                    </div>  
					</div>
				</div>
			</div>
			<div className="row d-flex justify-content-center pt-5">
				<div className="box d-flex shadow-lg p-3 mb-5 bg-body rounded">
					<div className="col-md-3 content-1">
						<div>
							<img src="https://www.savaari.com/assets/img/cars/Savaari-Etios-Cab.jpg"></img>
						</div>
						<div>
							<span>Toyota Etios</span>
							<span>or equivalent</span>
						</div>
					</div>
					<div className="col-md-3 content-1">
						<div>
							<img src="https://www.savaari.com/assets/img/certified-chauffeurs.png"></img>
						</div>
						<div>
							<span className="content-text">
								Includes Toll, State Tax & GST
							</span>
						</div>
					</div>
					<div className="col-md-3 content-1">
						<div>
							<img src="https://www.savaari.com/assets/img/inclusive-gst.png"></img>
						</div>
						<div>
							<span className="content-text">
								Includes Toll, State Tax & GST
							</span>
						</div>
					</div>
					<div className="col-md-1 content-1">
						<div>
							<span className="content-text">rs-4567889</span>
						</div>
					</div>
					<div className="col-md-6 content-1">
                    <div className="form-field-btn">
                    <Link to="/BookingForm"><button className="btn btn-warning btn-booking">Select Car</button></Link>
                    </div>
					</div>
				</div>
			</div>

			<div className="row d-flex justify-content-center pt-5">
				<div className="d-flex justify-content-center banner-img">
					<img src="https://travelkit.savaari.com/ImageFolder/1642598109select-car-covid-banner.jpg"></img>
				</div>
            </div>
            
            </div>
            </>
	);
}
