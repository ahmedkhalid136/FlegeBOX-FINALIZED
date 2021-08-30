import React from "react";

export default function Works() {
  return (
    <div className="container Works">
      <h2>How Your MyPflegebox Works</h2>
      <div className="row icons-container">
        <div className="col-lg-3 row">
          <div className="col-lg-10" style={{ textAlign: "center" }}>
            <div className="icon-background">
              <i class="fas fa-shopping-cart icons"></i>
            </div>
            <h3>
              1. Wish core box <br /> select
            </h3>
          </div>
          <i class="fas fa-arrow-right arrow col-lg-2"></i>
        </div>

        <div className="col-lg-3 row">
          <div className="col-lg-10">
            <div className="icon-background">
              <i class="far fa-address-card icons"></i>
            </div>
            <h3>
              2. Request online fill out <br /> and send{" "}
            </h3>
          </div>
          <i class="fas fa-arrow-right arrow col-lg-2"></i>
        </div>
        <div className="col-lg-3 row">
          <div className="col-lg-10">
            <div className="icon-background">
              <i class="fas fa-paperclip icons"></i>
            </div>
            <h3>
              3. We take over <br />
              Application <br /> & billing with the <br />
              nursing care insurance
            </h3>
          </div>
          <i class="fas fa-arrow-right arrow col-lg-2"></i>
        </div>
        <div className="col-lg-3 row">
          <div className="col-lg-12">
            <div className="icon-background">
              <i class="fas fa-truck icons"></i>
            </div>
            <h3>
              4. Receive monthly your <br />
              free care box
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
