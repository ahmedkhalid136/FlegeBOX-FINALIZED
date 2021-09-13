import React, { useState, useEffect } from "react";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import Image1 from "../../Pictures/clay-banks-e6pK_snssSY-unsplash.jpg";
import "./BlueProduct.css";

export default function BlueProduct(props) {
  const { Name, image, pcs, getter, sets, data, setvalue, myvalue,setter } = props;
  const [actual, mycount] = useState(0);
  const [size, setSize] = useState("M");

  const theObj = getter.findIndex((obj) => obj.Name == Name);
  const increment = async () => {
    if (actual >= 1) {
      mycount(actual + 1);
      setvalue(actual);
      console.log(actual, "incremented value");
      getter[theObj].pcs = getter[theObj].pcs + 20;

      console.log(getter[theObj].pcs, "total pcs");
      console.log(getter, "after addition");
    } else {
      mycount(actual + 1);
      setvalue(actual);
      setter((getterr) => [...getterr, { Name, image, pcs, size }]);
      console.log(getter, "myarray");
    }
  };

  // decrement function
  const decrement = async () => {
    var find_and_delete = Name;
    actual <= 1 ? finish() : minus();

    function minus() {
      mycount(actual - 1);
      setvalue(actual)
      getter[theObj].pcs = getter[theObj].pcs - 20;
      console.log(getter[theObj].pcs, "total pcs");
 
    }
    function finish() {
      mycount(0);
      setvalue(0)
      for (var i = getter.length - 1; i >= 0; i--) {
        if (getter[i].Name == find_and_delete) {
          getter.splice(i, 1);
        }
        props.setter(getter);
        console.log(getter);
      }
    }
  };

  function changeSize(x) {
    setSize(x);
    const theObj = getter.findIndex((obj) => obj.Name == Name);
    getter[theObj].size = size;
  }
  // useEffect(() => {
  //   console.log(getter);
  // });

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
            <button
              className="increment-buttons sizes"
              onClick={() => changeSize("S")}
            >
              S
            </button>
            <button
              className="increment-buttons sizes"
              onClick={() => changeSize("M")}
            >
              M
            </button>
            <button
              className="increment-buttons sizes"
              onClick={() => changeSize("L")}
            >
              L
            </button>
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
