import React from "react";
import "./BlueProduct.css";

export default function cart() {
  return (
    <div
      className="row cart-section"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        padding: "20px 10px 10px",
        margin: "10px 0",
      }}
    >
      <div className="col-lg-2 col-3">
        <img
          className="product-image"
          src="./Images/clay-banks-e6pK_snssSY-unsplash.jpg"
        />
      </div>
      <div
        className="col-lg-4 col-2 product-name"
        style={{ textAlign: "left" }}
      >
        <h6>N95 Mask</h6>
        <p>20Pcs</p>
      </div>
      <div className="col-lg-6 col-7" style={{ paddingTop: "20px" }}>
        <div className="increment-cart">
          <button className="increment-buttons cart-sizes">S</button>
          <button className="increment-buttons cart-sizes">M</button>
          <button className="increment-buttons cart-sizes">L</button>
          <div style={{ textAlign: "right", display: "inline-block" }}>
            <i class="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
