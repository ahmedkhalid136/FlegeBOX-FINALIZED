import React from "react";
import "./Box.css"
function Box() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            Choosee Box
            <div className="row majorbox">
              <div  className="col-lg-4 col-4 ">
             
              <div  className=" boxes">
              Box1
              </div>
              </div>
              <div className="col-lg-4 col-4">
              <div  className=" boxes">
              Box2
              </div>
              </div>
              <div className="col-lg-4 col-4 ">
              <div  className=" boxes">
              Box3
              </div>
              
              </div>
              
              </div>
              <div className="row majorbox">
              <div  className="col-lg-4 col-4 ">
             
              <div  className=" boxes">
              Box1
              </div>
              </div>
              <div className="col-lg-4 col-4 ">
              <div  className=" boxes">
              Box2
              </div>
              </div>
              <div className="col-lg-4 col-4  ">
              <div  className=" boxes">
              Box3
              </div>
              
              </div>
              
              </div>
          </div>
          <div className="col-lg-6 yourCart">
            Your Cart
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
