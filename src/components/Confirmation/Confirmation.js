import React,{useEffect} from "react";
import Body from "./Body";
import "./styles.css";
import "../footer/Footer";
import Footer from "../footer/Footer";

export default function Confirmation(props) {

   useEffect(()=>{
    console.log(props.fname,"confirmation page ka data")
    props.mybox.map((i) => {
      console.log(i.name)
    })
  })
  return (
    <div>
    
        <div className="container head">
          <div className="row">
            <div className="col-lg-3">
              1. CHOOSE BOX
            </div>
            <div className="col-lg-2">...........................</div>
            <div className="col-lg-3">
              2.FILLINFORMATION
            </div>
            <div className="col-lg-2">...........................</div>
            <div className="col-lg-2">
              <button className="chooseButton">3. CONFIRMATION</button>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      <Body
      change={props.change}
       value={props.mybox} 
      fname={props.fname}
      lname={props.lname}
      sname={props.sname}
      zip={props.zip}
      countryy={props.countryy}
      title={props.title}
      phone={props.phone}
      email={props.email}
      carelevel={props.careLevel}
      />
 
      <Footer />
    </div>
  );
}
