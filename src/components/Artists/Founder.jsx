import React from "react";
import { Link } from "../../Link.jsx";
import "../../cssComponents/main.css";

const Founder = () => {
  return (
    <section className="founders founder-section">
    <h2 id="artists">FUNDADOR</h2>
    <div className="tattoo-artists-container">
      <Link className="tattoo-artist" to="/bio-aitor">
        <div className="founder">
          <img src="src/assets/img/Tatuador1.jpeg" alt="Tatuador 1" />
          <img
            src="src/assets/img/InkBanner.png"
            alt="Banner"
            id="inkBanner"
          />
          <div id="info">
            <div className="founderRole centered">Fundador</div>
            <div className="name centered">Aitor Gutiérrez</div>
            <div className="at centered">@aitor.renshu</div>
          </div>
        </div>
      </Link>
    </div>
  </section>
  );
};

export default Founder;
