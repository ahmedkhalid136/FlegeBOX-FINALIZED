import React from "react";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5,
    }}
  />
);

export default function Base() {
  return (
    <div className="footer-base">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h5>MyPflegebox</h5>
            <ColoredLine color={"#f87433"} />
            <a>Why MyPflegebox ?</a>
            <br /> <br />
            <a>Blog</a> <br /> <br />
            <a>FAQ</a> <br /> <br />
            <a>Contact</a>
          </div>
          <div className="col-lg-4">
            <h5>Shipping Partner</h5>
            <hr className="line" />
          </div>
          <div className="col-lg-4">
            <h5>Payment Methods</h5>
            <hr className="line" />
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
