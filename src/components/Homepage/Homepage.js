import React from "react";
import "./Homepage.css";
import Button from "../button/Button";
import Title from "./Title.js";
import Works from "./Works.js";
import Benifits from "./Benifits";
import Relieve from "./Relieve";
import Header from "../Header/Header";

function Homepage() {
  return (
    <div>
      <Header title="Home"/>
      <Title />
      <Works />
      <Benifits />
      <Relieve />
    </div>
  );
}

export default Homepage;
