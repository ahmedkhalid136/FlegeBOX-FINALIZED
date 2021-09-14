import React, { useState, useEffect,useContext } from "react";
import "./BlueProduct.css";
import { CreateContext} from "../../contexts/Customcontext"
export default function Cart(props) {
  const [getBackground, setBackground] = useState(true);
  const [getBackground2, setBackground2] = useState(true);
  const [getBackground3, setBackground3] = useState(true);
  const { Name, image, pcs } = props;
  const [actual, mycount] = useState(0);
//   const {myvalue,setvalue,myArr,setMyArr} =useContext(CreateContext)
// useEffect(()=>{
// console.log(myvalue,"cart is also re rendring")

// },[myvalue])
//   const decrement = async () => {
 
//     var find_and_delete = Name;
    
      
//       setvalue(0);
//       console.log(myvalue,"maybe changed")
  
//     for (var i = myArr.length - 1; i >= 0; i--) {
//       if (myArr[i].Name == find_and_delete) {
//         myArr.splice(i, 1);
//       }
//       setMyArr(myArr);
      
//       console.log(myvalue, "mycount");
//       console.log(myArr);
//     }
//   };

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
        <img className="product-image" src={image} />
      </div>
      <div
        className="col-lg-4 col-2 product-name"
        style={{ textAlign: "left" }}
      >
        <h6>{Name}</h6>
        <p>{pcs}pcs</p>
      </div>
      <div className="col-lg-6 col-7" style={{ paddingTop: "20px" }}>
        <div className="increment-cart">
          <button
            onClick={() => {
              setBackground(!getBackground);
            }}
            className={getBackground ? "sizes1" : "increment-buttons1"}
          >
            S
          </button>
          <button
            onClick={() => {
              setBackground2(!getBackground2);
            }}
            className={getBackground2 ? "sizes1" : "increment-buttons1"}
          >
            M
          </button>
          <button
            onClick={() => {
              setBackground3(!getBackground3);
            }}
            className={getBackground3 ? "sizes1" : "increment-buttons1"}
          >
            L
          </button>
          <div style={{ textAlign: "right", display: "inline-block" }}>
            <i
                // onClick={() => {
                  
                //   decrement();
                // }}
              class="fas fa-times"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
