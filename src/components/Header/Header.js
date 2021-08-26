import React from "react";
import { useState } from "react";

export default function Header(props) {
  const [active, setActive] = useState("");
  function activeMap() {
    if (props.active == "whymypflegebox") {
      setActive("whymypflegebox");
    }
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <a class="nav-item nav-link" href="#">
              HOME
            </a>
            <a class="nav-item nav-link" href="#">
              WHY MY PFLEGE BOX
            </a>
            <a class="nav-item nav-link" href="#">
              BLOG
            </a>
            <a class="nav-item nav-link" href="#">
              FAQ
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
