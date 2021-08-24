import React from "react";
import "./Homepage.css";
import Button from "../button/Button";
function Homepage() {
  return (
    <div className="container">
      <div className="left"></div>
      <div className="right">
        <div className=" p-2 col-example">
          <p className="Para">The way to your free care box!</p>
         <Button />
        </div>
      </div>
    
    </div>
  );
}

export default Homepage;
