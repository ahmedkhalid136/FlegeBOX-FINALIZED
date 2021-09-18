import React from "react";

export default function Works() {
  return (
    <div className="container-fluid Works">
      <h2>How Your MyPflegebox Works</h2>
      <div className="row icons-container">
        <div className="col-lg-3 row">
          <div
            className="col-lg-10"
            style={{ textAlign: "center", margin: "0", padding: "0" }}
          >
            <div className="icon-background">
              <i class="fas fa-shopping-cart icons"></i>
            </div>

            <h4 className="iconsHeading">
              1. Wish core box <br /> select
            </h4>
          </div>
          <i class="fas fa-arrow-right arrow col-lg-2 right-arrow"></i>
          <i class="fas fa-arrow-down arrow down-arrow col-lg-2"></i>
        </div>

        <div className="col-lg-3 row">
          <div className="col-lg-10">
            <div className="icon-background">
              <i class="far fa-address-card icons"></i>
            </div>
            <h4 className="iconsHeading">
              2. Request online fill out <br /> and send{" "}
            </h4>
          </div>
          <i class="fas fa-arrow-right arrow col-lg-2 right-arrow"></i>
          <i class="fas fa-arrow-down arrow down-arrow col-lg-2"></i>
        </div>
        <div className="col-lg-3 row">
          <div className="col-lg-10">
            <div className="icon-background">
              <i class="fas fa-paperclip icons"></i>
            </div>
            <h4 className="iconsHeading">
              3. We take over Application & billing with the nursing care
              insurance
            </h4>
          </div>
          <i class="fas fa-arrow-right arrow col-lg-2 right-arrow"></i>
          <i class="fas fa-arrow-down arrow down-arrow col-lg-2"></i>
        </div>
        <div className="col-lg-3 row">
          <div className="col-lg-12">
            <div className="icon-background">
              <i class="fas fa-truck icons"></i>
            </div>
            <h4 className="iconsHeading">
              4. Receive monthly your <br />
              free care box
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
