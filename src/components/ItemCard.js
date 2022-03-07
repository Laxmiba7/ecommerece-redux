// import axios from 'axios'
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import { fetchData } from "../redux/action/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/action/AddToCart";
import Counter from "./Counter";

const ItemCard = (props) => {
  const {
    name,
    price,
    stock,
    image,
    id,
    date,
    incrementValue,
    dis,
    disable,
    increment,
    decrement,
    check,
  } = props;
  //const [incrementValue, setIncrementValue] = useState(0);
  //const cartItems =  useSelector((state) => state.cart);
  //console.log(cartItems)

  // const data = useSelector((state)=> state.product.products);
  const dispatch = useDispatch();
  //Convert timestamp to date
  let dateObj = new Date(date);
  // let month = dateObj.getMonth();
  // let year = dateObj.getFullYear();
  // let day = dateObj.getDate();
  const finalDate = `${dateObj.getMonth()}/${dateObj.getDate()}/${dateObj.getFullYear()}`;

  // conver dollar to Rs
  // const convertedPrice = (
  //   parseInt(price.split("").slice(1).join("")) * 120
  // ).toFixed(0);
  //  Put comma in between number
  // convertedPrice.toString();
  // let lastThree = convertedPrice.substring(convertedPrice.length - 3);
  // let otherNumbers = convertedPrice.substring(0, convertedPrice.length - 3);
  // if (otherNumbers !== "") lastThree = "," + lastThree;
  // let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

  // useCounter(incrementValue);
  //Function for increment value on button click
  // const increment = () => {
  //   setDis(false)
  //   incrementValue >= stock ? setDisable(true) : setIncrementValue(incrementValue + 1);

  // }
  // //Function for decrement value on button click
  // const decrement = () => {
  //   const decrementValue = incrementValue <= 0 ? 0 : setIncrementValue(incrementValue-1);

  // }
  // //Function for Add to cart disable on value 0
  // const check = () => {
  //  incrementValue === 0 ? setDis(true) : onAdd();
  //  value(incrementValue,price);
  // // setIncrementValue(0)
  // }

  return (
    <div className="col-3">
      <div className="card mb-5">
        <div style={{ height: "275px" }}>
          <img
            src={`https://electronic-ecommerce.herokuapp.com/${image}`}
            className="card-img-top img-fluid"
            alt="..."
            style={{ height: "100%", width: "auto" }}
          />
        </div>

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
                onClick={decrement}
              >
                -
              </button>
              <button type="button" className="btn btn-outline-primary">
                {incrementValue}
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={()=>increment(stock)}
              >
                +
              </button>
            </div>
          </div>
          <h5 className="card-title mt-2">{name}</h5>
          <div className="d-flex justify-content-between">
            <p>Rs.{price}</p>
            <p>Stocks Left: {stock}</p>
          </div>
          <p className="card-text">Released Date: {finalDate}</p>
          <button
            type="submit"
            disabled={dis ? "disabled" : false}
            className="btn btn-primary"
            data-index={id}
            onClick={() => check(id)}
          >
            Add to cart
          </button>
          {console.log(dis)}
        </div>
      </div>
    </div>
  );
};

export default Counter(ItemCard);
