import React,{useState} from "react";

export default function MobileAddToCart(props) {
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
    <div>
      <div className="mobile-cart-section">
        <img
          className="mobile-cart-image"
          src={props.image}
        />
        <br /> <br />
        <h6>{props.Name}</h6>
        <p>{props.pcs}</p>
        <div className="increment-cart">
          <button className="increment-buttons sizes">S</button>
          <button className="increment-buttons sizes">M</button>
          <button className="increment-buttons sizes">L</button>
        </div>
      </div>
      <div className="mobile-button-area">
      <button className="increment-buttons" onClick={()=>{
              decrement()
              
            }}>-</button>
            <span className="increment-buttons counter">{props.actual}</span>
            <button className="increment-buttons" onClick={()=>{
              increment()
             
            }}>+</button>
      </div>
    </div>
  );
}
