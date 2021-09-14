import React, { useState, useEffect, useContext } from "react";

import Product from "../ProductComponent/BlueProduct";
import Cart from "../ProductComponent/cart";
import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MobileAddToCart from "../ProductComponent/mobileAddToCart";
import ProgressBar from "@ramonak/react-progress-bar";
import CreateContextProvider from "../../contexts/Customcontext";
import { CreateContext } from "../../contexts/Customcontext";
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

export default function CustomBox(props) {
  const { myvalue, setvalue, myArr, setMyArr, box } = useContext(CreateContext);

  props.box(myArr);

  useEffect(() => {
    console.log("THE FUCK" + myArr);
  });

  const box1 = [
    {
      name: "K94 MASK",
      pcs: 20,
      img: "./Images/pam-menegakis-12yQhBE8nUc-unsplash.jpg",
      size: "",
    },
  ];
  const box2 = [
    {
      name: "hand sanitizer",
      pcs: 20,
      img: "./Images/neil-bates-tAZElyZEm40-unsplash.jpg",
      size: "",
    },
  ];
  const box3 = [
    {
      name: "Gloves ",
      pcs: 20,
      img: "./Images/clay-banks-e6pK_snssSY-unsplash.jpg",
      size: "",
    },
  ];
  const box4 = [
    {
      name: "Oxygen tube",
      pcs: 20,
      img: "./Images/mockup-graphics-2WlwSXFw7Kk-unsplash.jpg",
      size: "",
    },
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
                <MobileAddToCart
                  Name={box1[0].name}
                  pcs={box1[0].pcs}
                  image={box1[0].img}
                  // setter={setMyArr}
                  // getter={myArr}
                />
              </div>
              <div>
                <MobileAddToCart
                  Name={box2[0].name}
                  pcs={box2[0].pcs}
                  image={box2[0].img}
                  // actual={childCount1}
                  // mycount={SetCount1}
                  // setter={setMyArr}
                  // getter={myArr}
                />
              </div>
              <div>
                <MobileAddToCart
                  Name={box3[0].name}
                  pcs={box3[0].pcs}
                  image={box3[0].img}
                  // actual={childCount2}
                  // mycount={SetCount2}
                  // setter={setMyArr}
                  // getter={myArr}
                />
              </div>
              <div>
                <MobileAddToCart
                  Name={box4[0].name}
                  pcs={box4[0].pcs}
                  image={box4[0].img}
                  // actual={childCount3}
                  // mycount={SetCount3}
                  // setter={setMyArr}
                  // getter={myArr}
                />
              </div>
            </Carousel>
          </div>
          <div className="desktop-cart">
            {box.map((item, ind) => {
              return (
                <CreateContextProvider>
                  <Product
                    key={ind}
                    Name={item.name}
                    pcs={item.pcs}
                    image={item.img}
                    // setter={setMyArr}
                    // getter={myArr}
                    // setvalue={setvalue}
                    // myvalue={myvalue}
                    // sets={item.sets}
                  />
                </CreateContextProvider>
              );
            })}
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

            {console.log("BEFORE RENDERING CART" + myArr + "HELL")}
            {myArr.map((item, ind) => {
              return (
                <CreateContext.Provider>
                  <Cart
                    key={ind}
                    Name={item.Name}
                    pcs={item.pcs}
                    image={item.image}
                    // getter={myArr}
                    // setter={setMyArr}
                    // sets={item.sets}
                    // myvalue={myvalue}
                    // setvalue={setvalue}
                  />
                </CreateContext.Provider>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
