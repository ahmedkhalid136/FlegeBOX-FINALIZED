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
  };
  useEffect(async () => {
    getData();
  }, []);

  // const data = [
  //   {
  //     title: "MY Blog",
  //     content: "THIS IS OUR BLOG",
  //     Date: "28/09/2021",
  //     Img: "./Images/bee-naturalles-dGr9iBXZHe4-unsplash.jpg",
  //   },
  //   {
  //     title: "MY Blog",
  //     content: "THIS IS MY SECOND BLOG",
  //     Date: "28/09/2021",
  //     Img: "./Images/bee-naturalles-dGr9iBXZHe4-unsplash.jpg",
  //   },
  // ];
  return (
    <div>
      <Header title="bloglist" />
      <div className="container bloglist-title-section mobile-background-color">
        <div className="row">
          <div className="col-lg-6">
            <img className="left-bloglist-image" src={leftimage} />
          </div>
          <div
            className="col-lg-6 right-bloglist-text"
            style={{ textAlign: "left" }}
          >
            <h2>
              Lorem ipsum dolor sit amet,
              <br /> consectetur dolor consectetur
              <br />
              adipiscing elit sed do
            </h2>
            <br />
            <p>
              We want to relieve the burden on those affected so that
              <br /> they can concentrate on the finer things in life and have
              <br /> more time for togetherness...
            </p>
            <br />
            <p>
              <i class="far fa-clock"></i> 4 MIN |{" "}
              <i class="far fa-calendar-alt"></i> JULY 20, 2021
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
