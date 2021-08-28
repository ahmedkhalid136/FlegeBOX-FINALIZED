import React from "react";
import "./Bloglist.css"
import leftimage from "../../Pictures/alexander-rotker-bydMjNfuO_4-unsplash.jpg"
function Bloglist() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
          <img src={leftimage} className="Myimage1"/>
          </div>
          <div className="col-lg-6">
          <p className="texts1">
             <b>Lorem Ipsum is simply dummy text of the printing and typesetting</b> 
             
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry'
            </p>
            <p className="datee">4 Min | july 20,2021</p>
          </div>
        </div>
        <div>
            <h2>
                Popular article
            </h2>
        </div>
      </div>
    </div>
  );
}

export default Bloglist;
