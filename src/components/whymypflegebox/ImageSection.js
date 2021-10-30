import React from "react";
import Image1 from "../../Pictures/rosebox-BFdSCxmqvYc-unsplash.jpg";
import Image2 from "../../Pictures/mealpro-dd1M0Ji9xHQ-unsplash.jpg";

function OD() {
  return (
    <div style={{ padding: "10px", display: "inline", zIndex: "10" }}>
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="2.88136" cy="2.88136" r="2.88136" fill="#FBB897" />
      </svg>
    </div>
  );
}

export default function ImageSection() {
  return (
    <div className="container ImageSection">
      <div className="row">
        <div
          className="col-lg-6"
          style={{ textAlign: "right", position: "relative", zIndex: "100" }}
        >
          <div
            className="left-red-dot"
            style={{
              textAlign: "left",
              position: "absolute",
              left: "150px",
              top: "-50px",
              zIndex: "-1",
            }}
          >
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <br />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <br />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <br />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <br />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <br />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <br />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
          </div>
          <div>
            <img
              className="why-my-img"
              src={Image1}
              style={{ zIndex: "100" }}
            />
          </div>
        </div>
        <div
          className="col-lg-6"
          style={{ textAlign: "left", position: "relative", zIndex: "100" }}
        >
          <img
            src={Image2}
            className="secondImage why-my-img"
            style={{ zIndex: "1000", position: "relative" }}
          />
          <div
            className="left-red-dot"
            style={{
              zIndex: "",
              textAlign: "right",
              position: "absolute",
              right: "150px",
              bottom: "-50px",
              zIndex: "-1",
            }}
          >
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <br />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <br />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <br />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <br />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <br />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <br />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
            <OD />
          </div>
        </div>
      </div>
    </div>
  );
}
