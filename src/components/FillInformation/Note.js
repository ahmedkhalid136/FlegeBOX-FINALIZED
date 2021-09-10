import React from "react";
import "./Fillinfo.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
function Note(props) {
  return (
    <div className="NoteDiv">
      <h6 className="styleHeadingNote ">Note(optional)</h6>
      <div className="container">
        <div className="row contactContainer">
          <div className="col-lg-12">
            <textarea
              className="area"
              placeholder="Phone Number"
              onChange={(e) => props.note(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
