import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BookingForm() {
	return (
		<div className="container-booking">
			<div className="box-booking">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <p className="booking-title">Contact & Pickup Details</p>
                    </div>
					<div className="col-md-8">
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder="*Name" />
						</Form.Group>
					</div>
					<div className="col-md-8">
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>
                    </div>
                    <div className="col-md-8">
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Phone No</Form.Label>
							<Form.Control type="number" placeholder="+91" />
						</Form.Group>
                    </div>
                    <div className="col-md-8">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Pickup Address</Form.Label>
                        <Form.Control type="text" placeholder="location" />
                    </Form.Group>
                    </div>
                    <div className="col-md-8">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Drop Address</Form.Label>
                        <Form.Control type="text" placeholder="location" />
                    </Form.Group>
                    </div>
                    <div className="col-md-12">

                    <p className="booking-footer-text"> Send me trip updates on WhatsApp</p>
                    </div>
                    <div className="form-field-btn d-flex justify-content-center">
                    <Link to="/BookingForm"><button className="btn btn-warning btn-booking mb-5 ">Proceed</button></Link>
                    </div> 
				</div>
			</div>
		</div>
	);
}
