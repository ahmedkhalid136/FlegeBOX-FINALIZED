import React from "react";

export default function Body() {
  return (
    <div>
      <div className="bodySection" style={{ position: "relative" }}>
        <img
          src="./Images/Union.png"
          style={{ position: "absolute", top: "0", left: "0" }}
        />
        <h1>Why MyPflegebox ?</h1>
        <div>
          <p>
            Batteries are nothing more than devices that store chemical energy
            and convert it into electrical energy. They have four <br />
            main parts: the cathode, anode, electrolyte, and separator.
            <br />
            <br />
            The cathode and anode are electrodes. Our electrical current is
            produced when electrons are passed from one
            <br />
            electrode to the other. In this case, electrons are passed from the
            negatively charged anode to the positively charged.
            <br />
            cathode. The role of the two electrodes, then, is to produce our
            electric current
          </p>
        </div>
      </div>
      <div className="container icon-section">
        <div className="row">
          <div className="col-lg-3">
            <img src="./Images/Group 12015.png" />
            <br />
            <br />
            <h3>Reliable Delivery</h3>
            <p style={{ marginBottom: "30px" }}>
              Free shipping every month and <br /> an time at your home or at{" "}
              <br /> your care service.
            </p>
          </div>
          <div className="col-lg-3">
            <img src="./Images/Group 12020.png" />
            <br />
            <br />
            <h3>No Formalities</h3>
            <p style={{ marginBottom: "30px" }}>
              We take care of the application <br /> and billing with the
              nursing <br /> care insurrance.
            </p>
          </div>
          <div className="col-lg-3">
            <img src="./Images/Group 12014.png" />
            <br />
            <br />
            <h3>Quality</h3>
            <p style={{ marginBottom: "30px" }}>
              We supply you with high <br /> quality branded products.
            </p>
          </div>
          <div className="col-lg-3">
            <img src="./Images/Group 12023.png" />
            <br />
            <br />
            <h3>Prescription Free</h3>
            <p style={{ marginBottom: "30px" }}>
              You do not need a prescription from <br /> your doctor.
            </p>
          </div>
        </div>
      </div>
      <div className="buttonDiv">
        <br />
        <br />
        <a href="/box">
          {" "}
          <button>REQUEST CARE BOX</button>
        </a>
      </div>
    </div>
  );
}
