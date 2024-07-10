import React from "react";
import "../css/Checkout.css";
import HeadRow from "../components/HeadRow";
import cardType1 from "../assets/images/card1.png";
import cardType2 from "../assets/images/card2.png";
import addicon from "../assets/images/addicon.png";
import { Link } from "react-router-dom";
const Checkout = () => {
  return (
    <div id="checkout-section">
      <HeadRow text={"Checkout"} />

      <div className="container">
        <div className="right">
          <select name="" id="">
            <option value="">Paypal</option>
            <option value="">Paypal</option>
            <option value="">Paypal</option>
            <option value="">Paypal</option>
          </select>
          <select name="" id="">
            <option value="">Debit Card</option>
            <option value="">Paypal</option>
            <option value="">Paypal</option>
            <option value="">Paypal</option>
          </select>
          <div className="card-select">
            <h3>Debit card</h3>

            <div className="banks">
              <img src={cardType2} alt="" />
              <span>*** *** *** 4579</span>
              <input type="radio" name="" id="" />
            </div>
            <div className="banks">
              <img src={cardType1} alt="" />
              <span>*** *** *** 4579</span>
              <input type="radio" name="" id="" />
            </div>
            <div className="add-card">
              <img src={addicon} alt="" />
              <span>Add New Card</span>
            </div>
          </div>
          <button>
            <img src={addicon} alt="" />
            <span>Add New Method</span>
          </button>
          <h2 className="address">Address</h2>
          <select name="" id="">
            <option value="">12, WLS Regancy</option>
            <option value="">12, dave Regancy</option>
            <option value="">5, WLS mikr</option>
            <option value="">12, mike  dave</option>
          </select>
        </div>

        <div className="left">
            <h3>Payment Details</h3>
        <div>
                <h4>
                Order
                </h4>
                <h3>$100,000</h3>
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
            <Link>
                Pay now
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
