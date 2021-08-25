import React from "react";
import "./Homepage.css";
import Button from "../button/Button";
import FledgeboxWorks from "./fledgeboxWorks";
import Benefits from "./Benefits";
import Relieveyou from "./Relieveyou";
function Homepage() {
  return (
    <div>
      <div className="row" >
        <div className=" col-lg-6 left"></div>
        <div className=" col-lg-6 right">
          <div className=" p-2 col-example">
            <p className="Para">The way to your free care box!</p>
            <Button />
          </div>
        </div>
      </div>
      <FledgeboxWorks />
      <Benefits />
      <Relieveyou />
    </div>
  );
}

export default Homepage;
