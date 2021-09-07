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
            <br /> <br />
            <a>Blog</a> <br /> <br />
            <a>FAQ</a> <br /> <br />
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

        <hr style={{ width: "100%", backgroundColor: "white" }} />
        <div style={{ textAlign: "center" }}>
          <h2 className="copyright-text">
            © 2021 MyPflegebox. All right reserved
          </h2>
        </div>
      </div>
    </div>
  );
}
