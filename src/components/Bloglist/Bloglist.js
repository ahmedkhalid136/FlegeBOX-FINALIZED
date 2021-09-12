import React from "react";
import "./Bloglist.css";
import leftimage from "../../Pictures/alexander-rotker-bydMjNfuO_4-unsplash.jpg";
import mainImage from "../../Pictures/hunter-newton--xNgyZfX1gs-unsplash.jpg";
import BannerImage from "../../Pictures/kelly-sikkema-5R5Trsu1aIM-unsplash.jpg";
import Image from "../../Pictures/kelli-mcclintock-GopRYASfsOc-unsplash.jpg";
import Image2 from "../../Pictures/girl-with-red-hat-Epw-SqZYeyw-unsplash.jpg";
import Image12 from "../../Pictures/magic-mind-OSk4lO--UsA-unsplash.jpg";
import Footer from "../footer/Footer";
import Header from "../Header/Header";

function Bloglist() {
  return (
    <div>
      <Header title="bloglist" />
      <div className="container bloglist-title-section">
        <div className="row">
          <div className="col-lg-6">
            <img className="left-bloglist-image" src={leftimage} />
          </div>
          <div
            className="col-lg-6 right-bloglist-text"
            style={{ textAlign: "left" }}
          >
            <h2>
              Lorem ipsum dolor sit amet,
              <br /> consectetur dolor consectetur
              <br />
              adipiscing elit sed do
            </h2>
            <br />
            <p>
              We want to relieve the burden on those affected so that
              <br /> they can concentrate on the finer things in life and have
              <br /> more time for togetherness...
            </p>
            <br />
            <p>
              <i class="far fa-clock"></i> 4 MIN |{" "}
              <i class="far fa-calendar-alt"></i> JULY 20, 2021
            </p>
          </div>
        </div>

        {/* POPULAR ARTICLE SECTION */}

        <div className="container popular-article-section">
          <div style={{ textAlign: "center", padding: "90px 0" }}>
            <h3>Popular Article</h3>
          </div>
          <div className="row">
            <div className="col-lg-4" style={{ textAlign: "left" }}>
              <a href="/Blogdetails">
                <img src={Image2} className="bloglist-image" />
                <br />
                <br />
                <h4>Lorem ipsum dolor sit amet</h4>
                <br />
                <p>
                  We want everyone in need of care and their relatives to
                  receive the benefits...{" "}
                </p>
                <br />
                <p>
                  <i class="far fa-clock"></i> 4 MIN |{" "}
                  <i class="far fa-calendar-alt"></i> JULY 20, 2021
                </p>
              </a>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
              <a href="/Blogdetails">
                <img src={Image2} className="bloglist-image" />
                <br />
                <br />
                <h4>Lorem ipsum dolor sit amet</h4>
                <br />
                <p>
                  We want everyone in need of care and their relatives to
                  receive the benefits...{" "}
                </p>
                <br />
                <p>
                  <i class="far fa-clock"></i> 4 MIN |{" "}
                  <i class="far fa-calendar-alt"></i> JULY 20, 2021
                </p>
              </a>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
              <a href="/Blogdetails">
                <img src={Image2} className="bloglist-image" />
                <br />
                <br />
                <h4>Lorem ipsum dolor sit amet</h4>
                <br />
                <p>
                  We want everyone in need of care and their relatives to
                  receive the benefits...{" "}
                </p>
                <br />
                <p>
                  <i class="far fa-clock"></i> 4 MIN |{" "}
                  <i class="far fa-calendar-alt"></i> JULY 20, 2021
                </p>
              </a>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
              <a href="/Blogdetails">
                <img src={Image2} className="bloglist-image" />
                <br />
                <br />
                <h4>Lorem ipsum dolor sit amet</h4>
                <br />
                <p>
                  We want everyone in need of care and their relatives to
                  receive the benefits...{" "}
                </p>
                <br />
                <p>
                  <i class="far fa-clock"></i> 4 MIN |{" "}
                  <i class="far fa-calendar-alt"></i> JULY 20, 2021
                </p>
              </a>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
              <a href="/Blogdetails">
                <img src={Image2} className="bloglist-image" />
                <br />
                <br />
                <h4>Lorem ipsum dolor sit amet</h4>
                <br />
                <p>
                  We want everyone in need of care and their relatives to
                  receive the benefits...{" "}
                </p>
                <br />
                <p>
                  <i class="far fa-clock"></i> 4 MIN |{" "}
                  <i class="far fa-calendar-alt"></i> JULY 20, 2021
                </p>
              </a>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
              <a href="/Blogdetails">
                <img src={Image2} className="bloglist-image" />
                <br />
                <br />
                <h4>Lorem ipsum dolor sit amet</h4>
                <br />
                <p>
                  We want everyone in need of care and their relatives to
                  receive the benefits...{" "}
                </p>
                <br />
                <p>
                  <i class="far fa-clock"></i> 4 MIN |{" "}
                  <i class="far fa-calendar-alt"></i> JULY 20, 2021
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Bloglist;
