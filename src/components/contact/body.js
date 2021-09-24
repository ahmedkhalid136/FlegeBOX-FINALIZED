import { React, useState } from "react";
import { Redirect } from "react-router-dom";
export default function Body() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendData(event) {
    event.preventDefault();
    fetch("http://35.84.238.24/api/resource/Pflege Contact Form", {
      method: "POST",
      headers: {
        Authorization: "token 6141d2161d30a42:b783e62c3c1518d",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_name: name,
        email: email,
        message: message,
      }),
    })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e, "error");
      });

    window.location.reload();
  }

  {
    return (
      <div className="container body-container mobile-background-color">
        <div className="row">
          <div className="col-lg-7 left-side">
            <h3>What is your Question</h3>
            <br />
            <br />
            <input
              className="input-field"
              placeholder="Your Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />{" "}
            <br />
            <br />
            <input
              type="email"
              className="input-field"
              placeholder="Email Address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <br />
            <br />
            <textarea
              className="text-field"
              placeholder="Message"
              rows="10"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
            />
            <button className="button" onClick={sendData}>
              Submit
            </button>
          </div>
          <div className="col-lg-5 right-side">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6804.947479247537!2d74.35432256607511!3d31.483659780952777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1629915789049!5m2!1sen!2s"
              width="100%"
              height="280"
              allowfullscreen=""
              loading="lazy"
            />
            <div className="info">
              <p>
                <i
                  style={{ color: "#F87433", paddingRight: "10px" }}
                  class="fas fa-map-marker-alt"
                ></i>{" "}
                1901 Thornridge Cir.Shiloh, Hawaii
              </p>
              <p>
                <i
                  style={{ color: "#F87433", paddingRight: "10px" }}
                  class="fas fa-phone"
                ></i>{" "}
                929-242-6868
              </p>
              <p>
                <i
                  style={{ color: "#F87433", paddingRight: "10px" }}
                  class="fas fa-envelope"
                ></i>
                Contact@info.com
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
