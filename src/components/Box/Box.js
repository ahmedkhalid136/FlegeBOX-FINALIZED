import React, { useState,useEffect } from "react";
import "./Box.css";
import Header from "../Header/Header";
import ChooseBox from "./chooseBox";
import FillInfo from "../FillInformation/FillInfo";
import Confirmation from "../Confirmation/Confirmation";
import Footer from "../footer/Footer";

function Box() {
  const [getComp, setComp] = useState("Box");
  const [careBox, setcareBox] = useState([]);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [streetName, setstreetName] = useState("");
  const [zipCode, setzipCode] = useState("");
  const [country, setCountry] = useState("");
  const [title, setTitle] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [careLevel, setCareLevel] = useState("");

  return (
    <div>
      <Header />
      <div style={{ marginTop: "40px" }} className="container">
        {getComp == "Box" && <ChooseBox change={setComp} mybox={setcareBox} />}
        {getComp == "info" && (
          <FillInfo
            change={setComp}
            fname={setfirstName}
            lname={setlastName}
            sname={setstreetName}
            zip={setzipCode}
            countryy={setCountry}
            title={setTitle}
            careLevel={setCareLevel}
            note={setNote}
            phone={setphoneNumber}
            email={setEmail}
            // USESTATE VALUES
            valFname={firstName}
            valLname={lastName}
            valSname={streetName}
            valZip={zipCode}
            valCountry={country}
            valTitle={title}
            valCareLevel={careLevel}
            valNote={note}
            valPhone={phoneNumber}
            valEmail={email}
          />
        )}
        {getComp == "confirm" && (
          <Confirmation
            change={setComp}
            mybox={careBox}
            fname={firstName}
            lname={lastName}
            sname={streetName}
            zip={zipCode}
            countryy={country}
            title={title}
            careLevel={careLevel}
            note={note}
            phone={phoneNumber}
            email={email}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Box;
