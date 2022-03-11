import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
//import useConvertPrice from '../Hook/useConvertPrice';
import { deleteItem } from "../redux/action/DeleteItem";
import Counter from "./Counter";
import { Link } from "react-router-dom";


const Cart = ({ incrementValue, increment, decrement, disable }) => {
  const [show, setShow] = useState(false);
  //const [total, setTotal] = useState(0);
  let total = 0;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  let cartItems = useSelector((state) => state.product.cart);

  return (
    <div>
      <button
        type="button"
        className="btn position-relative text-white btn-lg "
        onClick={handleShow}
      >
        <BsCartPlus className="reactIcon" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartItems.length}
        </span>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Items Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.map((i, ind) => (
            <div className="row" key={i.id}>
              <div className="col-6">
                <div className="row">
                  <div className="col-5">
                    <img
                      src={`https://electronic-ecommerce.herokuapp.com/${i.image}`}
                      alt="ItemsAdded"
                      className="img-fluid"
                      style={{}}
                    />
                  </div>

                  <div className="col-7">
                    <h5>{i.name}</h5>
                    <p className="text-success">Rs.{i.price * i.qty}</p>
                    <span className="d-none">
                      {(total = total + i.price * i.qty)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <b className="text-success ms-5">{i.stock}</b>
                <br />
                <div
                  className="btn-group buttonStyling"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={decrement}
                  >
                    -
                  </button>
                  <button type="button" className="btn btn-outline-success">
                    {i.qty}
                  </button>
                  <button
                    type="button"
                    disabled={disable}
                    className="btn btn-outline-success"
                    onClick={()=>increment(stock)}
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-danger ms-5"
                  onClick={() => dispatch(deleteItem(i.id))}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
        </Modal.Body>

        <Modal.Footer>
          <div>
            <p> Total Amount: {total} </p>
            {cartItems.length === 0 ?  <Button variant="success">Checkout</Button>: <Link to="/checkout">
             
             <Button variant="success">Checkout</Button>
           </Link>}
           
            
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Counter(Cart);
