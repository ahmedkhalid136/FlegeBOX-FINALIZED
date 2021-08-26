import React from "react";
import "./Homepage.css";
function Relieveyou() {

  return (
    <div>
      <p className="heading">We are here to relieve you</p>
      <p className="relievepara">
        we are not only concerned with the current situation with nursing but
        also with the fututre. For us, the focus is on the people in care -
        those in need of care, caregivers, nurses and family caregivers
      </p>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3 block1"></div>
          <div className="col-sm-3 col-md-3 col-lg-3 block2"></div>
          <div className="col-sm-3  col-md-3 col-lg-3 block3"></div>
          <div className="col-sm-3 col-md-3 col-lg-3 block4"></div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6 ">
            <b>We want to enlighten</b>
            <p className="Relievepara">
              We want everyone in need of care and their relatives to recieve
              the benefits to which they are legally entitiled.
            </p>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 ">
            <b>We want to relieve</b>
            <p className="Relievepara">
              We want to relieve the burden as those affected so that they can
              concentrate on the finer things in life and have more time for
              togtherness, Forthis reason, we take care of all the formalities
              associated with benefits on nursing aids, incontience products and
              bed protection inserts.
            </p>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 ">
            <b>We want that you are well</b>
            <p className="Relievepara">
              With our products and services, as well as extensive information
              on the topics of health and care, we want to achieve just that.
            </p>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <b>We are MyPflegebox</b>
            <p className="Relievepara">
              From experts who advice on care aids to the applicants who contact
              the care insurance companies to the many hands that assemble the
              care aids in practiced hand movements, pack them and send them to
              many households in Germany. We are the Pflegebox.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Relieveyou;
