import React from "react";
import "./Homepage.css";
import Button from "../button/Button";
import Title from "./Title.js";
import Works from "./Works.js";
import Benifits from "./Benifits";
import Relieve from "./Relieve";
import Header from "../Header/Header";
import Footer from "../footer/Footer";

function Homepage() {
  return (
    <div className="mobile-background-color">
      <Header title="Home" />
      {/* <Title /> */}
      {/* <Works /> */}
      <Benifits />
      <Relieve />
      <Footer />
    </div>
  );
}

export default Homepage;
