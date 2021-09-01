import React from "react";
import "./styles.css";
import Title from "./Title";
import ImageSection from "./ImageSection";
import Body from "./Body";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
function whymypflegebox() {
  return (
    <div>
      {/* <Header active="whymypflegebox" /> */}
      <Title />
      <Body />
      <ImageSection />
      <Footer />
    </div>
  );
}

export default whymypflegebox;
