import React from "react";

export default function Benifits() {
  return (
    <div className="benifits-section">
      <div className="container" style={{ justifyContent: "space-around" }}>
        <h1>Your Benifits</h1>
        <div className="row">
          <div className="col-lg-4">
            <div className="benifits-columns">
              <div className="icon-background">
                <i class="fas fa-euro-sign icons blue-icons"></i>
              </div>
              <h4>Cost Absorption</h4>
              <p>
                People in need of care currently have a right to care aids worth
                up to €60.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="benifits-columns">
              <div className="icon-background">
                <i class="fas fa-euro-sign icons blue-icons"></i>
              </div>
              <h4>Reliable Delivery</h4>
              <p>
                Free shipping every month and an time at your home or at your
                care service.
              </p>
            </div>
            <br />
          </div>
          <div className="col-lg-4">
            <div className="benifits-columns">
              <div className="icon-background">
                <i class="fas fa-euro-sign icons blue-icons"></i>
              </div>
              <h4>Quality</h4>
              <p>We supply you with high quality branded products</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="benifits-columns">
              <div className="icon-background">
                <i class="fas fa-euro-sign icons blue-icons"></i>
              </div>
              <h4>No Formalities</h4>
              <p>
                We take care of the application and billing with the nursing
                care insurance.{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="benifits-columns">
              <div className="icon-background">
                <i class="fas fa-euro-sign icons blue-icons"></i>
              </div>
              <h4>Without Contract Commitment</h4>
              <p>The care box can be cancelled at any time.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="benifits-columns">
              <div className="icon-background">
                <i class="fas fa-euro-sign icons blue-icons"></i>
              </div>
              <h4>Prescription Free</h4>
              <p>You do not need a prescription from your doctor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
