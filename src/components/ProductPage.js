  import React from "react";
  import Header from "./Header";
  import { Link, useParams } from "react-router-dom";
  import { AiOutlineStar } from "react-icons/ai";
  import { useSelector } from "react-redux";

  const Product = () => {
    const params = useParams();
    const userId = params.id;
    const data = useSelector((state) => state.product.products);
    const clickedItem = data.filter((x) => x.id == userId);

    return (
      <div>
        <Header />

        {clickedItem.map((item) => (
          <div className="row p-5 m-5" key={item.id}>
            <div className="col-4">
              <img
                src={`https://electronic-ecommerce.herokuapp.com/${item.image}`}
                className="card-img-top img-fluid"
                style={{ height: "auto", width: "100%"}}
                alt="Product-image"
              />
            </div>
            <div className="col-4 m-auto">
              <div className="card-body">
                <div className="row">
                <h5 className="card-title mt-2">{item.name}</h5>
                <div className="col">
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
                <div className="d-flex flex-column justify-content-between">
                  <p>Rs.{item.price}</p>
                  
          <p>Powerful Productivity: AMD Ryzen 3 3350U delivers desktop-class performance and amazing battery life in a slim notebook. With Precision Boost, get up to 3.5GHz for your high-demand applications</p>
          <p>Stocks Left:{item.stock}</p>
                  
                </div>
                  
                  
                </div>
                
                
                <div>
                <button type="button" className="btn btn-outline-primary me-1">
                      -
                    </button>
                    <button type="button" className="btn btn-outline-primary me-1">
                      0
                    </button>
                    <button type="button" className="btn btn-outline-primary me-1">
                      +
                    </button>
                </div>

                <button type="submit" className="btn btn-primary mt-4">
                  Add to cart
                </button>
              </div>
            </div>
            
          </div>
          

        ))}

       
      </div>
    );
  };
  export default Product;
