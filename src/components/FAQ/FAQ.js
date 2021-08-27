import React, { useState } from "react";
import "./FAQ.css";

function Faq() {
  const [Color, setColor] = useState(true);

  const [getIcon, setIcon] = useState(true);
  const [getIcon2, setIcon2] = useState(true);
  const [getIcon3, setIcon3] = useState(true);
  
  return (
    <div className="mainDiv">
      <p className="questionDiv">
        <h6
          className={Color === true ?"text1":"activeText1"}
          onClick={() => {
            setIcon(!getIcon);
            setColor(!Color)
           
          }}
          style={{ color: Color }}
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <i class={getIcon === true ? "fas fa-plus " : "fas fa-minus"}></i>{" "}
          click
        </h6>
        <div class="collapse" id="collapseExample">
          <div class="answerDiv">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </p>

      <p className="questionDiv">
        <h6
          className="text1"
          onClick={() => {
            setIcon2(!getIcon2);
         
          }}
          style={{ color: Color }}
          data-bs-toggle="collapse"
          href="#collapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <i class={getIcon2 === true ? "fas fa-plus" : "fas fa-minus"}></i>{" "}
          Link with href
        </h6>
        <div class="collapse" id="collapseExample1">
          <div class="answerDiv">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </p>

      <p className="questionDiv">
        <h6
          className="text1"
          onClick={() => setIcon3(!getIcon3)}
          data-bs-toggle="collapse"
          href="#collapseExample2"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <i class={getIcon3 === true ? "fas fa-plus" : "fas fa-minus"}></i>{" "}
          Link with href
        </h6>
        <div class="collapse" id="collapseExample2">
          <div class="answerDiv">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </p>
    </div>
  );
}

export default Faq;
