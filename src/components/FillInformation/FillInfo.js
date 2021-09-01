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
    <div className="mainDiv container">
      {/* PERSONAL INFO */}

      <div className="personalInfo-section">
        <h6 className="styleHeading">Personal Information</h6>
      </div>

      {/* CARE LEVEL */}
      <div className="Carelevel">
        <div className="Carelevelinner">
          <div className="container">
            <h6 className="styleHeading">Care Level</h6>
            <div className="row Buttoncontainer">
              <div className="col-lg-2 col-sm-6 col-xs-6">
                <button
                  onClick={() => {
                    setbutton1(!getbutton1);
                    setbutton2(true);
                    setbutton3(true);
                    setbutton5(true);
                    setbutton6(true);
                    setbutton4(true);
                  }}
                  className={getbutton1 ? "buttonDiv2" : "buttonDiv3"}
                  variant="outlined"
                >
                  LEVEL1
                </button>
              </div>
              <div className="col-lg-2  col-sm-6 col-xs-6">
                <button
                  onClick={() => {
                    setbutton2(!getbutton2);
                    setbutton1(true);
                    setbutton3(true);
                    setbutton5(true);
                    setbutton6(true);
                    setbutton4(true);
                  }}
                  className={getbutton2 ? "buttonDiv2" : "buttonDiv3"}
                  variant="outlined"
                >
                  LEVEL2
                </button>
              </div>
              <div className="col-lg-2  col-sm-6 col-xs-6">
                <button
                  onClick={() => {
                    setbutton3(!getbutton3);
                    setbutton1(true);
                    setbutton2(true);
                    setbutton5(true);
                    setbutton6(true);
                    setbutton4(true);
                  }}
                  className={getbutton3 ? "buttonDiv2" : "buttonDiv3"}
                  variant="outlined"
                >
                  LEVEL3
                </button>
              </div>
              <div className="col-lg-2  col-sm-6">
                <button
                  onClick={() => {
                    setbutton4(!getbutton4);
                    setbutton1(true);
                    setbutton3(true);
                    setbutton5(true);
                    setbutton6(true);
                    setbutton2(true);
                  }}
                  className={getbutton4 ? "buttonDiv2" : "buttonDiv3"}
                  variant="outlined"
                >
                  LEVEL4
                </button>
              </div>
              <div className="col-lg-2  col-sm-6 ">
                <button
                  onClick={() => {
                    setbutton5(!getbutton5);
                    setbutton1(true);
                    setbutton3(true);
                    setbutton4(true);
                    setbutton6(true);
                    setbutton2(true);
                  }}
                  className={getbutton5 ? "buttonDiv2" : "buttonDiv3"}
                  variant="outlined"
                >
                  LEVEL5
                </button>
              </div>
              <div className="col-lg-2  col-sm-6">
                <button
                  onClick={() => {
                    setbutton6(!getbutton6);
                    setbutton1(true);
                    setbutton3(true);
                    setbutton5(true);
                    setbutton4(true);
                    setbutton2(true);
                  }}
                  className={getbutton6 ? "buttonDiv2" : "buttonDiv3"}
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
