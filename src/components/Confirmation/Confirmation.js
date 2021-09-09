import React from "react";
import Body from "./Body";
import "./styles.css";
import "../footer/Footer";
import Footer from "../footer/Footer";

export default function Confirmation(props) {
 
  return (
    <div>
    
        <div className="container head">
          <div className="row">
            <div className="col-lg-3">
              1. CHOOSE BOX
            </div>
            <div className="col-lg-2">...........................</div>
            <div className="col-lg-3">
              2.FILLINFORMATION
            </div>
            <div className="col-lg-2">...........................</div>
            <div className="col-lg-2">
              <button className="chooseButton">3. CONFIRMATION</button>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      <Body value={props.change}/>
      <Footer />
    </div>
  );
}
