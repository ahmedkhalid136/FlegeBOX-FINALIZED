import React from "react";

export default function Base() {
  return (
    <div className="footer-base">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h5>MyPflegebox</h5>
            <hr />
            <a>Why MyPflegebox ?</a>
            <br />
            <a>Blog</a> <br />
            <a>FAQ</a> <br />
            <a>Contact</a>
          </div>
          <div className="col-lg-4">
            <h5>Shipping Partner</h5>
            <hr />
          </div>
          <div className="col-lg-4">
            <h5>Payment Methods</h5>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
