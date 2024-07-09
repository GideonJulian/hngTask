import React from "react";
import { FaCartPlus, FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import userIcon from '../assets/images/Avatar.png'
const Header = () => {
  return (
    <div id="head-section">
      <div className="container">
        <ul>
          <li>
            {/* <Link>Home</Link> */}
          </li>
          <li>
            <Link to={"/"}>Shop</Link>
          </li>
          <li>
            <Link to={'cart'}>Cart</Link>
          </li>
          <li>
            {/* <Link>Blog</Link> */}
          </li>
        </ul>

        <div className="logo">
          <h3>Lustra</h3>
        </div>

        <div className="head-icons">
          <div>
            <span>1</span>
            <FaCartPlus />
          </div>
          <div className="user-icon">
                <img src={userIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
