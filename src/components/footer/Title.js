import React from "react";

export default function Title() {
  return (
    <div
      className="footer-title"
      style={{ position: "relative", zIndex: "1000" }}
    >
      <div className="revert container">
        <h1>Always Reachable For You</h1>
        <br />
        <br />
        <div className="row">
          <div className="col-lg-4 phone-column" style={{ textAlign: "left" }}>
            <span>
              <i class="fas fa-phone-volume"></i> 040 123 45 67
            </span>
          </div>
          <div className="col-lg-4">
            <span>
              <i class="far fa-envelope"></i> Test@MyPflegebox
            </span>
          </div>
          <div className="col-lg-4">
            <div className="social-icon-background">
              <i class="fab fa-instagram"></i>
            </div>
            <div className="social-icon-background">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div className="social-icon-background">
              <i class="fab fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
