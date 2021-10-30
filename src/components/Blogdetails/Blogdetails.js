import React, { useState, useEffect } from "react";
import "./Blogdetails.css";
import mainImage from "../../Pictures/hunter-newton--xNgyZfX1gs-unsplash.jpg";
import BannerImage from "../../Pictures/kelly-sikkema-5R5Trsu1aIM-unsplash.jpg";
import Image from "../../Pictures/kelli-mcclintock-GopRYASfsOc-unsplash.jpg";
import Image2 from "../../Pictures/girl-with-red-hat-Epw-SqZYeyw-unsplash.jpg";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import Popular from "../Bloglist/Popular";

import axios from "axios";
function Blogdetails(props) {
  const [Data, setData] = useState([]);

  const getData = async () => {
    try {
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
      console.log(Data, "my useState");
    } catch (e) {
      console.log("error", e);
    }
  };
  useEffect(async () => {
    getData();
  }, []);

  return (
    <div>
      <Header title="BLOG" />
      <div class="container mobile-background-color">
        <div>
          <h1 className="styleHeader">{props.location.aboutProps.title}</h1>
        </div>
        <div className="datee">
          <i class="far fa-clock"></i> 4 Min |{" "}
          <i class="far fa-calendar-alt"></i> july 20,2021
        </div>
        <div>
          <img src={props.location.aboutProps.image} className="Myimage" />
        </div>
        <p className="paraText">{props.location.aboutProps.content}</p>
        <div className="container">
          <h2>you may also like this article</h2>
          <br />
          <br />
          <div className="row articleImgdiv ">
            {Data.slice(0, 3).map((item, ind) => {
              return (
                <Popular
                  title={item.title}
                  content={item.content}
                  image={item.picture}
                />
              );
            })}
            {/* <Popular
              title={Data[0].title}
              content={Data[0].content}
              image={Data[0].picture}
            /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blogdetails;
