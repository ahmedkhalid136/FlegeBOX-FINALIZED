import React from "react";

export default function mobileAddToCart() {
  return (
    <div>
      <div className="mobile-cart-section">
        <img
          className="mobile-cart-image"
          src="./Images/clay-banks-e6pK_snssSY-unsplash.jpg"
        />
        <br /> <br />
        <h6>N95 Mask</h6>
        <p>20pcs</p>
        <div className="increment-cart">
          <button className="increment-buttons sizes">S</button>
          <button className="increment-buttons sizes">M</button>
          <button className="increment-buttons sizes">L</button>
        </div>
      </div>
      <div className="mobile-button-area">
        <button className="increment-buttons">-</button>
        <span className="increment-buttons counter">1</span>
        <button className="increment-buttons">+</button>
      </div>
    </div>
  );
}
