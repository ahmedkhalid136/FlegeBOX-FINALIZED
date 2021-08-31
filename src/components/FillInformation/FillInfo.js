import React, { useState } from "react";
import "./Fillinfo.css";
import Checkbox from "@material-ui/core/Checkbox";
import Contactinfo from "./Contactinfo";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Note from "./Note";

function FillInfo() {
  const [getbutton1, setbutton1] = useState(true);
  const [getbutton2, setbutton2] = useState(true);
  const [getbutton3, setbutton3] = useState(true);
  const [getbutton4, setbutton4] = useState(true);
  const [getbutton5, setbutton5] = useState(true);
  const [getbutton6, setbutton6] = useState(true);
  return (
    <div className="mainDiv">
      <div className="personalInfo">
        <div className="checkboxes">
          <h6 className="styleHeading">Personal Information</h6>

          <FormControlLabel
            value="Ms"
            control={<Checkbox color="primary" />}
            label="Ms"
            labelPlacement="End"
          />
          <FormControlLabel
            value="Mr"
            control={<Checkbox color="primary" />}
            label="Mr"
            labelPlacement="End"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <input className="input" placeholder="Firstname" />
            </div>
            <div className="col-lg-6 col-sm-12">
              <input className="input" placeholder="Lastname" />
            </div>
          </div>
          <div className="row secondDiv">
            <div className="col-lg-3 col-sm-12">
              <input className="input1" placeholder="Streetname" />
            </div>
            <div className="col-lg-3 col-sm-12">
              <input className="input2" placeholder="N*" />
            </div>
            <div className="col-lg-3 col-sm-12">
              <input className="input3" placeholder="ZIP Code" />
            </div>
            <div className="col-lg-3 col-sm-12">
              <input className="input4" placeholder="Country" />
            </div>
          </div>
        </div>
        <div className="checkboxes">
          <FormControlLabel
            value="Ms"
            control={<Checkbox color="primary" />}
            label="Different address"
            labelPlacement="End"
          />
        </div>
      </div>

      {/* CARE LEVEL */}
      <div className="Carelevel">
        <div className="Carelevelinner">
          <div className="container">
            <h6 className="styleHeading">Care Level</h6>
            <div className="row Buttoncontainer">
              <div className="col-lg-2">
                <button
                  className="Carelevelbutton"
                  onClick={() => {
                    setbutton1(!getbutton1);
                  }}
                
                  className={getbutton1?"buttonDiv2":"buttonDiv3"}
                  variant="outlined"
                >
                  LEVEL1
                  </button>
              </div>
              <div className="col-lg-2">
                <button
                  className="Carelevelbutton"
                  onClick={() => {
                    setbutton2(!getbutton2);
                  }}
                  
                  className={getbutton2?"buttonDiv2":"buttonDiv3"}
                  variant="outlined"
                >
                  LEVEL2
                </button>
              </div>
              <div className="col-lg-2">
                <button
                  className="Carelevelbutton"
                  onClick={() => {
                    setbutton3(!getbutton3);
                  }}
                
                  className={getbutton3?"buttonDiv2":"buttonDiv3"}
                  variant="outlined"
                >
                  LEVEL3
                </button>
              </div>
              <div className="col-lg-2">
                <button
                  onClick={() => {
                    setbutton4(!getbutton4);
                  }}
                 
                  className={getbutton4?"buttonDiv2":"buttonDiv3"}
                  variant="outlined"
                >
                  LEVEL4
                </button>
              </div>
              <div className="col-lg-2">
                <button
                  className="Carelevelbutton"
                  onClick={() => {
                    setbutton5(!getbutton5);
                  }}
                  className={getbutton5?"buttonDiv2":"buttonDiv3"}
                  variant="outlined"
                >
                  LEVEL5
                </button>
              </div>
              <div className="col-lg-2">
                <button
                  className="Carelevelbutton"
                  onClick={() => {
                    setbutton6(!getbutton6);
                  }}
                  className={getbutton6?"buttonDiv2":"buttonDiv3"}
                  variant="outlined"
                >
                  NEITHER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contactinfo />
      <Note />
    </div>
  );
}

export default FillInfo;
