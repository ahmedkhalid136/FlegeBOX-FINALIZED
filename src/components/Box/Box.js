import React, { useState, useEffect } from "react";
import "./Box.css";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import ChooseBox from "./chooseBox";
import FillInfo from "../FillInformation/FillInfo";
import Confirmation from "../Confirmation/Confirmation";

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
  const data = careBox;
  const [careLevel, setCareLevel] = useState("");

  useEffect(() => {
    console.log(note);
  });

  return (
    <div>
      <Header />
      <div style={{ marginTop: "40px" }} className="container">
        {/* Header */}

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
          />
        )}
        {getComp == "confirm" && (
          <Confirmation
            change={setComp}
            fname={firstName}
            lname={lastName}
            sname={streetName}
            zip={zipCode}
            countryy={country}
            title={title}
            careLevel={careLevel}
            note={note}
          />
        )}
      </div>

      {data.map((i) => {
        return (
          <div>
            <p>{i.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Box;
