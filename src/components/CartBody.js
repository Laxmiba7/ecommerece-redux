import React from 'react'
import Modal from "react-bootstrap/Modal";

function cartBody() {
  return (
    <div>
         <Modal.Body>
    
      <div className="row" >
        <div className="col-6">
          <div className="row">
            <div className="col-5">
              <img
                src=''
                alt="ItemsAdded"
                className="img-fluid"
                style={{}}
              />
            </div>

            <div className="col-7">
              <h5>Name</h5>
              <p className="text-success">Rs.</p>
              
            </div>
          </div>
        </div>
        <div className="col-6">
          <b className="text-success ms-5">Stock</b>
          <br />
          <div
            className="btn-group buttonStyling"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              className="btn btn-outline-success"
              
            >
              -
            </button>
            <button type="button" className="btn btn-outline-success">
              0
            </button>
            <button
              type="button"
              
              className="btn btn-outline-success"
              
            >
              +
            </button>
          </div>
          
        </div>
      </div>
   
  </Modal.Body></div>
  )
}

export default cartBody