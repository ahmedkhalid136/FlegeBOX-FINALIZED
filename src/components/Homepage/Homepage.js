import React from "react";
import "./Homepage.css";
import Button from "../button/Button";
import Title from "./Title.js";
import Works from "./Works.js";
import Benifits from "./Benifits";

function Homepage() {
  return (
    <div>
      <Title />
      <Works />
      <Benifits />
    </div>
  );
}

export default Homepage;
