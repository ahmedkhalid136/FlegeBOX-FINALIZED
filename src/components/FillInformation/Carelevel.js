import React, { useState } from "react";
import "./Fillinfo.css";
function Carelevel(props) {
  const [getbutton1, setbutton1] = useState(true);
  const [getbutton2, setbutton2] = useState(true);
  const [getbutton3, setbutton3] = useState(true);
  const [getbutton4, setbutton4] = useState(true);
  const [getbutton5, setbutton5] = useState(true);
  const [getbutton6, setbutton6] = useState(true);
  return (
    <div className="Carelevel">
      <h6 className="styleHeadingCare">Care Level</h6>
      <div className="container Carelevelinner">
        <div className="row Buttoncontainer">
          <div className="col-lg-2 col-6 col-xs-6">
            <button
              onClick={() => {
                props.careLevel("Level 1");
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
          <div className="col-lg-2 col-6 col-xs-6">
            <button
              onClick={() => {
                props.careLevel("Level 2");
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
          <div className="col-lg-2  col-6 col-xs-6">
            <button
              onClick={() => {
                props.careLevel("Level 3");
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
          <div className="col-lg-2  col-6">
            <button
              onClick={() => {
                props.careLevel("Level 4");
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
          <div className="col-lg-2  col-6 ">
            <button
              onClick={() => {
                props.careLevel("Level 5");
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
          <div className="col-lg-2  col-6">
            <button
              onClick={() => {
                props.careLevel("Neither");
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
  );
}

export default Carelevel;
