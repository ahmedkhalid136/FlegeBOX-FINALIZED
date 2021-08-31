import React from "react";
import "./Fillinfo.css";
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
      </div>
    </div>
  );
}

export default Note;
