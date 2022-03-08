import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";



import { AiOutlineStar } from "react-icons/ai";

export const Checkout = () => {
  return (
    
    <>
      <div className="row p-5 m-5">
        <div className="col-8">
          <img src="" alt="Product-image"/>
        </div>
        <div className="col-4">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <div
              className="btn-group col"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                
              >
                -
              </button>
              <button type="button" className="btn btn-outline-primary">
                0
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
               
              >
                +
              </button>
            </div>
          </div>
          <h5 className="card-title mt-2">Name</h5>
          <div className="d-flex justify-content-between">
            <p>Rs.</p>
            <p>Stocks Left:</p>
          </div>
         
          <button
            type="submit"
           
            className="btn btn-primary"
            
            
          >
            Add to cart
          </button>
          
        </div>
        </div>

      </div>
    </>
  );
};  
