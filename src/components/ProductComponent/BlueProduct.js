import React, { useState, useEffect } from "react";
import Image1 from "../../Pictures/clay-banks-e6pK_snssSY-unsplash.jpg";
import "./BlueProduct.css";

export default function BlueProduct(props) {
  const { Name, image, pcs, actual, mycount, getter } = props;

  const increment = async () => {
    const theObj = getter.findIndex((obj) => obj.Name == Name);
    if (actual >= 1) {
      mycount(actual + 1);
      getter[theObj].pcs = getter[theObj].pcs + 20;
    } else {
      mycount((actual) => actual + 1);

      props.setter((getterr) => [...getterr, { Name, image, pcs }]);
    }
  };
  const decrement = () => {
    const theObj = getter.findIndex((obj) => obj.Name == Name);
    var find_and_delete = Name;
    actual <= 1 ? finish() : minus();

    function minus() {
      getter[theObj].pcs = getter[theObj].pcs - 20;
      mycount(actual - 1);
    }
    function finish() {
      mycount(0);
      for (var i = getter.length - 1; i >= 0; i--) {
        if (getter[i].Name == find_and_delete) {
          getter.splice(i, 1);
        }
        props.setter(getter);
      }
    }
  };
  return (
    <div
      className="row"
      style={{
        position: "relative",
        backgroundColor: "#EDF7FD",
        borderRadius: "20px",
        padding: "20px 10px 10px",
        margin: "10px 0",
      }}
    >
      <div className="col-lg-2 col-3">
        <img className="product-image" src={props.image} />
      </div>
      <div
        className="col-lg-4 col-3 product-name"
        style={{ textAlign: "left" }}
      >
        <h6>{props.Name}</h6>
        <p>{props.pcs}</p>
      </div>
      <div className="col-lg-6 col-6" style={{ paddingTop: "20px" }}>
        <div className="row">
          <div className="col-lg-5 col-12">
            <button className="increment-buttons sizes">S</button>
            <button className="increment-buttons sizes">M</button>
            <button className="increment-buttons sizes">L</button>
          </div>
          <div className="col-lg-7 col-7 increment-area">
            <button
              className="increment-buttons"
              onClick={() => {
                decrement();
              }}
            >
              -
            </button>
            <span className="increment-buttons counter">{actual}</span>
            <button
              className="increment-buttons"
              onClick={() => {
                increment();
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
