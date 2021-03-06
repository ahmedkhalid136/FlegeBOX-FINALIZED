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
    <div className="footer-base" style={{ position: "relative" }}>
      <img
        className="orange-pattern4"
        src="./Images/Union2.png"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
        }}
      />
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
            <br />
            <a href="/whymypflegebox">Why MyPflegebox ?</a>
            <br /> <br />
            <a href="/bloglist">Blog</a> <br /> <br />
            <a href="/faq">FAQ</a> <br /> <br />
            <a href="/contact">Contact</a>
            <br />
            <hr
              className="display-rule"
              style={{
                color: "rgba(255, 255, 255, 0.2)",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                height: 3,
                borderColor: "rgba(255, 255, 255, 0.2)",
                opacity: 1,
                marginTop: "30px",
                marginBottom: "40px",
              }}
            ></hr>
          </div>
          <div className="col-lg-4">
            <h5>Shipping Partner</h5>
            <p>
              <hr
                style={{
                  width: "15%",
                  color: "#F87433",
                  backgroundColor: "#F87433",
                  height: 3,
                  borderColor: "#F87433",
                  opacity: 1,
                }}
              ></hr>
            </p>
            <img
              src="./Images/DHL_logo_rgb.png"
              style={{ width: "91px", height: "40px" }}
            />
            <hr
              className="display-rule"
              style={{
                color: "rgba(255, 255, 255, 0.2)",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                height: 3,
                borderColor: "rgba(255, 255, 255, 0.2)",
                opacity: 1,
                marginTop: "30px",
                marginBottom: "40px",
              }}
            ></hr>
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
            <img
              src="./Images/Group 12049.png"
              style={{ width: "247px", height: "30px" }}
            />
          </div>
        </div>
        <p>
          <hr
            style={{
              color: "rgba(255, 255, 255, 0.2)",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              height: 3,
              borderColor: "rgba(255, 255, 255, 0.2)",
              opacity: 1,
              marginTop: "50px",
            }}
          ></hr>
        </p>
        <div style={{ textAlign: "center" }}>
          <h2 className="copyright-text">
            ?? 2021 MyPflegebox. All right reserved
          </h2>
        </div>
      </div>
    </div>
  );
}
