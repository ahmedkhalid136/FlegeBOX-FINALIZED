import React from "react";

export default function Benifits() {
  return (
    <div className="benifits-section">
      <div className="container">
        <h1>Ihre Vorteile im Überblick</h1>
        <div className="row">
          <div className="col-lg-4">
            <div className="benifits-columns">
              <div className="icon-background home-icon-back">
                <i class="fas fa-euro-sign icons blue-icons"></i>
              </div>
              <h4>Kostenübernahme </h4>
              <p>
                Pflegebedürftige haben einen Anspruch auf Pflegehilfsmittel im
                Wert von bis zu 60€ im Monat.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="benifits-columns">
              <div className="icon-background home-icon-back">
                <i class="fas fa-paper-plane icons blue-icons"></i>
              </div>
              <h4>Zuverlässige Lieferung und Qualität </h4>
              <p>
                Wir beliefern Sie monatlich, kostenfrei und pünktlich mit
                hochwertigen Markprodukten
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="benifits-columns">
              <div className="icon-background home-icon-back">
                <i class="fas fa-gem icons blue-icons"></i>
              </div>
              <h4>Zuverlässige Lieferung und Qualität </h4>
              <p>
                Sie benötigen kein Rezept und wir kümmern uns um die Beantragung
                sowie um die Abrechnung mit der Pflegekassen
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="benifits-columns">
              <div className="icon-background home-icon-back">
                <i class="fas fa-address-card icons blue-icons"></i>
              </div>
              <h4>Ohne Vertragsbindung und Mindestlaufzeit </h4>
              <p>
                Ihre Pflegebox hat keine Mindestlaufzeit und ist jederzeit
                kündbar
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="benifits-columns">
              <div className="icon-background home-icon-back">
                <i class="fas fa-edit icons blue-icons"></i>
              </div>
              <h4>Produktauswahl und Produktänderungen </h4>
              <p>
                Wählen sie eine unserer Themenboxen oder stellen Sie ihre
                individuelle Pflegebox zusammen. Die Produktauswahl kann vor...
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="benifits-columns">
              <div className="icon-background home-icon-back">
                <i class="fas fa-envelope icons blue-icons"></i>
              </div>
              <h4>Schnelle Entlastung</h4>
              <p>
                Wir entlasten Sie und Ihre angehörigen, Sie brauchen sich um
                nichts weiteres zu kümmern.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
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
    </div>
  );
}
