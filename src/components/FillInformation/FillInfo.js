import React from "react";
import "./Fillinfo.css";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

import FormControlLabel from '@material-ui/core/FormControlLabel';


function FillInfo() {
  return (
    <div className="mainDiv">
      <div className="personalInfo">
        <div className="checkboxes">
        <p>personal information</p>
        
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
    </div>
  );
}

export default FillInfo;
