import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { AiTwotoneFilter } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { searchItem } from "../redux/action/SearchItem";

function Filter() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      minPrice: "",
      maxPrice: "",
      date: "",
      category: "",
    },
    onSubmit: (values) => {
      console.log(values);

      dispatch(searchItem(values.minPrice, values.maxPrice, values.category));

      //   let searchedItem = data.filter((i) => {

      //     return (
      //     parseInt(i.price.split('').slice(1).join(''))  >= values.minPrice &&
      //     parseInt(i.price.split('').slice(1).join('')) <= values.maxPrice &&
      //     i.category[1] === values.category

      //   )
      // });

      //   setData(searchedItem);
      //   setShow(false);
    },
  });
  return (
    <div className="d-flex justify-content-between me-5 ms-5">
      <h5>Products</h5>
      <Button variant="primary" onClick={handleShow}>
        <AiTwotoneFilter /> Filter
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="me-3 ">
        <Offcanvas.Header closeButton className="bg-primary text-white">
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="Form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="Price">Price</label> <br />
                <div className="row">
                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control"
                      id="minPrice"
                      aria-describedby="Price"
                      placeholder="Min"
                      onChange={handleChange}
                      value={values.minPrice}
                    />
                  </div>

                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control"
                      id="maxPrice"
                      aria-describedby="Price"
                      placeholder="Max"
                      onChange={handleChange}
                      value={values.maxPrice}
                    />
                  </div>
                </div>
              </div>
              <br />

              <div className="mb-3">
                <label htmlFor="exampleInputDate1" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  aria-describedby="Date"
                  placeholder="dd/mm/yyy"
                  onChange={handleChange}
                  value={values.date}
                />
              </div>

              <br />

              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  id="category"
                  className="form-select"
                  onChange={handleChange}
                  value={values.category}
                >
                  <option>Select Options</option>
                  <option>mobile</option>
                  <option>laptop</option>
                  <option>keyboard</option>
                  <option>watch</option>
                  <option>monitor</option>
                  <option>headset</option>
                </select>
              </div>
              <div className="d-md-flex justify-content-md-end">
                <button type="submit" className="btn btn-primary btn-lg m-5">
                  Search
                </button>
              </div>
            </form>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Filter;
