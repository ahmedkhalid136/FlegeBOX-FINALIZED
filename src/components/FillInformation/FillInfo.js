import React, { useState } from "react";
import "./Fillinfo.css";
import Checkbox from "@material-ui/core/Checkbox";
import Contactinfo from "./Contactinfo";
import Carelevel from "./Carelevel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Note from "./Note";
import Footer from "../footer/Footer";

function FillInfo() {
  return (
    <div className="mainDiv">
      <div className="personalInfo">
        <div className="checkboxes">
          <h6 className="styleHeading">Personal Information</h6>

          <div className="personalInfo-section">
            <h6 className="styleHeading">Personal Information</h6>
          </div>

          <Carelevel />
          <Contactinfo />
          <Note />
        </div>
      </div>
    </div>
  );
}

export default FillInfo;
