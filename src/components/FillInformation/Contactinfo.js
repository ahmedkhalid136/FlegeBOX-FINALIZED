import React from "react";
import "./Fillinfo.css";
function Contactinfo(props) {
  return (
    <div className="ContactInfo">
      <div>
        <h6 className="styleHeadingContact">Contact Info</h6>

        <div className="row contactContainer">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <input
              className="input1"
              placeholder="Phone Number"
              onChange={(e) => props.phone(e.target.value)}
              value={props.valPhone}
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <input
              className="input1"
              placeholder="Email Address"
              onChange={(e) => props.email(e.target.value)}
              value={props.valEmail}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactinfo;
