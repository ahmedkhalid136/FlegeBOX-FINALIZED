import React,{useState}from "react";
import Image1 from "../../Pictures/clay-banks-e6pK_snssSY-unsplash.jpg";
import "./BlueProduct.css";

export default function BlueProduct(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    
    setCount(count + 1);
    { props.mycount(count+1)}
  
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
      { props.mycount(count-1)}
    }
  };
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
        <img
          className="product-image"
          src={props.image}
          
        />
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
            <button className="increment-buttons sizes">S</button>
            <button className="increment-buttons sizes">M</button>
            <button className="increment-buttons sizes">L</button>
          </div>
          <div className="col-lg-7 col-7 increment-area">
            <button className="increment-buttons" onClick={()=>{
              decrement()
              
            }}>-</button>
            <span className="increment-buttons counter">{count}</span>
            <button className="increment-buttons" onClick={()=>{
              increment()
             
            }}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
