import React, { useState, useEffect, useContext } from "react";

import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import Image1 from "../../Pictures/clay-banks-e6pK_snssSY-unsplash.jpg";
import "./BlueProduct.css";
import { CreateContext } from "../../contexts/Customcontext";


//action
import {ChangeQuantity,increment_cart,decrement_cart,increase_total,decrease_total} from '../../action/cart';

//redux
import {connect} from 'react-redux';

 function BlueProduct(props) {
  const { Name, image, pcs, sets,index ,price} = props;
  const { myvalue, setvalue, myArr, setMyArr } = useContext(CreateContext);

  const [actual, mycount] = useState(0);

  const [size, setSize] = useState("M");


  useEffect(()=>{
     if(props.product[index].sets==0){
       mycount(0);
       setSize("M");
     }
    
  },[props.product[index].sets]);

  const theObj = myArr.findIndex((obj) => obj.Name == Name);
  
  const increment = async () => {
      
    if(props.total+props.price>60){
      return;
    }

    props.increase_total(props.price)
    props.ChangeQuantity(index,props.product[index].sets+1)
    if (actual >= 1) {
      setvalue(actual);
      mycount(sets+1)
      myArr[theObj].pcs = myArr[theObj].pcs + 20;
      myArr[theObj].sets = myArr[theObj].sets + 1;
    } else {
      mycount(sets + 1);
      props.increment_cart();
      setvalue(actual);
      setMyArr((myArr) => [...myArr, { Name, image, pcs, sets:1,index,size,price }]);
    }
  };

  // decrement function
  function decrement() {
    var find_and_delete = Name;
    actual <= 1 ? finish() : minus();

    function minus() {
      props.ChangeQuantity(index,props.product[index].sets-1)
      mycount(actual - 1);
      setvalue(actual); 
      props.decrease_total(props.price);

      myArr[theObj].pcs = myArr[theObj].pcs - 20;
      myArr[theObj].sets = myArr[theObj].sets - 1;
    //  console.log(myArr, "my array after decrementing");
    }
    function finish() {
      props.ChangeQuantity(index,0)
      mycount(0);
      setvalue(actual);
      props.decrement_cart();
      for (var i = myArr.length - 1; i >= 0; i--) {
        if (myArr[i].Name == find_and_delete) {
          myArr.splice(i, 1);
          props.decrease_total(props.price);
        }
        setMyArr(myArr);
        console.log(myvalue, "decremenet value in minus function");
        console.log(myArr, "my array after decrementing");
      }
    }
  }



  function changeSize(x) {
   
    const theObj = myArr.findIndex((obj) => obj.Name == Name);

    //update size only if item exits in the cart
    if (theObj!==-1){
      myArr[theObj].size =x;
      setMyArr([...myArr])
    }
    setSize(x);

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
        <p>price{ props.price}</p>
      </div>
      <div className="col-lg-6 col-6" style={{ paddingTop: "20px" }}>
        <div className="row">
          <div className="col-lg-5 col-12">
            <button
              className={size=='S' ?"increment-buttons1": "sizes1" }
              onClick={() => changeSize("S")}
            >
              S
            </button>
            <button
            style={{backgroundColor:size=='M'?'#2faae5 !important':'#fff !important'}}
            className={size=='M' ?  "increment-buttons1":"sizes1" }
              onClick={() => changeSize("M")}
            >
              M
            </button>
            <button
            style={{background:size=='L'?'#2faae5 !important':'#fff !important'}}
            className={size=='L' ? "increment-buttons1":"sizes1" }
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
            <span className="increment-buttons counter">{props.product?props.product[index].sets:null}</span>
            <button
              className="increment-buttons"
              disabled={props.total+props.price>60?true:false}
              style={{opacity:props.total+props.price>60?0.7:1}}
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


const mapStateToProps = state => ({
  product: state.cart.products,
  cart: state.cart.cart,
  total:state.cart.total
});


export default connect(mapStateToProps,{ChangeQuantity,increment_cart,decrement_cart,increase_total,decrease_total})(BlueProduct);