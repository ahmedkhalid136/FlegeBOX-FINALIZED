import React, { useState } from "react";
import Image2 from "../../Pictures/girl-with-red-hat-Epw-SqZYeyw-unsplash.jpg";
import Blogdetails from "../Blogdetails/Blogdetails";
import { Link } from "react-router-dom";
function Popular(props) {
  const monthNames = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function calculateDate(firstDate) {
    var t1 = new Date(
      parseInt(firstDate.substring(0, 4)),
      parseInt(firstDate.substring(5, 7)),
      parseInt(firstDate.substring(8, 10)),
      parseInt(firstDate.substring(11, 13)),
      parseInt(firstDate.substring(14, 16)),
      0,
      0
    );
    var t2 = new Date();

    var dif = t2.getTime() - t1.getTime();
    var Seconds_from_T1_to_T2 = dif / 1000 / 60;
    var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
    return Seconds_Between_Dates;
  }
  return (
    <div className="col-lg-4" style={{ textAlign: "left", cursor: "pointer" }}>
      <Link
        to={{
          pathname: "/Blogdetails",
          aboutProps: {
            title: props.title,
            content: props.content,
            image: props.image,
            creation: props.creation,
          },
        }}
      >
        <img
          src={"http://23.88.103.58" + props.image}
          className="bloglist-image"
        />
        <br />
        <br />
        <h4>{props.title}</h4>
        <br />
        <p>{props.content.substring(0, 90) + "..."}</p>
        <br />
        <p>
          <img
            src="./Images/calendar.png"
            style={{
              width: "20px",
              height: "20px",
              marginTop: "-5px",
              marginRight: "5px",
            }}
          />{" "}
          {monthNames[props.creation.substring(5, 7)]}{" "}
          {props.creation.substring(8, 10)}
          {", "}
          {props.creation.substring(0, 4)}
        </p>
      </Link>
    </div>
  );
}

export default Popular;
