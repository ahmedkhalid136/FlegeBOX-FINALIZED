import React from "react";

export default function Works() {
  return (
    <div className="container-fluid Works">
      <h2>So einfach funktioniert MyPflegebox</h2>
      <p style={{ marginTop: "25px" }}>
        Unkompliziert und ohne versteckte Kosten - In 5 Minuten zu Ihrer
        individuellen Pflegebox
      </p>
      <div className="row icons-container">
        <div className="col-lg-3 row">
          <div
            className="col-lg-10"
            style={{ textAlign: "center", margin: "0", padding: "0" }}
          >
            <div className="icon-background">
              <i class="fas fa-shopping-cart icons"></i>
            </div>

            <h4 className="iconsHeading">
              1. Wunschbox wählen oder selbst individualisieren
            </h4>
          </div>
          <i class="fas fa-arrow-right arrow col-lg-2 right-arrow"></i>
          <i class="fas fa-arrow-down arrow down-arrow col-lg-2"></i>
        </div>

        <div className="col-lg-3 row">
          <div className="col-lg-10">
            <div className="icon-background">
              <i class="far fa-address-card icons"></i>
            </div>
            <h4 className="iconsHeading">
              2. Antrag online ausfüllen und absende
            </h4>
          </div>
          <i class="fas fa-arrow-right arrow col-lg-2 right-arrow"></i>
          <i class="fas fa-arrow-down arrow down-arrow col-lg-2"></i>
        </div>
        <div className="col-lg-3 row">
          <div className="col-lg-10">
            <div className="icon-background">
              <i class="fas fa-paperclip icons"></i>
            </div>
            <h4 className="iconsHeading">
              3. Wir entlasten Sie und übernehmen die Antragstellung &
              Abrechnung mit der Pflegekasse
            </h4>
          </div>
          <i class="fas fa-arrow-right arrow col-lg-2 right-arrow"></i>
          <i class="fas fa-arrow-down arrow down-arrow col-lg-2"></i>
        </div>
        <div className="col-lg-3 row">
          <div className="col-lg-12">
            <div className="icon-background">
              <i class="fas fa-truck icons"></i>
            </div>
            <h4 className="iconsHeading">
              4. Pünktlich und monatlich erhalten Sie ihre kostenfreie Pflegebox
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
