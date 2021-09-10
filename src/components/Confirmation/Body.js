import React, { useRef } from "react";
var SignaturePad = require("react-signature-pad");

export default function Body(props) {
  let sigpad = useRef({});

  function clear() {
    sigpad.current.clear();
  }
      function sendData () {
      fetch("http://35.84.238.24/api/method/flegeapp.utils.create_patient", {
        method: "POST",
        headers: {
          Authorization: "token 6141d2161d30a42:b783e62c3c1518d",
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
         "first_name": props.fname,
          "last_name": props.lname,
          "title": props.title,
          "street_name": props.sname,
        "  date_of_birth": "2021-08-29",
          "zip_code": props.zip,
          "country": props.countryy,
          "care_level": "Level 1",
          "care_box": [
            {
              "item": "gloves",
             " quantity": 2,
            "  size": "Medium",
            },
            {
              "item": "hand-sanitizer",
              "quantity": 3,
             " size": "Large",
            },
          ],
         " phone_number": "+4919283292",
          "email_address": "flegepatient@patient.com",
          "insurance_company": "PAEO",
          "insurance_number": "PAEO-012930",
          "year": "2021",
         " note": "Patient from germany",
        }),
      })
        .then((r) => r.json())
        .then((r) => {
          console.log(r);
          console.log("worked");
        })
        .catch((e) => {
          console.log(e, "error");
        });
    };

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
          <button className="button confirmation-button" onClick={clear,sendData()}>
            ORDER
          </button>
        </div>
      </div>
    </div>
  );
}
