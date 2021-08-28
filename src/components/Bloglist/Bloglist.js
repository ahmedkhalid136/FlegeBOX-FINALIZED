import React from "react";
import "./Bloglist.css";
import leftimage from "../../Pictures/alexander-rotker-bydMjNfuO_4-unsplash.jpg";
import mainImage from "../../Pictures/hunter-newton--xNgyZfX1gs-unsplash.jpg";
import BannerImage from "../../Pictures/kelly-sikkema-5R5Trsu1aIM-unsplash.jpg";
import Image from "../../Pictures/kelli-mcclintock-GopRYASfsOc-unsplash.jpg";
import Image2 from "../../Pictures/girl-with-red-hat-Epw-SqZYeyw-unsplash.jpg";
import Image12 from "../../Pictures/magic-mind-OSk4lO--UsA-unsplash.jpg";


function Bloglist() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <img src={leftimage} className="Myimage1" />
          </div>
          <div className="col-lg-6">
            <p className="texts1">
              <b>
                Lorem Ipsum is simply dummy text of the printing and typesetting
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
      <div className="container">
        <h2 className="styleHeader1">you may also like this article</h2>
        <div className="row articleImgdiv ">
          <div className="col-lg-4 col-md-4 col-xs-4  ">
            <img src={Image2} className="articleImg" />
            <p className="texts1">
              <b>
                Lorem Ipsum is simply dummy text of the printing and typesetting
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
            <p className="texts1">
              <b>
                Lorem Ipsum is simply dummy text of the printing and typesetting
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
            <p className="texts1">
              <b>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </b>
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry'
            </p>
            <p className="datee">4 Min | july 20,2021</p>
          </div>
        </div>
  {/* second  */}
        <div className="row articleImgdiv ">
          <div className="col-lg-4 col-md-4 col-xs-4  ">
            <img src={Image12} className="articleImg" />
            <p className="texts1">
              <b>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </b>
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry'
            </p>
            <p className="datee">4 Min | july 20,2021</p>
          </div>
          <div className="col-lg-4 col-md-4 col-xs-4  ">
            <img src={mainImage} className="articleImg" />
            <p className="texts1">
              <b>
                Lorem Ipsum is simply dummy text of the printing and typesetting
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
            <p className="texts1">
              <b>
                Lorem Ipsum is simply dummy text of the printing and typesetting
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
  );
}

export default Bloglist;
