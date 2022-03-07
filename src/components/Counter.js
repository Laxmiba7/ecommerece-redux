import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action/AddToCart";
const Counter = (WrappedComponent) => {
  function Counter(props) {
    const [disable, setDisable] = useState(false);
    const [incrementValue, setIncrementValue] = useState(0);
    const [dis, setDis] = useState(false);
    const dispatch = useDispatch();

    //Function for increment value on button click
    const increment = (stock) => {
      setDis(false);
      incrementValue >= stock ? setDisable(true) :
      setIncrementValue((prev)=> prev+1);
    };
    //Function for decrement value on button click
    const decrement = () =>
      incrementValue <= 0 ? 0 : setIncrementValue(incrementValue - 1);

    const check = (id) =>
    {
      incrementValue === 0 ? setDis(true) : dispatch(addToCart(id, incrementValue));
      
    }
    

      

    return (
      <WrappedComponent
        incrementValue={incrementValue}
        increment={increment}
        decrement={decrement}
        check={check}
        dis={dis}
        {...props}
      />
    );
  }
  return Counter;
};

export default Counter;
