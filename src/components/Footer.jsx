import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="bottom-container">
          <div className="footer-top">
            <div className="row-1">
              <h1>Lustra</h1>
              <p>
                Discover elegance and timeless beauty with Lustra’s exquisite
                women’s jewelry collection.
              </p>
            </div>
            <div className="rows">
            <div className="row-2">
              <h3>PAGE</h3>
              <ul>
                <li>About us </li>
                <li>Categories</li>
                <li>Shop</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="row-2 row-4">
              <h3>Resource</h3>
              <ul>
                <li>FAQ </li>
                <li>Reviews</li>
                <li>Blog</li>
                <li>Return Policy</li>
              </ul>
            </div>
            <div className="row-3">
              <h3>Subscribe</h3>
              <input type="text" placeholder="First Name"/>
              <input type="text" placeholder="Email Address"/>
              <button>Submit</button>
            </div>
            </div>
          </div>
          <div className="bottom"></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
