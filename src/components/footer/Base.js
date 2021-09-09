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
            <p>
              <hr
                style={{
                  width: "20%",
                  color: "#F87433",
                  backgroundColor: "#F87433",
                  height: 3,
                  borderColor: "#F87433",
                  opacity: 1,
                }}
              ></hr>
            </p>
            <a>Why MyPflegebox ?</a>
            <br /> <br />
            <a>Blog</a> <br /> <br />
            <a>FAQ</a> <br /> <br />
            <a>Contact</a>
          </div>
          <div className="col-lg-4">
            <h5>Shipping Partner</h5>
            <p>
              <hr
                style={{
                  width: "20%",
                  color: "#F87433",
                  backgroundColor: "#F87433",
                  height: 3,
                  borderColor: "#F87433",
                  opacity: 1,
                }}
              ></hr>
            </p>
          </div>
          <div className="col-lg-4">
            <h5>Payment Methods</h5>
            <p>
              <hr
                style={{
                  width: "20%",
                  color: "#F87433",
                  backgroundColor: "#F87433",
                  height: 3,
                  borderColor: "#F87433",
                  opacity: 1,
                }}
              ></hr>
            </p>
          </div>
        </div>
        <p>
          <hr
            style={{
              color: "#F87433",
              backgroundColor: "#F87433",
              height: 3,
              borderColor: "#F87433",
              opacity: 1,
            }}
          ></hr>
        </p>
        <div style={{ textAlign: "center" }}>
          <h2 className="copyright-text">
            © 2021 MyPflegebox. All right reserved
          </h2>
        </div>
      </div>
    </div>
  );
}
