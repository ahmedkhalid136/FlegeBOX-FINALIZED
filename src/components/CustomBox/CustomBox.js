import React, { useState, useEffect, useContext } from "react";

import Product from "../ProductComponent/BlueProduct";
import Cart from "../ProductComponent/cart";
import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MobileAddToCart from "../ProductComponent/mobileAddToCart";
import ProgressBar from "@ramonak/react-progress-bar";

import { CreateContext } from "../../contexts/Customcontext";

//action
import { setItem, clear_cart } from "../../action/cart";

//redux connect
import { connect } from "react-redux";

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

function CustomBox(props) {
  const [myvalue, setvalue] = useState(0);

  const [myArr, setMyArr] = useState([]);

  const box = [
    {
      name: "K94 MASK",
      pcs: 20,
      img: "./Images/pam-menegakis-12yQhBE8nUc-unsplash.jpg",
      size: "M",
      sets: 0,
      price: 5,
    },
    {
      name: "Gloves",
      pcs: 20,
      img: "./Images/clay-banks-e6pK_snssSY-unsplash.jpg",
      size: "M",
      sets: 0,
      price: 10,
    },
    {
      name: "hand sanitizer ",
      pcs: 20,
      img: "./Images/clay-banks-e6pK_snssSY-unsplash.jpg",
      size: "M",
      sets: 0,
      price: 15,
    },
    {
      name: "Oxygen tube",
      pcs: 20,
      img: "./Images/mockup-graphics-2WlwSXFw7Kk-unsplash.jpg",
      size: "M",
      sets: 0,
      price: 1,
    },
  ];

  props.box(myArr);

  useEffect(() => {
    //adding product to redux if there not products
    if (props.product && props.product.length == 0) {
      props.setItem(box);
    }
    console.log(myArr,"array jo backend pa ha");
  });

  // const box1 = [
  //   {
  //     name: "K94 MASK",
  //     pcs: 20,
  //     img: "./Images/pam-menegakis-12yQhBE8nUc-unsplash.jpg",
  //     size: "",
  //   },
  // ];
  // const box2 = [
  //   {
  //     name: "hand sanitizer",
  //     pcs: 20,
  //     img: "./Images/neil-bates-tAZElyZEm40-unsplash.jpg",
  //     size: "",
  //   },
  // ];
  // const box3 = [
  //   {
  //     name: "Gloves ",
  //     pcs: 20,
  //     img: "./Images/clay-banks-e6pK_snssSY-unsplash.jpg",
  //     size: "",
  //   },
  // ];
  // const box4 = [
  //   {
  //     name: "Oxygen tube",
  //     pcs: 20,
  //     img: "./Images/mockup-graphics-2WlwSXFw7Kk-unsplash.jpg",
  //     size: "",
  //   },
  // ];

  //function to clear cart
  const clearCart = () => {
    props.clear_cart(myArr);
    setMyArr([]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div style={{ textAlign: "left" }}>
            <h4>Choose Box</h4>
          </div>
          <div className="mobile-cart">
            {props.product ? (
              <Carousel
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                showDots={true}
              >
                {props.product.map((item, ind) => {
                  return (
                    <CreateContext.Provider
                      value={{ myvalue, setvalue, myArr, setMyArr }}
                    >
                      <div>
                        <MobileAddToCart
                          key={ind}
                          Name={item.name}
                          pcs={item.pcs}
                          image={item.img}
                          index={ind}
                          price={item.price}
                          // setter={setMyArr}
                          // getter={myArr}
                          // setvalue={setvalue}
                          // myvalue={myvalue}
                          sets={item.sets}
                        />
                      </div>
                    </CreateContext.Provider>
                  );
                })}
              </Carousel>
            ) : null}
          </div>
          <div className="desktop-cart">
            {console.log(props.product)}
            {props.product
              ? props.product.map((item, ind) => {
                  return (
                    <CreateContext.Provider
                      value={{ myvalue, setvalue, myArr, setMyArr }}
                    >
                      <Product
                        key={ind}
                        Name={item.name}
                        pcs={item.pcs}
                        image={item.img}
                        index={ind}
                        price={item.price}
                        // setter={setMyArr}
                        // getter={myArr}
                        // setvalue={setvalue}
                        // myvalue={myvalue}
                        sets={item.sets}
                      />
                    </CreateContext.Provider>
                  );
                })
              : null}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="cart-right" style={{ backgroundColor: "#EDF7FD" }}>
            <div className="row">
              <div className="col-lg-6" style={{ textAlign: "left" }}>
                <h4>Your Cart</h4>
              </div>
              <div className="col-lg-6" style={{ textAlign: "right" }}>
                <button
                  onClick={() => clearCart()}
                  style={{ border: "none", background: "transparent" }}
                >
                  Clear All
                </button>
              </div>
            </div>
            <div style={{ padding: "10px 0" }}>
              <ProgressBar
                completed={Math.round((props.total / 60) * 100)}
                bgColor={"#F87433"}
              />
            </div>

            {/*console.log("BEFORE RENDERING CART" + myArr + "HELL"*/}
            {myArr.map((item, ind) => {
              console.log("item card", item);
              return (
                <CreateContext.Provider
                  value={{ myvalue, setvalue, myArr, setMyArr }}
                >
                  <Cart
                    key={ind}
                    Name={item.Name}
                    pcs={item.pcs}
                    image={item.image}
                    price={item.price}
                    // getter={myArr}
                    // setter={setMyArr}
                    sets={item.sets}
                    index={item.index}
                    size={item.size}
                    // myvalue={myvalue}
                    // setvalue={setvalue}
                  />
                </CreateContext.Provider>
              );
            })}
          </div>
          
      <div style={{ textAlign: "right", margin: "30px 0" }}>
        <button
          disabled={props.cart == 0 ? true : false}
          style={{ opacity: props.cart == 0 ? 0.7 : 1 }}
          className="button confirmation-button"
          onClick={() => props.change("info")}
        >
          continue
        </button>
      </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  product: state.cart.products,
  cart: state.cart.cart,
  total: state.cart.total,
});

export default connect(mapStateToProps, { setItem, clear_cart })(CustomBox);
