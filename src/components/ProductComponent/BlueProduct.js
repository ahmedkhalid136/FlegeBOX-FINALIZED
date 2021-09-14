import React, { useState, useEffect,useContext } from "react";

import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import Image1 from "../../Pictures/clay-banks-e6pK_snssSY-unsplash.jpg";
import "./BlueProduct.css";
import { CreateContext} from "../../contexts/Customcontext"

export default function BlueProduct(props) {
  const { Name, image, pcs } = props;
  const {myvalue,setvalue,myArr,setMyArr} =useContext(CreateContext)
  const [actual, mycount] = useState(0);
  const [size, setSize] = useState("M");
  const theObj = myArr.findIndex((obj) => obj.Name == Name);
  const increment = async () => {
    
    if (myvalue >= 1) {
      //   mycount(actual + 1);
      setvalue(myvalue + 1);

      console.log(myvalue, "incremented value");
      myArr[theObj].pcs = myArr[theObj].pcs + 20;

      console.log(myArr[theObj].pcs, "total pcs");
      console.log(myArr, "after incrementing");
    } else {
      //   mycount(actual + 1);
      setvalue(myvalue + 1);
      console.log(myvalue, "incremented value");
      setMyArr((myArr) => [...myArr, {Name, image, pcs }]);
      console.log(myArr, "after first append");
    }
  };

  // decrement function
  function decrement() {
 
    var find_and_delete = Name;
    myvalue <= 1 ? finish() : minus();

    function minus() {
      setvalue(myvalue - 1);

      myArr[theObj].pcs = myArr[theObj].pcs - 20;
    }
    function finish() {
      setvalue(0);

      for (var i = myArr.length - 1; i >= 0; i--) {
        if (myArr[i].Name == find_and_delete) {
          myArr.splice(i, 1);
        }
        setMyArr(myArr);
        console.log(myvalue, "decremenet value in minus function");
        console.log(myArr);
      }
    }
  }
 
     useEffect(()=>{
         console.log(myvalue,"after re-rendering again and again")
          },[myvalue])
 


  function changeSize(x) {
    setSize(x);
    const theObj =   myArr.findIndex((obj) => obj.Name == Name);
      myArr[theObj].size = size;
  }
 
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
