import React, { useState, useEffect } from "react";
import "./Fillinfo.css";
import Checkbox from "@material-ui/core/Checkbox";
import Contactinfo from "./Contactinfo";
import Carelevel from "./Carelevel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Note from "./Note";
import Footer from "../footer/Footer";

function FillInfo(props) {
  const [title, setTitle] = useState(Boolean);
  const [checkMr, setCheckMr] = useState("");
  const [checkMrs, setCheckMrs] = useState("");
  const [Daddress, setDaddress] = useState(false);
  title == true ? props.title("Ms") : props.title("Mr");
  useEffect(() => {
    console.log(props.valFname);
  }, []);

  // function checkGender() {
  //   if (title === true) {
  //     setCheckMrs("checked");
  //     setCheckMr("");
  //   } else {
  //     setCheckMr("checked");
  //     setCheckMrs("");
  //   }
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="mainDiv">
      <form onSubmit={handleSubmit}>
        <div style={{ marginTop: "40px" }} className="container desktop-head">
          <div className="row">
            <div className="col-lg-2">1. CHOOSE BOX</div>
            <div className="col-lg-2">...........................</div>
            <div className="col-lg-3">
              <button className="chooseButton">2. FILL INFORMATION FORM</button>
            </div>
            <div className="col-lg-2">...........................</div>
            <div className="col-lg-2">3. CONFIRMATION</div>
            <div className="col-lg-1"></div>
          </div>
        </div>
        <div className="mobile-head">
          <div className="row">
            <div className="col-lg-2 col-1">
              <i class="far fa-check-circle"></i>
            </div>
            <div className="col-lg-2 col-1">......</div>
            <div className="col-lg-3 col-8">
              <button
                className="chooseButton"
                style={{ padding: "7px 5px", marginRight: "-20px" }}
              >
                2. FILL INFORMATION FORM
              </button>
            </div>
            <div className="col-lg-2 col-1">......</div>
            <div className="col-lg-2 col-1">3.</div>
          </div>
        </div>{" "}
        <br />
        <br />
        <br />
        <div className="personalInfo container">
          <div className="checkboxes">
            <h6 className="styleHeading">Personal Information</h6>

            <div style={{ textAlign: "left" }}>
              <input
                style={{
                  // display: "inline-block",
                  width: "15px",
                  textAlign: "left",
                  transform: "scale(1.0)",
                  border: "none",
                }}
                type="radio"
                id="Mr"
                name="gender"
                onClick={() => {
                  setTitle(false);
                }}
              />
              <span style={{ marginLeft: "8px", marginRight: "8px" }}>Ms</span>
              <input
                style={{
                  // display: "inline-block",
                  width: "15px",
                  textAlign: "left",
                  transform: "scale(1.0)",
                  border: "none",
                }}
                type="radio"
                id="Mr"
                name="gender"
                onClick={() => {
                  setTitle(false);
                }}
              />
              <span style={{ marginLeft: "8px", marginRight: "8px" }}>Mr</span>
            </div>
          </div>
          <br />
          <div className="">
            <div className="row">
              <div className="col-lg-6 col-sm-12 ">
                <input
                  className="input"
                  placeholder="Firstname"
                  onChange={(e) => {
                    props.fname(e.target.value);
                  }}
                  value={props.valFname}
                />
              </div>
              <div className="col-lg-6 col-sm-12">
                <input
                  className="input"
                  placeholder="Lastname"
                  onChange={(e) => props.lname(e.target.value)}
                  value={props.valLname}
                />
              </div>
            </div>
            <div className="row secondDiv">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-8 col-8">
                    <input
                      className="input1"
                      placeholder="Street Name"
                      onChange={(e) => props.sname(e.target.value)}
                      value={props.valSname}
                    />
                  </div>
                  <div className="col-lg-4 col-4">
                    <input className="input2" placeholder="City" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-4 col-6">
                    <input
                      className="input3"
                      placeholder="ZIP Code"
                      onChange={(e) => props.zip(e.target.value)}
                      value={props.valZip}
                    />
                  </div>
                  <div className="col-lg-8 col-6">
                    <input
                      className="input4"
                      placeholder="Country"
                      onChange={(e) => props.countryy(e.target.value)}
                      value={props.valCountry}
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="checkboxes">
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Different address"
                labelPlacement="End"
                onClick={() => {
                  setDaddress(!Daddress);
                }}
              />
              {Daddress ? (
                <div>
                  <br />
                  <input
                    className="input1"
                    placeholder="Different address"
                    onChange={(e) => props.sname(e.target.value)}
                  />
                  <br />
                  <br />
                  <input
                    style={{ display: "block", position: "static" }}
                    className="input1"
                    placeholder="PhoneNumber"
                    onChange={(e) => props.phone(e.target.value)}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <Carelevel
          careLevel={props.careLevel}
          valCareLevel={props.valCareLevel}
        />
        <Contactinfo
          phone={props.phone}
          valPhone={props.valPhone}
          email={props.email}
          valEmail={props.valEmail}
        />
        <div style={{ textAlign: "right", paddingTop: "30px" }}>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              marginRight: "30px",
            }}
            onClick={() => {
              {
                props.change("Box");
              }
            }}
          >
            <i class="fas fa-arrow-left" style={{ marginRight: "5px" }}></i>
            back
          </button>
          <button
            disabled={
              !props.valFname ||
              !props.valLname ||
              !props.valPhone ||
              !props.valEmail ||
              !props.valCountry ||
              !props.valSname ||
              !props.valZip ||
              !props.valTitle
            }
            type="submit"
            style={{ margin: "20px 0 30px" }}
            className="button confirmation-button"
            onClick={() => {
              {
                props.change("confirm");
              }
            }}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default FillInfo;
