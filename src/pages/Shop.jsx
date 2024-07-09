import React from "react";
// import FilterContainer from "../components/FilterContainer";
import "../css/Shop.css";
import Product from "../components/Product";
import Features from "../components/Features";
const Shop = () => {
  return (
    <div id="Shop-section">
      <div className="container">
        <div className="head-row">
          <h3>Shop</h3>
        </div>
        {/* <div className="filter">
          <FilterContainer />
        </div> */}
        <div className="products">
          <Product />
        </div>
        <div className="features">
          <Features />
        </div>
      </div>
    </div>
  );
};

export default Shop;
