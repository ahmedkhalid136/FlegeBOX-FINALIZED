import React from "react";
import "./Fillinfo.css";
import Checkbox from "@material-ui/core/Checkbox";

import FormControlLabel from '@material-ui/core/FormControlLabel';


function FillInfo() {
  return (
    <div className="mainDiv">
      <div className="personalInfo">
        <p>personal information</p>
        <div className="checkboxes">
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="End"
          labelPlacement="end"
        />
          <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="End"
          labelPlacement="end"
        />
        </div>
      </div>
    </div>
  );
}

export default FillInfo;
