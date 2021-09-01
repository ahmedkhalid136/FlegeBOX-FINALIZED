import React from "react";
import image1 from "../../Pictures/kelly-sikkema-5R5Trsu1aIM-unsplash.jpg";
import image2 from "../../Pictures/kelli-mcclintock-GopRYASfsOc-unsplash.jpg";
import image3 from "../../Pictures/magic-mind-OSk4lO--UsA-unsplash.jpg";
import image4 from "../../Pictures/girl-with-red-hat-Epw-SqZYeyw-unsplash.jpg";

export default function Relieve() {
  return (
    <div className="container relieve-section">
      <div>
        <h1>We Are Here To Relieve You</h1>
        <p>
          We are not only concerened with the current situation in nursing, but
          also with the future. Fo us, the focus is on the people in care -
          those in need of care, caregivers, nurses and family caregivers
        </p>
      </div>

      <div className="row relieve-image-section">
        <div className="col-lg-3">
          <img src={image1} className="relieve-image" />
          <h4>We want to enlighten</h4>
          <p>
            {" "}
            We want everyone in need of care and their relatives to receive the
            benefits to which they are legally entitled.{" "}
          </p>
        </div>
        <div className="col-lg-3">
          <img src={image2} className="relieve-image" />
          <h4>We want to relieve</h4>
          <p>
            We want to relieve the burden on those affected so that they can
            concentrate on the finer things in life and have more time for
            togetherness, Forthis reason, we take care of all the formalities
            associated with the benefits on nursing aids, incontinence products
            and bed protection inserts
          </p>
        </div>
        <div className="col-lg-3">
          <img src={image3} className="relieve-image" />
          <h4> We want that you are well</h4>
          <p>
            With our products and services, as well as extensive information on
            the topics of health and care, we want to achieve just that.
          </p>
        </div>
        <div className="col-lg-3">
          <img src={image4} className="relieve-image" />
          <h4>We are MyPflegebox</h4>
          <p>
            From experts who advise on care aids to the applicants who contact
            the care insurance companies to the many hands that assemble the
            care aids in practiced hand movements, pack them and send them to
            many households in Germany. we are the PflegeBox
          </p>
        </div>
      </div>
    </div>
  );
}
