import React, { useState } from "react";
import Image2 from "../../Pictures/girl-with-red-hat-Epw-SqZYeyw-unsplash.jpg";
import Blogdetails from "../Blogdetails/Blogdetails";
import { Link } from "react-router-dom";
function Popular(props) {
  return (
    <div className="col-lg-4" style={{ textAlign: "left", cursor: "pointer" }}>
      <Link
        to={{
          pathname: "/Blogdetails",
          aboutProps: {
            title: props.title,
            content: props.content,
            image: props.image,
          },
        }}
      >
        <img src={props.image} className="bloglist-image" />
        <br />
        <br />
        <h4>{props.title}</h4>
        <br />
        <p>{props.content}</p>
        <br />
        <p>
          <img
            src="./Images/timer.png"
            style={{
              width: "20px",
              height: "20px",
              marginTop: "-5px",
              marginRight: "5px",
            }}
          />{" "}
          4 MIN |{" "}
          <img
            src="./Images/calendar.png"
            style={{
              width: "20px",
              height: "20px",
              marginTop: "-5px",
              marginRight: "5px",
            }}
          />{" "}
          JULY 20, 2021
        </p>
      </Link>
    </div>
  );
}

export default Popular;
