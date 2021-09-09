import React, { useRef } from "react";
var SignaturePad = require("react-signature-pad");

export default function Body(props) {
  let sigpad = useRef({});

  function clear() {
    sigpad.current.clear();
  }

  return (
    <div className="container" style={{ textAlign: "left" }}>
      <h2>Thank you for your Order!</h2>
      <p>Your Order will arrive at 12.08.2021</p>
      <br />

      <p style={{ color: "black" }}>Please complete your information :</p>

      <div className="confirmation-background">
        <p style={{ color: "black" }}>Insurance Company for the careperson</p>
        <select name="Insurance" className="option-box">
          <option value="Insurance">Insurance</option>
        </select>
        <br />
        <br />
        <div className="row">
          <div className="col-lg-4">
            <input className="option-box" placeholder="Insurance Number" />
          </div>
          <div className="col-lg-4">
            <input className="option-box" placeholder="Date Of Birth" />
          </div>
          <div className="col-lg-4">
            <select name="Insurance" className="option-box">
              <option value="Insurance">Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* SIGNATURE SECTION  */}
      <br />
      <div className="confirmation-background">
        <p style={{ color: "black" }}>Signature of the contact person</p>
        <div className="sigpad-div">
          <SignaturePad ref={sigpad} style={{ border: "1px solid black" }} />
        </div>
        <br />
        <div className="row">
          <div className="col-lg-6">
            <span>
              Use your mouse, Trackpad or finger in the field above for signatur
            </span>
          </div>
          <div className="col-lg-6 confirmation-button-div">
            <button className="button confirmation-button" onClick={clear}>
              Reset
            </button>
          </div>
        </div>
      </div>

      <div
        className="row"
        style={{ paddingTop: "70px", paddingBottom: "70px" }}
      >
        <div className="col-lg-6"></div>
        <div className="col-lg-6 right">
          <span style={{ fontSize: "20px", paddingRight: "20px" }}  onClick={() => {
            {
              props.value("info");
            }
          }}>
            <i class="fas fa-arrow-left" style={{ paddingRight: "5px" }}></i>
            BACK
          </span>
          <button className="button confirmation-button" onClick={clear}>
            ORDER
          </button>
        </div>
      </div>
    </div>
  );
}
