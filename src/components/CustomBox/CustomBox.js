import React from "react";
import Product from "./BlueProduct";

export default function CustomBox() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          Choose Box
          <Product />
        </div>
        <div className="col-lg-6"></div>
      </div>
    </div>
  );
}
