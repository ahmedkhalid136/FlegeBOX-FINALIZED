import React, { useState, useEffect, useContext } from "react";
import "./BlueProduct.css";
import { CreateContext } from "../../contexts/Customcontext";

//connect for redux
import { connect } from "react-redux";

//actions
import {
  ChangeQuantity,
  decrement_cart,
  decrease_total,
} from "../../action/cart";

function Cart(props) {
  const { Name, image, pcs, size, sets, price, Realsize } = props;
  const [actual, mycount] = useState(0);
  const { myvalue, setvalue, myArr, setMyArr } = useContext(CreateContext);

  console.log("price", price);
  console.log("sets", sets);

  console.log("cart props", props);

  const decrement = async () => {
    var find_and_delete = Name;
    console.log(props);
    props.decrement_cart();
    props.decrease_total(sets * price);
    mycount(0);
    setvalue(0);
    console.log(myvalue, "maybe changed");

    for (var i = myArr.length - 1; i >= 0; i--) {
      if (myArr[i].Name == find_and_delete) {
        myArr.splice(i, 1);
      }

      //changes done by rishabh 15/9/21

      props.ChangeQuantity(props.index, 0);

      setMyArr([...myArr]);
    }
  };

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
        <img className="product-image" src={"http://23.88.103.58" + image} />
      </div>
      <div
        className="col-lg-4 col-2 product-name"
        style={{ textAlign: "left" }}
      >
        <h6>{Name}</h6>
        <p>{pcs}pcs</p>
      </div>
      <div
        className="col-lg-6 col-7"
        style={{
          paddingTop: "20px",
          display: "inline-block",
          position: "relative",
        }}
      >
        <div className="increment-cart">
          {Realsize == "" ? null : (
            <div style={{ display: "inline-block" }}>
              <button
                className={size == "Small" ? "increment-buttons1" : "sizes1"}
              >
                S
              </button>
              <button
                className={size == "Medium" ? "increment-buttons1" : "sizes1"}
              >
                M
              </button>
              <button
                className={size == "Large" ? "increment-buttons1" : "sizes1"}
              >
                L
              </button>
            </div>
          )}

          <div
            style={{
              textAlign: "right",
              display: "inline-block",
            }}
          >
            <i
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "10px",
                margin: "0",
                top: "40%",
              }}
              onClick={() => {
                decrement();
              }}
              class="fas fa-times"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  product: state.cart.products,
  cart: state.cart.cart,
});

export default connect(mapStateToProps, {
  ChangeQuantity,
  decrement_cart,
  decrease_total,
})(Cart);
