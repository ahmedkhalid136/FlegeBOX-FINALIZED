import React,{useState}from "react";
import "./BlueProduct.css";

export default function Cart(props) {
  const [getBackground,setBackground]=useState(true)
  const [getBackground2,setBackground2]=useState(true)
  const [getBackground3,setBackground3]=useState(true)
  
  const decrement = () => {
    if(props.value>0)  {props.mycount1(props.value-1)}
    
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
        <img
          className="product-image"
          src={props.image}
        />
      </div>
      <div
        className="col-lg-4 col-2 product-name"
        style={{ textAlign: "left" }}
      >
      <h6>{props.Name}</h6>
      <p>{props.value*props.pcs}pcs</p>
      </div>
      <div className="col-lg-6 col-7" style={{ paddingTop: "20px" }}>
        <div className="increment-cart">
        <button onClick={()=>{
              setBackground(!getBackground)
            }} className={getBackground?"sizes1":"increment-buttons1"}>S</button>
            <button onClick={()=>{
              setBackground2(!getBackground2)
            }} className={getBackground2?"sizes1":"increment-buttons1"}>M</button>
            <button onClick={()=>{
              setBackground3(!getBackground3)
            }} className={getBackground3?"sizes1":"increment-buttons1"} >L</button>
          <div  style={{ textAlign: "right", display: "inline-block" }} >
              
            <i  onClick={()=>{
              decrement()
            }}class="fas fa-times" ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
