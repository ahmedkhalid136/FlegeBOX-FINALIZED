import React, { useEffect } from "react";
import Body from "./Body";
import "./styles.css";
import "../footer/Footer";
import Footer from "../footer/Footer";

export default function Confirmation(props) {
  useEffect(() => {
    console.log(props.mybox, "confirmation page ka data");
    // props.mybox.map((i) => {
    //   console.log(i.name)
    // })
  });
  return (
    <div>
      <div style={{ marginTop: "40px" }} className="container desktop-head">
        <div className="row">
          <div className="col-lg-2">1. CHOOSE BOX</div>
          <div className="col-lg-2">...........................</div>
          <div className="col-lg-3">2. FILL INFORMATION FORM</div>
          <div className="col-lg-2">...........................</div>
          <div className="col-lg-2">
            <button className="chooseButton" style={{ padding: "10px 20px" }}>
              3. CONFIRMATION
            </button>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>

      <div className="mobile-head">
        <div className="row">
          <div className="col-lg-2 col-2 ">
            <i class="far fa-check-circle"></i>
          </div>
          <div className="col-lg-2 col-1">......</div>
          <div className="col-lg-3 col-2">
            <i class="far fa-check-circle"></i>
          </div>
          <div className="col-lg-2 col-1">......</div>
          <div className="col-lg-2 col-6">
            <button className="chooseButton" style={{ padding: "7px 8px" }}>
              3. CONFIRMATION
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Body
        change={props.change}
        value={props.mybox}
        fname={props.fname}
        lname={props.lname}
        sname={props.sname}
        zip={props.zip}
        countryy={props.countryy}
        title={props.title}
        phone={props.phone}
        email={props.email}
        carelevel={props.careLevel}
        city={props.city}
      />
    </div>
  );
}
