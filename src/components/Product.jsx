import React from "react";
import "../css/Product.css";
import FilterContainer from "../components/FilterContainer";
import { FaSearch, FaStar } from "react-icons/fa";
import ProductDetails from "../utils/productsDetails";
const Product = () => {
  return (
    <div id="product-section">
      <div className="container">
      <div className="filter">
          <FilterContainer />
        </div>
       
        <div className="product-container">
        <div className="search-section">
          <input type="text" placeholder="Search for Products" />
          <span>
            <FaSearch />
          </span>
        </div>
          <div className="product-wrapper">
          {ProductDetails.map((item) => (
            <div className="card">
              <div className="img-card">
                <img src={item.imgSrc} alt="" />
                <div className="desc">
                  <h3>
                    {item.title}
                 
                  </h3>
                     <div>
                      <h2>{item.price}</h2>
                      <span>
                        4.5 <FaStar />
                      </span>
                    </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
