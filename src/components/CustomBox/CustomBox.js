import React from "react";
import Product from "../ProductComponent/BlueProduct";
import Cart from "../ProductComponent/cart";
import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MobileAddToCart from "../ProductComponent/mobileAddToCart";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export default function CustomBox() {
  const box1 = [
    {
      name: "K94 MASK",
      pcs: 20,
      img: "./Images/pam-menegakis-12yQhBE8nUc-unsplash.jpg",
    },
    {
      name: "hand sanitizer",
      pcs: 20,
      img: "./Images/neil-bates-tAZElyZEm40-unsplash.jpg",
    },
    { name: "Gloves ", pcs: 20, img: "./Images/clay-banks-e6pK_snssSY-unsplash.jpg" },

    { name: "Oxygen tube", pcs: 20, img: "./Images/mockup-graphics-2WlwSXFw7Kk-unsplash.jpg" },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div style={{ textAlign: "left" }}>
            <h4>Choose Box</h4>
          </div>
          <div className="mobile-cart">
            <Carousel
              responsive={responsive}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              showDots={true}
            >
              <div>
                <MobileAddToCart />
              </div>
              <div>
                <MobileAddToCart />
              </div>
              <div>
                <MobileAddToCart />
              </div>
              <div>
                <MobileAddToCart />
              </div>
            </Carousel>
          </div>
          <div className="desktop-cart">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
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
           
          </div>
        </div>
      </div>
    </div>
  );
}
