import React from "react";
import "./styles.css";
import Title from "./Title";
import ImageSection from "./ImageSection";
import Body from "./Body";
import Header from "../Header/Header";
function whymypflegebox() {
  return (
    <div>
      <Header active="whymypflegebox" />
      <Title />
      <Body />
      <ImageSection />
    </div>
  );
}

export default whymypflegebox;
