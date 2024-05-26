import React from "react";
import "../cssComponents/main.css";

/* Misc */
import Map from "./Map.jsx";
import Carousel from "./Carousel.jsx";
import MainGallery from "./MainGallery.jsx";

/* Founder and Artists */
import Founder from "./Artists/Founder.jsx";
import Chal from "./Artists/Chal.jsx";
import Sherezade from "./Artists/Sherezade.jsx";
import Ariadna from "./Artists/Ariadna.jsx";
import Gaia from "./Artists/Gaia.jsx";
import Alejandro from "./Artists/Alejandro.jsx";
import Daniel from "./Artists/Daniel.jsx";

const carouselMessage = {
  title: "RENSHU INK",
  description: "Renshu Ink Studio reparte tinta en el centro de Madrid, Sol.",
  description2:
    "Somos un estudio de piercings y tatuajes con más de dos décadas de carrera.",
};

export default function Main() {
  // Array repeating the messages for every slide
  const carouselMessages = Array(4).fill(carouselMessage);

  return (
    <div className="main-container">
      {/* Carousel section */}
      <Carousel carouselMessages={carouselMessages} />

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

      {/* Gallery section */}
      <MainGallery />

      {/* Map section */}
      <Map />
    </div>
  );
}
