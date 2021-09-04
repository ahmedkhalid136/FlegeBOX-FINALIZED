import React from "react";
import Product from "../ProductComponent/BlueProduct";
import Cart from "../ProductComponent/cart";
import "./styles.css";

export default function CustomBox() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div style={{ textAlign: "left" }}>
            <h4>Choose Box</h4>
          </div>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="col-lg-6">
          <div className="cart-right" style={{ backgroundColor: "#EDF7FD" }}>
            <div className="row">
              <div className="col-lg-6" style={{ textAlign: "left" }}>
                <h4>Your Cart</h4>
              </div>
              <div className="col-lg-6" style={{ textAlign: "right" }}>
                <span>Clear All</span>
              </div>
            </div>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}
