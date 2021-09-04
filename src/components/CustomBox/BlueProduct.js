import React from "react";
import Image1 from "../../Pictures/clay-banks-e6pK_snssSY-unsplash.jpg";
import "./BlueProduct.css";

export default function BlueProduct() {
  return (
    <div
      className="row"
      style={{
        position: "relative",
        backgroundColor: "#EDF7FD",
        borderRadius: "20px",
        padding: "20px 10px 10px",
      }}
    >
      <div className="col-lg-2">
        <img
          className="product-image"
          src="./Images/clay-banks-e6pK_snssSY-unsplash.jpg"
        />
      </div>
      <div className="col-lg-4" style={{ textAlign: "left" }}>
        <h6>N95 Mask</h6>
        <p>20 Pcs</p>
      </div>
      <div className="col-lg-6" style={{ paddingTop: "20px" }}>
        <div className="row">
          <div className="col-lg-5">
            <button className="increment-buttons sizes">S</button>
            <button className="increment-buttons sizes">M</button>
            <button className="increment-buttons sizes">L</button>
          </div>
          <div className="col-lg-7">
            <button className="increment-buttons">-</button>
            <span className="increment-buttons counter">1</span>
            <button className="increment-buttons">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
