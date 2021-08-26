import React, { useState } from "react";
import "./FAQ.css";

function Faq() {
  const [getIcon, setIcon] = useState(true);
  const [getIcon2, setIcon2] = useState(true);
  const [getIcon3, setIcon3] = useState(true);
  return (
    <div>
      <p>
        <a
          class="btn question"
          onClick={()=>setIcon(!getIcon)}
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <i class={getIcon===true ?"fas fa-plus":"fas fa-minus"}></i> Link with href
        </a>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
      <p>
        <a
          class="btn question"
          onClick={()=>setIcon2(!getIcon2)}
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <i class={getIcon2===true ?"fas fa-plus":"fas fa-minus"}></i> Link with href
        </a>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
      <p>
        <a
          class="btn question"
          onClick={()=>setIcon3(!getIcon3)}
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <i class={getIcon3===true ?"fas fa-plus":"fas fa-minus"}></i> Link with href
        </a>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
    </div>
  );
}

export default Faq;
