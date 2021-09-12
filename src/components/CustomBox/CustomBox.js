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

export default function CustomBox(props) {
  const [childCount, SetCount] = useState(0);
  const [childCount1, SetCount1] = useState(0);
  const [childCount2, SetCount2] = useState(0);
  const [childCount3, SetCount3] = useState(0);
  const [childCount4, SetCount4] = useState(0);
  const [childCount5, SetCount5] = useState(0);
  const [myArr, setMyArr] = useState([]);
  const [pcs, setpcs] = useState(0);
  props.box(myArr);
  const box1 = [
    {
      name: "K94 MASK",
      pcs: 20,
      img: "./Images/pam-menegakis-12yQhBE8nUc-unsplash.jpg",
    },
  ];
  const box2 = [
    {
      name: "hand sanitizer",
      pcs: 20,
      img: "./Images/neil-bates-tAZElyZEm40-unsplash.jpg",
    },
  ];
  const box3 = [
    {
      name: "Gloves ",
      pcs: 20,
      img: "./Images/clay-banks-e6pK_snssSY-unsplash.jpg",
    },
  ];
  const box4 = [
    {
      name: "Oxygen tube",
      pcs: 20,
      img: "./Images/mockup-graphics-2WlwSXFw7Kk-unsplash.jpg",
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
                  actual={childCount}
                  mycount={SetCount}
                  setter={setMyArr}
                  getter={myArr}
                />
              </div>
              <div>
                <MobileAddToCart
                  Name={box2[0].name}
                  pcs={box2[0].pcs}
                  image={box2[0].img}
                  actual={childCount1}
                  mycount={SetCount1}
                  setter={setMyArr}
                  getter={myArr}
                />
              </div>
              <div>
                <MobileAddToCart
                  Name={box3[0].name}
                  pcs={box3[0].pcs}
                  image={box3[0].img}
                  actual={childCount2}
                  mycount={SetCount2}
                  setter={setMyArr}
                  getter={myArr}
                />
              </div>
              <div>
                <MobileAddToCart
                  Name={box4[0].name}
                  pcs={box4[0].pcs}
                  image={box4[0].img}
                  actual={childCount3}
                  mycount={SetCount3}
                  setter={setMyArr}
                  getter={myArr}
                />
              </div>
            </Carousel>
          </div>
          <div className="desktop-cart">
            <Product
              actual={childCount}
              mycount={SetCount}
              Name={box1[0].name}
              pcs={box1[0].pcs}
              image={box1[0].img}
              setter={setMyArr}
              getter={myArr}
            />
            <Product
              actual={childCount1}
              mycount={SetCount1}
              Name={box2[0].name}
              pcs={box2[0].pcs}
              image={box2[0].img}
              setter={setMyArr}
              getter={myArr}
            />
            <Product
              actual={childCount2}
              mycount={SetCount2}
              Name={box3[0].name}
              pcs={box3[0].pcs}
              image={box3[0].img}
              setter={setMyArr}
              getter={myArr}
            />
            <Product
              actual={childCount3}
              mycount={SetCount3}
              Name={box4[0].name}
              pcs={box4[0].pcs}
              image={box4.img}
              setter={setMyArr}
              getter={myArr}
            />
            <Product
              actual={childCount4}
              mycount={SetCount4}
              Name={box4[0].name}
              pcs={box4[0].pcs}
              image={box4[0].img}
              setter={setMyArr}
              getter={myArr}
            />
            <Product
              actual={childCount5}
              mycount={SetCount5}
              Name={box4[0].name}
              pcs={box4[0].pcs}
              image={box4[0].img}
              setter={setMyArr}
              getter={myArr}
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
            {myArr.map((item, ind) => {
              return (
                <Cart
                  key={ind}
                  mycount1={item.SetCount}
                  value={item.actual}
                  Name={item.Name}
                  pcs={item.pcs}
                  image={item.image}
                />
              );
            })}

          
          </div>
        </div>
      </div>
    </div>
  );
}
