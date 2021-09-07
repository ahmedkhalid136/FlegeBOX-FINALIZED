import React, { useState } from "react";
import "./Fillinfo.css";
import Checkbox from "@material-ui/core/Checkbox";
import Contactinfo from "./Contactinfo";
import Carelevel from "./Carelevel"
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Note from "./Note";
import Header from "../Header/Header"
function FillInfo() {

  return (
    <div>
     <Header />
    <div className="container head">
          <div className="row">
            <div className="col-lg-3">
              1. CHOOSE BOX
            </div>
            <div className="col-lg-2">...........................</div>
            <div className="col-lg-2">
              <button className="chooseButton">2.FILLINFORMATION</button>
            </div>
            <div className="col-lg-2">...........................</div>
            <div className="col-lg-2">3. CONFIRMATION</div>
            <div className="col-lg-1"></div>
          </div>
        </div>
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
            <div className="col-lg-6 col-sm-12 ">
              <input className="input" placeholder="Firstname" />
            </div>
            <div className="col-lg-6 col-sm-12">
              <input className="input" placeholder="Lastname" />
            </div>
          </div>
          <div className="row secondDiv">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-sm-8 col-xs-8">
                  <input className="input1" placeholder="Streetname" />
                </div>
                <div className="col-lg63 col-sm-4 col-xs-4">
                  <input className="input2" placeholder="N*" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-sm-8  col-xs-8">
                  <input className="input3" placeholder="ZIP Code" />
                </div>
                <div className="col-lg-6 col-sm-4 col-xs-4">
                  <input className="input4" placeholder="Country" />
                </div>
              </div>
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

      <Carelevel /> 
      <Contactinfo />
      <Note />
    </div>
    </div>
  );
}

export default FillInfo;