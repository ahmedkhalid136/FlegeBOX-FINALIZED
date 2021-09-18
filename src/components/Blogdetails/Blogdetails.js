import React from "react";
import "./Blogdetails.css";
import mainImage from "../../Pictures/hunter-newton--xNgyZfX1gs-unsplash.jpg";
import BannerImage from "../../Pictures/kelly-sikkema-5R5Trsu1aIM-unsplash.jpg";
import Image from "../../Pictures/kelli-mcclintock-GopRYASfsOc-unsplash.jpg";
import Image2 from "../../Pictures/girl-with-red-hat-Epw-SqZYeyw-unsplash.jpg";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import Popular from "../Bloglist/Popular";

const data = [
  {
    title: "MY Blog",
    content: "THIS IS OUR BLOG",
    Date: "28/09/2021",
    Img: "./Images/bee-naturalles-dGr9iBXZHe4-unsplash.jpg",
  },
  {
    title: "NEW BLOG",
    content: "THIS IS MY SECOND BLOG",
    Date: "28/09/2021",
    Img: "./Images/bee-naturalles-dGr9iBXZHe4-unsplash.jpg",
  },
];
function Blogdetails(props) {
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
        <p className="paraText">
          {props.location.aboutProps.content}
          <br />
          <br />
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
          <br />
          <br />
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="container">
          <h2>you may also like this article</h2>
          <br />
          <br />
          <div className="row articleImgdiv ">
            {data.map((item) => {
              return (
                <Popular
                  title={item.title}
                  content={item.content}
                  image={item.Img}
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

export default Blogdetails;
