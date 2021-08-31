import React from "react";
import "./Fillinfo.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
function Note() {
  return (
    <div className="NoteDiv">
      <div className="innercontact">
        <div className="container">
          <h6 className="styleHeading">Note(optional)</h6>
          <div className="row contactContainer">
            <div className="col-lg-12">
              <textarea className="area" placeholder="Phone Number" />
            </div>
            
          </div>
        </div>
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
      
      </div>
    </div>
  );
}

export default Note;
