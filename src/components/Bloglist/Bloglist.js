import React, { useEffect, useState } from "react";
import "./Bloglist.css";
import leftimage from "../../Pictures/alexander-rotker-bydMjNfuO_4-unsplash.jpg";
import mainImage from "../../Pictures/hunter-newton--xNgyZfX1gs-unsplash.jpg";
import BannerImage from "../../Pictures/kelly-sikkema-5R5Trsu1aIM-unsplash.jpg";

import Footer from "../footer/Footer";
import Header from "../Header/Header";
import Popular from "./Popular";
import axios from "axios";
function Bloglist() {
  const [Data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      `http://23.88.103.58/api/resource/Pflege Blog Post?fields=["name","creation","title","content","picture"]`,
      {
        headers: {
          Authorization: "token e5bc1d9d49b103f:d545e06a0a468ad",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.data.data;
    console.log(data, "mydata");
    await setData(data);
    console.log(response, "my useState");

    // const response = await fetch(
    //   'http://23.88.103.58/api/resource/Pflege Blog Post?fields=["name","creation","title","content","picture"]',
    //   {
    //     method: "get",
    //     headers: new Headers({
    //       Authorization: "token e5bc1d9d49b103f:d545e06a0a468ad",
    //       "Content-Type": "application/json",
    //     }),
    //   }
    // ).then(async (data) => {
    //   setData(data);
    // });
    console.log(Data);
  };

  useEffect(() => {});
  useEffect(() => {
    getData();
    console.log(Data);
  }, []);

  return (
    <div>
      <Header title="bloglist" />
      <div className="container bloglist-title-section mobile-background-color">
        <div className="row">
          <div className="col-lg-6">
            <img
              className="left-bloglist-image"
              src={"http://23.88.103.58" + Data[0].picture}
            />
          </div>
          <div
            className="col-lg-6 right-bloglist-text"
            style={{ textAlign: "left" }}
          >
            <h2>{Data[0].title}</h2>
            <br />
            <p>{Data[0].content.substring(0, 390) + "..."}</p>
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
          </div>
        </div>

        {/* POPULAR ARTICLE SECTION */}

        <div className="container popular-article-section">
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <h3>Popular Article</h3>
          </div>
          <div className="row">
            {Data.map((item) => {
              return (
                <Popular
                  title={item.title}
                  content={item.content}
                  image={item.picture}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Bloglist;
