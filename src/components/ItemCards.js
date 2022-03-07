import React, { useEffect } from "react";
import ItemCard from "./ItemCard";
import { fetchData } from "../redux/action/ProductList";

// import { useState } from 'react'
// import Button from "react-bootstrap/Button";

// import { useFormik } from 'formik'
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";

const ItemCards = () => {
  const data = useSelector((state) => state.product.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="p-5">
      <Filter />

      <div className="row p-5 mb-3">
        {data.map((data) => (
          <ItemCard
            key={data.id}
            date={data.createDate}
            id={data.id}
            name={data.name}
            price={data.price}
            stock={data.stock}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemCards;
