import React from "react";

export default function Works() {
  return (
    <div style={{ position: "relative" }}>
      <div className="container Works">
        <img
          src="./Images/Union.png"
          style={{ position: "absolute", top: "0", left: "0" }}
          className="orange-pattern3"
        />
        <br />
        <br />
        <h2>So einfach funktioniert MyPflegebox</h2>
        <p style={{ marginTop: "25px" }}>
          Unkompliziert und ohne versteckte Kosten - In 5 Minuten zu Ihrer
          individuellen Pflegebox
        </p>
        <div className="row icons-container">
          <div className="col-lg-3 row" style={{ textAlign: "center" }}>
            <div
              className="col-lg-10"
              style={{ textAlign: "center", margin: "0", padding: "0" }}
            >
              {/* <div className="icon-background">
                <i class="fas fa-shopping-cart icons"></i>
              </div> */}
              <img src="./Images/Group 517.png" />
              <h4 className="iconsHeading">
                1. Wunschbox wählen oder selbst individualisieren
              </h4>
            </div>
            {/* <i class="fas fa-arrow-right arrow col-lg-2 right-arrow"></i> */}
            <img
              src="./Images/arrow-right.png"
              style={{ width: "16%", height: "50px", marginTop: "30px" }}
              className="right-arrow"
            />
            {/* <i class="fas fa-arrow-down arrow down-arrow col-lg-2"></i> */}

            <img
              className="down-arrow arrow"
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "50px",
                marginBottom: "-50px",
              }}
              src="./Images/arrow-down.png"
            />
          </div>

          <div className="col-lg-3 row">
            <div className="col-lg-10">
              {/* <div className="icon-background">
                <i class="far fa-address-card icons"></i>
              </div> */}
              <img src="./Images/Group 516.png" />
              <h4 className="iconsHeading">
                2. Antrag online ausfüllen und absende
              </h4>
            </div>
            {/* <i class="fas fa-arrow-right arrow col-lg-2 right-arrow"></i> */}
            <img
              src="./Images/arrow-right.png"
              style={{ width: "16%", height: "50px", marginTop: "30px" }}
              className="right-arrow"
            />
            <img
              className="down-arrow arrow"
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "50px",
                marginBottom: "-50px",
              }}
              src="./Images/arrow-down.png"
            />
          </div>
          <div className="col-lg-3 row">
            <div className="col-lg-10">
              <img src="./Images/Group 515.png" />
              <h4 className="iconsHeading">
                3. Wir entlasten Sie und übernehmen die Antragstellung &
                Abrechnung mit der Pflegekasse
              </h4>
            </div>
            {/* <i class="fas fa-arrow-right arrow col-lg-2 right-arrow"></i> */}
            <img
              src="./Images/arrow-right.png"
              style={{ width: "16%", height: "50px", marginTop: "30px" }}
              className="right-arrow"
            />
            <img
              className="down-arrow arrow"
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "50px",
                marginBottom: "-50px",
              }}
              src="./Images/arrow-down.png"
            />
          </div>
          <div className="col-lg-3 row">
            <div className="col-lg-12">
              <img src="./Images/Group 514.png" />
              <h4 className="iconsHeading">
                4. Pünktlich und monatlich erhalten Sie ihre kostenfreie
                Pflegebox
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "50px", marginTop: "-50px" }}>
        <a href="/box">
          <button
            style={{
              textTransform: "uppercase",
              backgroundColor: "#f87433",
              color: "white",
              border: "none",
              padding: "12px 30px",
              borderRadius: "10px",
            }}
          >
            Pflegebox sichern
          </button>
        </a>
      </div>
    </div>
  );
}
