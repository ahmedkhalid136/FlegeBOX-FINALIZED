import React from "react";
import "./styles.css";
import Title from "./Title";
import ImageSection from "./ImageSection";
import Body from "./Body";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
function whymypflegebox() {
  return (
    <div className="mobile-background-color">
      {/* <Header active="whymypflegebox" /> */}
      <Header title="whymypflegebox" />
      <Title />
      <Body />
      <ImageSection />
      <Footer />
    </div>
  );
}

export default whymypflegebox;
