import React from "react";
import BannerImage from "../../Pictures/hunter-newton--xNgyZfX1gs-unsplash.jpg";

export default function Title() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 padding-0">
          <img src={BannerImage} className="home-img" />
        </div>
        <div className="col-lg-6 home-banner padding-0">
          <div>
            <h2>
              The way to your <br /> Free Care Box
            </h2>
            <br />
            <a href="/box">
              <button>REQUEST CARE BOX</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
