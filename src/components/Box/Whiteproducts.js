import React,{useState} from "react";
import Image1 from "../../Pictures/clay-banks-e6pK_snssSY-unsplash.jpg";
import "./Whitebox.css";

export default function WhiteProduct() {
  const [getBackground,setBackground]=useState(true)
  const [getBackground2,setBackground2]=useState(true)
  const [getBackground3,setBackground3]=useState(true)
  return (
    <div
      className="row"
      style={{
        position: "relative",
        backgroundColor:"#FFFFFF",
        borderRadius: "20px",
        padding: "5px 5px 10px 5px",
        width:"100%",
        margin:"6px",
       
        
      }}
    >
      <div className="col-lg-2">
        <img
          className="product-image"
          src="./Images/clay-banks-e6pK_snssSY-unsplash.jpg"
        />
      </div>
      <div className="col-lg-4" style={{ textAlign: "left" }}>
        <h6>N95 Mask</h6>
        <p>20 Pcs</p>
      </div>
      <div className="col-lg-6" style={{ paddingTop: "20px" }}>
        <div className="row">
          <div className="col-lg-12">
            <button onClick={()=>{
              setBackground(!getBackground)
            }} className={getBackground?"sizes1":"increment-buttons1"}>S</button>
            <button onClick={()=>{
              setBackground2(!getBackground2)
            }} className={getBackground2?"sizes1":"increment-buttons1"}>M</button>
            <button onClick={()=>{
              setBackground3(!getBackground3)
            }} className={getBackground3?"sizes1":"increment-buttons1"}>L</button>
          </div>
      
        </div>
      </div>
    </div>
  );
}
