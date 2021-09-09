import React, { useEffect } from "react";
// import { li } from "react-router-dom";
import { useState } from "react";

import "./Header.css";
export default function Header(props) {
  const [Active, setActive] = useState("");
  useEffect(() => {
    if (props.title == "whymypflegebox") setActive("2");
    else if (props.title == "Home") setActive("1");
    else if (props.title == "BLOG") setActive("3");
    else if (props.title == "FAQ") setActive("4");
  });

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            myPflegebox
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ms-auto navbarlis">
                <li
                  className={
                    Active == "1"
                      ? "nav-item nav-li class-active"
                      : "nav-item nav-li"
                  }
                  to="/Homepage"
                >
                  <p>HOME</p>
                </li>
                <li
                  className={
                    Active == "2"
                      ? "nav-item nav-li class-active"
                      : "nav-item nav-li"
                  }
                  to="/whymypflegebox"
                >
                  <p> WHY MY PFLEGE BOX</p>
                <li>
                <li
                  className={
                    Active == "3"
                      ? "nav-item nav-li class-active"
                      : "nav-item nav-li"
                  }
                  to="/blogdetails"
                >
                  <p>BLOG</p>
                </li>
                <li
                  className={
                    Active == "4"
                      ? "nav-item nav-li class-active"
                      : "nav-item nav-li"
                  }
                  to="/FAQ"
                >
                  <p>FAQ</p>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
