import React from "react";
import "./Fillinfo.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
function Note(props) {
  return (
    <div className="NoteDiv">
      <h6 className="styleHeadingNote ">Note(optional)</h6>

      <div className="row contactContainer">
        <div className="col-lg-12">
          <textarea
            className="area"
            placeholder="Do you want to tell us anything ?"
            onChange={(e) => props.note(e.target.value)}
            rows="10"
            value={props.valNote}
            required
          />
        </div>
      </div>
    </div>
  );
}

export default Note;
