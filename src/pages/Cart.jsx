import React from "react";
import "../css/Cart.css";
import img1 from "../assets/images/image 7.png";
import img2 from "../assets/images/image 8.png";
import img3 from "../assets/images/image 12.png";
import img4 from "../assets/images/image 11.png";
import img5 from "../assets/images/image 13.png";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";
const Cart = () => {
  return (
    <div id="cart-section">
        <div className="head-row">
          <h3>Cart</h3>
        </div>
        <div className="col-1">
            <h2>Your Cart</h2>
            <h3>4 itesm in Cart</h3>
        </div>
      <div className="container">
        <div className="cart-product">
          <div className="product">
            <div className="img-card">
              <img src={img1} alt="" />
            </div>
            <div className="name">
              <p>Ring</p>
              <h3>Alber Diamond</h3>
            </div>
            <div className="col-2">
                <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>

                <h3 className="price">$25,000</h3>
                <span>
                    <FaTrash />
                </span>
            </div>
          </div>
          <div className="product">
            <div className="img-card">
              <img src={img2} alt="" />
            </div>
            <div className="name">
              <p>Ring</p>
              <h3>Alber Diamond</h3>
            </div>
            <div className="col-2">
                <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>

                <h3 className="price">$25,000</h3>
                <span>
                    <FaTrash />
                </span>
            </div>
          </div>
          <div className="product">
            <div className="img-card">
              <img src={img3} alt="" />
            </div>
            <div className="name">
              <p>Ring</p>
              <h3>Alber Diamond</h3>
            </div>
            <div className="col-2">
                <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>

                <h3 className="price">$25,000</h3>
                <span>
                    <FaTrash />
                </span>
            </div>
          </div>
          <div className="product">
            <div className="img-card">
              <img src={img4} alt="" />
            </div>
            <div className="name">
              <p>Ring</p>
              <h3>Alber Diamond</h3>
            </div>
            <div className="col-2">
                <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>

                <h3 className="price">$25,000</h3>
                <span>
                    <FaTrash />
                </span>
            </div>
          </div>
        </div>
        <div className="right">
            <div>
                <h4>
                    Subtotal
                </h4>
                <h3>$100,000</h3>
            </div>
            <div>
                <h4>
                    Tax
                </h4>
                <h3>$0</h3>
            </div>
            <div>
                <h4>
                    Shipping
                </h4>
                <h3>$10</h3>
            </div>
            <div>
                <h4>
                    Total
                </h4>
                <h3>$100,010</h3>
            </div>
            <Link className="checkout" to={'/checkout'}>
                Checkout
            </Link>
            <Link className="continue"  to={'/'}>Continue Shopping</Link>
            <p>
            Upon clicking Place Order. I confirm, I have read and knowledge all the terms and police
            </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
