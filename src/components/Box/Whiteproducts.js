import React from "react";
import Image1 from "../../Pictures/clay-banks-e6pK_snssSY-unsplash.jpg";
import "./Whitebox.css";

export default function WhiteProduct() {
  return (
    <div
      className="row"
      style={{
        position: "relative",
        backgroundColor:"#FFFFFF",
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
          <div className="col-lg-12">
            <button className="increment-buttons1 sizes1">S</button>
            <button className="increment-buttons1 sizes1">M</button>
            <button className="increment-buttons1 sizes1">L</button>
          </div>
      
        </div>
      </div>
    </div>
  );
}
