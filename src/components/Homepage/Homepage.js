import React from "react";
import "./Homepage.css";
import Button from "../button/Button";
import Title from "./Title.js";
import Works from "./Works.js";
import Benifits from "./Benifits";
import Relieve from "./Relieve";

function Homepage() {
  return (
    <div>
      <Title />
      <Works />
      <Benifits />
      <Relieve />
    </div>
  );
}

export default Homepage;
