import React, { useState } from "react";
import "./FAQ.css";

function Faq() {
  const [getIcon, setIcon] = useState(true);

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
    </div>
  );
}

export default Faq;
