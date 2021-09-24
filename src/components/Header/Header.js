import React, { useEffect } from "react";
// import { li } from "react-router-dom";
import { useState } from "react";

import "./Header.css";
export default function Header(props) {
  const [Active, setActive] = useState("");
  useEffect(() => {
    if (props.title == "whymypflegebox") setActive("2");
    else if (props.title == "Home") setActive("1");
    else if (props.title == "bloglist") setActive("3");
    else if (props.title == "FAQ") setActive("4");
  });

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="/home">
            <img src="./Images/LOGO.svg"></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <div class="navbar-nav ms-auto navbarlis">
              <li
                className={
                  Active == "1"
                    ? "nav-item nav-li class-active"
                    : "nav-item nav-li"
                }
              >
                <a className="nav-link" href="/">
                  <p>HOME</p>
                </a>
              </li>
              <li
                className={
                  Active == "2"
                    ? "nav-item nav-li class-active"
                    : "nav-item nav-li"
                }
              >
                <a className="nav-link" href="/whymypflegebox">
                  <p>WHY MY PFLEGEBOX</p>
                </a>
              </li>
              <li
                className={
                  Active == "3"
                    ? "nav-item nav-li class-active"
                    : "nav-item nav-li"
                }
              >
                <a className="nav-link" href="/bloglist">
                  <p>BLOG</p>
                </a>
              </li>
              <li
                className={
                  Active == "4"
                    ? "nav-item nav-li class-active"
                    : "nav-item nav-li"
                }
              >
                <a className="nav-link" href="/faq">
                  <p>FAQ</p>
                </a>
              </li>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
