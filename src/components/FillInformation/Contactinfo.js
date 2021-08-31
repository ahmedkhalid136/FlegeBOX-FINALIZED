import React from "react";
import "./Fillinfo.css"
function Contactinfo() {
  return (
    <div className="ContactInfo">
        <div className="innercontact">

        <div className="container">
        <h6 className="styleHeading">Contact Info</h6>
        <div className="row contactContainer">
          <div className="col-lg-6 col-md-12 col-sm-12">
          <input className="input1" placeholder="Phone Number" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
          <input className="input1" placeholder="Email Address" />
          </div>
        </div>
      </div>
        </div>

    
    </div>
  );
}

export default Contactinfo;
