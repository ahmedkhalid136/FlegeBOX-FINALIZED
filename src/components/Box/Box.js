import React, { useState, useEffect } from "react";
import "./Box.css";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import ChooseBox from "./chooseBox";
import FillInfo from "../FillInformation/FillInfo";
import Confirmation from "../Confirmation/Confirmation";

function Box() {
  const [getComp, setComp] = useState("Box");

  // useEffect(() => {
  //   const sendData = () => {
  //     fetch("http://35.84.238.24/api/method/flegeapp.utils.create_patient", {
  //       method: "POST",
  //       headers: {
  //         Authorization: "token 6141d2161d30a42:b783e62c3c1518d",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         first_name: "John",
  //         last_name: "Smith",
  //         title: "MR",
  //         street_name: "1092-Bayern",
  //         date_of_birth: "2021-08-29",
  //         zip_code: "940012",
  //         country: "Germany",
  //         care_level: "Level 1",
  //         care_box: [
  //           {
  //             item: "gloves",
  //             quantity: 2,
  //             size: "Medium",
  //           },
  //           {
  //             item: "hand-sanitizer",
  //             quantity: 3,
  //             size: "Large",
  //           },
  //         ],
  //         phone_number: "+4919283292",
  //         email_address: "flegepatient@patient.com",
  //         insurance_company: "PAEO",
  //         insurance_number: "PAEO-012930",
  //         year: "2021",
  //         note: "Patient from germany",
  //       }),
  //     })
  //       .then((r) => r.json())
  //       .then((r) => {
  //         console.log(r);
  //         console.log("worked");
  //       })
  //       .catch((e) => {
  //         console.log(e, "error");
  //       });
  //   };
  //   sendData();
  // });

  return (
    <div>
      <Header />
      <div style={{ marginTop: "40px" }} className="container">
        {/* Header */}

        {getComp == "Box" && <ChooseBox change={setComp} />}
        {getComp == "info" && <FillInfo change={setComp} />}
        {getComp == "confirm" && <Confirmation change={setComp} />}
      </div>

      <Footer />
    </div>
  );
}

export default Box;
