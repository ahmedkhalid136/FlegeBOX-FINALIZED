import React from "react";
import "./Blogdetails.css";
import mainImage from "../../Pictures/hunter-newton--xNgyZfX1gs-unsplash.jpg";
import BannerImage from "../../Pictures/kelly-sikkema-5R5Trsu1aIM-unsplash.jpg";
import Image from "../../Pictures/kelli-mcclintock-GopRYASfsOc-unsplash.jpg";
import Image2 from "../../Pictures/girl-with-red-hat-Epw-SqZYeyw-unsplash.jpg";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
function Blogdetails() {
  return (
    <div>
      <Header title="BLOG" />
      <div class="container">
        <div>
          <h1 className="styleHeader">
            Lorem ipsum dolor sit amet, consetutor dolor consectetur adipiscing
            elit
          </h1>
        </div>
        <div className="datee">4 Min | july 20,2021</div>
        <div>
          <img src={mainImage} className="Myimage" />
        </div>
        <p className="paraText">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
          <br />
          <br />
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
          <br />
          <br />
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="container">
          <h2>you may also like this article</h2>
          <div className="row articleImgdiv ">
            <div className="col-lg-4 col-md-4 col-xs-4  ">
              <img src={Image2} className="articleImg" />
              <p className="texts">
                <b>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </b>
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry'
              </p>
              <p className="datee">4 Min | july 20,2021</p>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-4  ">
              <img src={BannerImage} className="articleImg" />
              <p className="texts">
                <b>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </b>
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry'
              </p>
              <p className="datee">4 Min | july 20,2021</p>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-4  ">
              <img src={Image} className="articleImg" />
              <p className="texts">
                <b>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </b>
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry'
              </p>
              <p className="datee">4 Min | july 20,2021</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blogdetails;
