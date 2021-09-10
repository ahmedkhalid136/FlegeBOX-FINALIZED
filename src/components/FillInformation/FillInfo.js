import React, { useState } from "react";
import "./Fillinfo.css";
import Checkbox from "@material-ui/core/Checkbox";
import Contactinfo from "./Contactinfo";
import Carelevel from "./Carelevel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Note from "./Note";
import Footer from "../footer/Footer";

function FillInfo(props) {
const[title,setTitle]=useState(Boolean)
  title==true?props.title("Ms"):props.title("Mr")
  return (
    <div className="mainDiv container">
      <div className="personalInfo">
        <div className="checkboxes">
          <h6 className="styleHeading">Personal Information</h6>

          <FormControlLabel
            value="Ms"
            control={<Checkbox color="primary" />}
            label="Ms"
            labelPlacement="End"
            onClick={()=>{
              setTitle(true)
            
            }}
          />
          <FormControlLabel
            value="Mr"
            control={<Checkbox color="primary" />}
            label="Mr"
            labelPlacement="End"
            onClick={()=>{
              setTitle(false)
            }}
          />
        </div>

        <div className="">
          <div className="row">
            <div className="col-lg-6 col-sm-12 ">
              <input className="input" placeholder="Firstname" 
              onChange={
              e=>props.fname(e.target.value)
              }/>
            </div>
            <div className="col-lg-6 col-sm-12">
              <input className="input" placeholder="Lastname" 
              onChange={
                e=>props.lname(e.target.value)
                }
              />
            </div>
          </div>
          <div className="row secondDiv">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-8 col-8">
                  <input className="input1" placeholder="Streetname" onChange={
              e=>props.sname(e.target.value)
              }/>
                </div>
                <div className="col-lg-4 col-4">
                  <input className="input2" placeholder="N*" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4 col-6">
                  <input className="input3" placeholder="ZIP Code"
                  onChange={
                    e=>props.zip(e.target.value)
                    } />
                </div>
                <div className="col-lg-8 col-6">
                  <input className="input4" placeholder="Country" 
                   onChange={
                    e=>props.countryy(e.target.value)
                    }/>
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
        <Contactinfo phone={props.phone}
        email={props.email}/>
        <Note />
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

      
    </div>
  );
}

export default FillInfo;
