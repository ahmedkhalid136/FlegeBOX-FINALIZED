import React, { useState } from "react";
import "./BlueProduct.css";

export default function Cart(props) {
  const [getBackground, setBackground] = useState(true);
  const [getBackground2, setBackground2] = useState(true);
  const [getBackground3, setBackground3] = useState(true);
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
        <img className="product-image" src={props.image} />
      </div>
      <div
        className="col-lg-4 col-4 product-name"
        style={{ textAlign: "left" }}
      >
        <h6>{props.Name}</h6>
        <p>{props.pcs}pcs</p>
      </div>
      <div className="col-lg-6 col-5" style={{ paddingTop: "20px" }}>
        <div className="increment-cart cart1-sizes">
          <button
            onClick={() => {
              setBackground(!getBackground);
            }}
            className={getBackground ? "sizes1" : "increment-buttons1"}
          >
            S
          </button>
          <button
            onClick={() => {
              setBackground2(!getBackground2);
            }}
            className={getBackground2 ? "sizes1" : "increment-buttons1"}
          >
            M
          </button>
          <button
            onClick={() => {
              setBackground3(!getBackground3);
            }}
            className={getBackground3 ? "sizes1" : "increment-buttons1"}
          >
            L
          </button>
        </div>
        <div style={{ textAlign: "right", display: "inline-block" }}>
          <i class="fas fa-times"></i>
        </div>
      </div>
    </div>
  );
}
