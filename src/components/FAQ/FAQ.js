import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./FAQ.css";
import Add from "@material-ui/icons/Add";
import Header from "../Header/Header";
import Footer from "../footer/Footer";

function Faq() {
  const [Color, setColor] = useState(true);
  const [Color2, setColor2] = useState(true);
  const [Color3, setColor3] = useState(true);
  const [Color4, setColor4] = useState(true);
  const [Color5, setColor5] = useState(true);
  const [Color6, setColor6] = useState(true);
  const [Color7, setColor7] = useState(true);

  const [getIcon, setIcon] = useState(true);
  const [getIcon2, setIcon2] = useState(true);
  const [getIcon3, setIcon3] = useState(true);
  const [getIcon4, setIcon4] = useState(true);
  const [getIcon5, setIcon5] = useState(true);
  const [getIcon6, setIcon6] = useState(true);
  const [getIcon7, setIcon7] = useState(true);

  return (
    <div>
      <Header title="FAQ" />
      <div className="titleSection1 mobile-background-color">
        <h1 className="breadcrumbs1">Hello can we help you?</h1>
      </div>
      <div className="mainDiv1 container">
        <p className="questionDiv">
          <h6
            className={Color === true ? "text1" : "activeText1"}
            onClick={() => {
              setIcon(!getIcon);
              setColor(!Color);
            }}
            style={{ color: Color }}
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            {getIcon === true ? <AddIcon /> : <RemoveIcon />}
            click
          </h6>
          <div class="collapse" id="collapseExample">
            <div class="answerDiv">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </p>
        {/* Second div */}

        <p className="questionDiv">
          <h6
            className={Color2 === true ? "text1" : "activeText1"}
            onClick={() => {
              setIcon2(!getIcon2);
              setColor2(!Color2);
            }}
            style={{ color: Color2 }}
            data-toggle="collapse"
            href="#collapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample1"
          >
            {getIcon2 === true ? <AddIcon /> : <RemoveIcon />}
            Link with href
          </h6>
          <div class="collapse" id="collapseExample1">
            <div class="answerDiv">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </p>
        {/* THIRD DIVV */}
        <p className="questionDiv">
          <h6
            className={Color3 === true ? "text1" : "activeText1"}
            onClick={() => {
              setIcon3(!getIcon3);
              setColor3(!Color3);
            }}
            style={{ color: Color3 }}
            data-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            {getIcon3 === true ? <AddIcon /> : <RemoveIcon />}
            Link with href
          </h6>
          <div class="collapse" id="collapseExample2">
            <div class="answerDiv">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </p>
        {/* Fourth div */}
        <p className="questionDiv">
          <h6
            className={Color4 === true ? "text1" : "activeText1"}
            onClick={() => {
              setIcon4(!getIcon4);
              setColor4(!Color4);
            }}
            style={{ color: Color4 }}
            data-toggle="collapse"
            href="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            {getIcon4 === true ? <AddIcon /> : <RemoveIcon />}
            Link with href
          </h6>
          <div class="collapse" id="collapseExample3">
            <div class="answerDiv">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </p>
        {/* Fifth div */}
        <p className="questionDiv">
          <h6
            className={Color5 === true ? "text1" : "activeText1"}
            onClick={() => {
              setIcon5(!getIcon5);
              setColor5(!Color5);
            }}
            style={{ color: Color5 }}
            data-toggle="collapse"
            href="#collapseExample4"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            {getIcon5 === true ? <AddIcon /> : <RemoveIcon />}
            Link with href
          </h6>
          <div class="collapse" id="collapseExample4">
            <div class="answerDiv">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </p>

        {/* sixth div */}
        <p className="questionDiv">
          <h6
            className={Color6 === true ? "text1" : "activeText1"}
            onClick={() => {
              setIcon6(!getIcon6);
              setColor6(!Color6);
            }}
            style={{ color: Color6 }}
            data-toggle="collapse"
            href="#collapseExample5"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            {getIcon6 === true ? <AddIcon /> : <RemoveIcon />}
            Link with href
          </h6>
          <div class="collapse" id="collapseExample5">
            <div class="answerDiv">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </p>
        {/* seventh div */}
        <p className="questionDiv">
          <h6
            className={Color7 === true ? "text1" : "activeText1"}
            onClick={() => {
              setIcon7(!getIcon7);
              setColor7(!Color7);
            }}
            style={{ color: Color7 }}
            data-toggle="collapse"
            href="#collapseExample6"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            {getIcon7 === true ? <AddIcon /> : <RemoveIcon />}
            Link with href
          </h6>
          <div class="collapse" id="collapseExample6">
            <div class="answerDiv">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </p>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Faq;
