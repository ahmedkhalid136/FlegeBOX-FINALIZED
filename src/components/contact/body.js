import React from "react";

export default function body() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h3>What is your Question</h3>
          <input className="input-field" placeholder="Your Name" />
          <input className="input-field" placeholder="Email Address" />
          <textarea className="text-field" placeholder="Message" rows="6" />
        </div>
        <div className="col-lg-6"></div>
      </div>
    </div>
  );
}
