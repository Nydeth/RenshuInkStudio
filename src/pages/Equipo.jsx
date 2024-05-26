import React from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import "../cssComponents/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Founder from "../components/Founder.jsx";
import Chal from "../components/Chal.jsx";
import Sherezade from "../components/Sherezade.jsx";
import Ariadna from "../components/Ariadna.jsx";
import Gaia from "../components/Gaia.jsx";
import Daniel from "../components/Daniel.jsx";
import Alejandro from "../components/Alejandro.jsx";

export default function Equipo() {
  return (
    <div className="main-container">
      <Nav />
      {/* Founder section */}
      <Founder />

      {/* Artists section */}
      <section className="tattoo-artists-section">
        <h2 id="artists">TATUADORES</h2>
        <div className="tattoo-artists-container">
          <div className="artists-grid">
            <Chal />
            <Sherezade />
            <Ariadna />
            <Gaia />
            <Daniel />
            <Alejandro />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
