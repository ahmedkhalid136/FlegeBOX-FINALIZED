import React, { useState } from "react";
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
  title == true ? props.title("Ms") : props.title("Mr");

  // function checkGender() {
  //   if (title === true) {
  //     setCheckMrs("checked");
  //     setCheckMr("");
  //   } else {
  //     setCheckMr("checked");
  //     setCheckMrs("");
  //   }
  // }

  return (
    <div className="mainDiv">
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

          {/* <FormControlLabel
            value="Ms"
            control={<Checkbox color="primary" />}
            label="Ms"
            labelPlacement="End"
            onClick={() => {
              setTitle(true);
            }}
          />
          <FormControlLabel
            value="Mr"
            control={<Checkbox color="primary" />}
            label="Mr"
            labelPlacement="End"
            onClick={() => {
              setTitle(false);
            }}
          /> */}
          <div style={{ textAlign: "left", marginLeft: "-20px" }}>
            <input
              type="radio"
              id="Mrs"
              name="gender"
              style={{
                display: "inline",
                width: "50px",
                textAlign: "left",
                height: "13px",
              }}
              onClick={() => {
                setTitle(true);
              }}
            />
            <label style={{ display: "inline-block" }} for="css">
              Ms
            </label>
            <input
              style={{
                display: "inline",
                width: "50px",
                textAlign: "left",
                marginLeft: "20px",
                height: "13px",
              }}
              type="radio"
              id="Mr"
              name="gender"
              onClick={() => {
                setTitle(false);
              }}
            />
            <label style={{ display: "inline-block" }} for="javascript">
              Mr
            </label>
          </div>
        </div>
        <br />
        <div className="">
          <div className="row">
            <div className="col-lg-6 col-sm-12 ">
              <input
                className="input"
                placeholder="Firstname"
                onChange={(e) => props.fname(e.target.value)}
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
              value="Ms"
              control={<Checkbox color="primary" />}
              label="Different address"
              labelPlacement="End"
            />
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
      <Note note={props.note} valNote={props.valNote} />
      <div className="row separateCheckbox">
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Confirm first check box"
          labelPlacement="End"
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Confirm second check box"
          labelPlacement="End"
        />
      </div>
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
    </div>
  );
}

export default FillInfo;
