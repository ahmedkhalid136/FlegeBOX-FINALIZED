import React,{useState} from "react";

export default function MobileAddToCart(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    
    setCount(count + 1);
    { props.mycount(props.actual+1)}
    
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
      { props.mycount(props.actual-1)}
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
