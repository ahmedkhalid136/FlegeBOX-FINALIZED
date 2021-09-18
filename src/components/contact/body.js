import React from "react";

export default function body() {
  return (
    <div className="container body-container">
      <div className="row">
        <div className="col-lg-7 left-side">
          <h3>What is your Question</h3>
          <br />
          <br />
          <input className="input-field" placeholder="Your Name" /> <br />
          <br />
          <input className="input-field" placeholder="Email Address" />
          <br />
          <br />
          <textarea className="text-field" placeholder="Message" rows="10" />
          <button className="button">Submit</button>
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
            <p>1901 Thornridge Cir.Shiloh, Hawaii</p>
            <p>929-242-6868</p>
            <p>Contact@info.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
