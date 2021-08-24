import React from "react";
import "./Homepage.css";
import Button from "../button/Button";
import FledgeboxWorks from "./fledgeboxWorks";
function Homepage() {
  return (
    <div>
      <div className="container-fluid">
        <div className="left"></div>
        <div className="right">
          <div className=" p-2 col-example">
            <p className="Para">The way to your free care box!</p>
            <Button />
          </div>
        </div>
      </div>
      <FledgeboxWorks />
    </div>
  );
}

export default Homepage;
