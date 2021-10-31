import { React, useState, useEffect } from "react";
import image1 from "../../Pictures/kelly-sikkema-5R5Trsu1aIM-unsplash.jpg";
import image2 from "../../Pictures/kelli-mcclintock-GopRYASfsOc-unsplash.jpg";
import image3 from "../../Pictures/magic-mind-OSk4lO--UsA-unsplash.jpg";
import image4 from "../../Pictures/girl-with-red-hat-Epw-SqZYeyw-unsplash.jpg";
import Popular from "../Bloglist/Popular";

import axios from "axios";

export default function Relieve() {
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

      console.log(data, "mydatas");
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
    <div className="container relieve-section">
      <div>
        <h1>Wir sind da um Sie zu entlasten </h1>
      </div>

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
  );
}
