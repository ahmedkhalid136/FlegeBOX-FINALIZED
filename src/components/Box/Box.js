import React, { useState, useEffect } from "react";
import "./Box.css";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import ChooseBox from "./chooseBox";
import FillInfo from "../FillInformation/FillInfo";
import Confirmation from "../Confirmation/Confirmation";

function Box() {
  const [getComp, setComp] = useState("Box");
  const [careBox,setcareBox]= useState([])
  const data=careBox
   // useEffect(() => {
  
  //   sendData();
  // });

  return (
    <div>
      <Header />
      <div style={{ marginTop: "40px" }} className="container">
        {/* Header */}
       
       {getComp=="Box" && <ChooseBox change={setComp} mybox={setcareBox}   />}
       {getComp=="info" && <FillInfo  change={setComp}/>}
       {getComp=="confirm" && <Confirmation  change={setComp} />}
       
      </div>
    
      {data.map((i)=>{
              return(
                <div>
                  <p>
                    {i.name}
                  </p>
                  </div>
              )            })}
    </div>
  );
}

export default Box;
