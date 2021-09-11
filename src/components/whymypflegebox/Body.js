import React from "react";

export default function Body() {
  return (
    <div>
      <div className="bodySection">
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
            <div className="icon-background">
              <i class="fas fa-paper-plane icons blue-icons"></i>
            </div>
            <br />
            <br />
            <h3>Reliable Delivery</h3>
            <p>
              Free shipping every month and <br /> an time at your home or at{" "}
              <br /> your care service.
            </p>
          </div>
          <div className="col-lg-3">
            <div className="icon-background">
              <i class="fas fa-address-card icons blue-icons"></i>
            </div>
            <br />
            <br />
            <h3>No Formalities</h3>
            <p>
              We take care of the application <br /> and billing with the
              nursing <br /> care insurrance.
            </p>
          </div>
          <div className="col-lg-3">
            <div className="icon-background">
              <i class="fas fa-gem icons blue-icons"></i>
            </div>
            <br />
            <br />
            <h3>Quality</h3>
            <p>
              We supply you with high <br /> quality branded products.
            </p>
          </div>
          <div className="col-lg-3">
            <div className="icon-background">
              <i class="fas fa-envelope icons blue-icons"></i>
            </div>
            <br />
            <br />
            <h3>Prescription Free</h3>
            <p>
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
