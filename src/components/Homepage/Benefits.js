import React from "react";
import "./Homepage.css";
function Benefits() {
  return (
    <div className="benefits container">
      <p className="heading">Your benefits</p>
      <div className="row">
        <div className="col-sm box">
         <b>Cost absorption</b> 
         <p className="Text">
             People in need of care currently have a right to care aids worth up to €60
         </p>
        </div>
        <div className="col-sm box">
         <b>Relaiable Delivery</b> 
         <p className="Text">
             Free shipping every month and on time at your home or at your care service
         </p>
        </div>
        <div className="col-sm box">
        <b>Quality</b>
        <p className="Text">
            We supply you with high quality branded products 
        </p>
        </div>
      </div>

      <div className="row">
      <div className="col-sm box">
         <b>No Formalities</b> 
         <p className="Text">
             we take care of the application and billing with the nursing care insurance
         </p>
        </div>
        <div className="col-sm box">
         <b>Without contract commitment</b> 
         <p className="Text">
             The care box can be cancelled anytime
         </p>
        </div>
        <div className="col-sm box">
        <b>Prescritption free</b>
        <p className="Text">
            We supply you with high quality branded products 
        </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
