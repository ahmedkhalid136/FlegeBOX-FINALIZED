import React, { useState } from "react";
import Product from "../ProductComponent/BlueProduct";
import Cart from "../ProductComponent/cart";
import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MobileAddToCart from "../ProductComponent/mobileAddToCart";
import ProgressBar from "@ramonak/react-progress-bar";

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
  const [childCount, SetCount] = useState(0);
  const [childCount1, SetCount1] = useState(0);
  const [childCount2, SetCount2] = useState(0);
  const [childCount3, SetCount3] = useState(0);
  const [childCount4, SetCount4] = useState(0);
  const [childCount5, SetCount5] = useState(0);

  const box1 = {
    name: "K94 MASK",
    pcs: 20,
    img: "./Images/pam-menegakis-12yQhBE8nUc-unsplash.jpg",
  };
  const box2 = {
    name: "hand sanitizer",
    pcs: 20,
    img: "./Images/neil-bates-tAZElyZEm40-unsplash.jpg",
  };
  const box3 = {
    name: "Gloves ",
    pcs: 20,
    img: "./Images/clay-banks-e6pK_snssSY-unsplash.jpg",
  };
  const box4 = {
    name: "Oxygen tube",
    pcs: 20,
    img: "./Images/mockup-graphics-2WlwSXFw7Kk-unsplash.jpg",
  };
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
            <Product
            actual={childCount}
              mycount={SetCount}
              Name={box1.name}
              pcs={box1.pcs}
              image={box1.img}
            />
            <Product
              actual={childCount1}
              mycount={SetCount1}
              Name={box2.name}
              pcs={box2.pcs}
              image={box2.img}
            />
            <Product
              actual={childCount2}
              mycount={SetCount2}
              Name={box3.name}
              pcs={box3.pcs}
              image={box3.img}
            />
            <Product
              actual={childCount3}
              mycount={SetCount3}
              Name={box4.name}
              pcs={box4.pcs}
              image={box4.img}
            />
            <Product
              actual={childCount4}
              mycount={SetCount4}
              Name={box4.name}
              pcs={box4.pcs}
              image={box4.img}
            />
            <Product
              actual={childCount5}
              mycount={SetCount5}
              Name={box4.name}
              pcs={box4.pcs}
              image={box4.img}
            />
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
            <div style={{ padding: "10px 0" }}>
              <ProgressBar completed={90} bgColor={"#F87433"} />
            </div>
            {childCount == 0 ? null : (
              <Cart
              mycount1={SetCount}
                value={childCount}
                Name={box1.name}
                pcs={box1.pcs}
                image={box1.img}
              />
            )}
            {childCount1 == 0 ? null : (
              <Cart
              mycount1={SetCount1}
                value={childCount1}
                Name={box2.name}
                pcs={box2.pcs}
                image={box2.img}
              />
            )}
            {childCount2 == 0 ? null : (
              <Cart
              mycount1={SetCount2}
                value={childCount2}
                Name={box3.name}
                pcs={box3.pcs}
                image={box3.img}
              />
            )}
            {childCount3 == 0 ? null : (
              <Cart
              mycount1={SetCount3}
                value={childCount3}
                Name={box4.name}
                pcs={box4.pcs}
                image={box4.img}
              />
            )}
            {childCount4 == 0 ? null : <Cart value={childCount4} mycount1={SetCount4} />}
            {childCount5 == 0 ? null : <Cart value={childCount5} mycount1={SetCount5} />}
          </div>
        </div>
      </div>
    </div>
  );
}
