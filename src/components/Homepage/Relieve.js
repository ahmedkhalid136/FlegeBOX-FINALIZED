import React from "react";
import image1 from "../../Pictures/kelly-sikkema-5R5Trsu1aIM-unsplash.jpg";
import image2 from "../../Pictures/kelli-mcclintock-GopRYASfsOc-unsplash.jpg";
import image3 from "../../Pictures/magic-mind-OSk4lO--UsA-unsplash.jpg";
import image4 from "../../Pictures/girl-with-red-hat-Epw-SqZYeyw-unsplash.jpg";

export default function Relieve() {
  return (
    <div className="container relieve-section">
      <div>
        <h1>Wir sind da um Sie zu entlasten </h1>
        <p>
          We are not only concerened with the current situation in nursing, but
          also with the future. Fo us, the focus is on the people in care -
          those in need of care, caregivers, nurses and family caregivers
        </p>
      </div>

      <div className="row relieve-image-section">
        <div className="col-lg-4">
          <img src={image1} className="relieve-image" />
          <h4>Es soll Ihnen gut gehen</h4>
          <p>
            Unsere Produkte und Dienstleistungen sowie unsere Beiträge zu den
            Themen Gesundheit und Pflege soll eben dieses bei Ihnen erreichen
          </p>
        </div>
        <div className="col-lg-4">
          <img src={image2} className="relieve-image" />
          <h4>Wir wollen informieren</h4>
          <p>
            Pflegebedürftige uns Ihre Angehörigen sollen jene Leistung erfahren
            und erwarten dürfen die Ihnen gesetzlich zustehen
          </p>
        </div>
        <div className="col-lg-4">
          <img src={image3} className="relieve-image" />
          <h4>Sie sollen entlastet werden</h4>
          <p>
            Damit sie mehr Zeit für das Miteinander haben übernehmen wir alle
            Formalitäten für Sie die anfallen.
          </p>
        </div>
      </div>
    </div>
  );
}
