import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import CartBody from "./CartBody";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Modal from "react-bootstrap/Modal";
//import {Cart as Cart1} from "./Cart";

export const Checkout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="#">
            Checkout Page
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav me-5">
              <Link
                className="nav-link active m-2"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
              <a className="badgeIcon nav-link" href="#">
                <CgProfile />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div class="row p-5">
        <div class="col-md-5 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
           
               
                  <div className="row">
                    
                        <div className="col">
                          <img
                            src=""
                            alt="Product"
                            className="img-fluid"
                            style={{}}
                          />
                        </div>

                        <div className="col">
                          <h5>Name</h5>
                          
                        </div>
                        <div className="col">
                        <p className="text-success">Rs.1200</p>
                        </div>
                     
                  </div>
                
           
              
            </li>
          
            <li class="list-group-item d-flex justify-content-between">
              <span>Total</span>
              <strong>Rs.0</strong>
            </li>
          </ul>
        </div>
        <div class="col-md-7 order-md-1">
          <h4 class="mb-3">Billing address</h4>
          <form class="needs-validation" noValidate="">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required=""
                />
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required=""
                />
                <div class="invalid-feedback">Valid last name is required.</div>
              </div>
            </div>

            <div class="mb-3">
              <label for="email">
                Email <span class="text-muted">(Required)</span>
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="mb-3">
              <label for="address">Address</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="1234 Main St"
                required=""
              />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="mb-3">
              <label for="address2">
                Address 2 <span class="text-muted">(Optional)</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="address2"
                placeholder="House No."
              />
            </div>

            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="country">City</label>
                <select
                  class="custom-select d-block w-100"
                  id="country"
                  required=""
                >
                  <option value="">Choose...</option>
                  <option>Kathmandu</option>
                  <option>Lalitpur</option>
                  <option>Bhaktapur</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">State</label>
                <select
                  class="custom-select d-block w-100"
                  id="state"
                  required=""
                >
                  <option value="">Choose...</option>
                  <option>Province No. 1</option>
                  <option>Province No. 2</option>
                  <option>Province No. 3</option>
                  <option>Province No. 4</option>
                  <option>Province No. 5</option>
                  <option>Province No. 6</option>
                  <option>Province No. 7</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
            </div>
            <hr class="mb-4" />
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="same-address"
              />
              <label class="custom-control-label" for="same-address">
                Shipping address is the same as my billing address
              </label>
            </div>
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="save-info"
              />
              <label class="custom-control-label" for="save-info">
                Save this information for next time
              </label>
            </div>
            <hr class="mb-4" />

            <h4 class="mb-3">Payment</h4>

            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="debit">
                  Debit card
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="COD"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  required=""
                />
                <label class="custom-control-label" for="paypal">
                  Cash On Delivery
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="esewa"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="debit">
                  Esewa
                </label>
              </div>
            </div>

            <hr class="mb-4" />
            <button class="btn btn-primary btn-lg btn-block" type="submit">
              Continue to checkout
            </button>
          </form>
        </div>
      </div>
      <div>
        <div>
          <Modal.Body>
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <div className="col-5">
                    <img
                      src=""
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
                  <button type="button" className="btn btn-outline-success">
                    -
                  </button>
                  <button type="button" className="btn btn-outline-success">
                    0
                  </button>
                  <button type="button" className="btn btn-outline-success">
                    +
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </div>
      </div>
    </div>
  );
};
