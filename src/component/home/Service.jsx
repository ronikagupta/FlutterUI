import React from "react";


const Service = () => {
  return (
    <>
      <div className="service container-fluid">
        <div className="">
        <div className="container">
          <div className=" d-flex">

            <div className="col col-md-3">
              <select class="form-select" aria-label="Default select example">
                <option>Select Service</option>

              </select>
            </div>
            <div className="col col-md-2">
              <input
                type="date"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              ></input>
            </div>
            <div className="col col-md-2">
              <input
                type="date"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              ></input>
            </div>
            <div className="col col-md-3">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="No. of person"
              ></input>
            </div>
            <div className="col-md-2">
              <button type="button" className="btn btn-warning">
                Search
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
