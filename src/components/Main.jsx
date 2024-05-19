import React from "react";
import { Link } from "../Link.jsx";
import "../cssComponents/main.css";
import Map from "./Map.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
      <div
        className="carousel slide carousel-fade bg-dark"
        data-bs-ride="carousel"
        data-bs-interval={7000}
      >
        <div className="carousel-inner">
          {carouselMessages.map((message, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={`src/assets/img/Carousel${index + 1}.jpg`}
                className="d-block w-100"
                alt={`Carousel image ${index + 1}`}
              />
              <div className="carousel-caption">
                <h1 className="title">{message.title}</h1>
                <p className="description">
                  {message.description}
                  <br />
                  {message.description2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Founder section */}
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

      {/* Artists section */}
      <section className="tattoo-artists-section">
        <h2 id="artists">TATUADORES</h2>
        <div className="tattoo-artists-container">
          <div className="artists-grid">
            <Link className="tattoo-artist artists" to="/bio-chal">
              <div className="tats">
                <img src="src/assets/img/Tatuador2.jpeg" alt="Tatuador 2" />
                <img
                  src="src/assets/img/InkBanner.png"
                  alt="Banner"
                  id="inkBanner"
                />
                <div id="info">
                  <div className="role centered">Tatuador</div>
                  <div className="name centered">Chal</div>
                  <div className="at centered">@chal.renshu</div>
                </div>
              </div>
            </Link>

            <Link className="tattoo-artist artists" to="/bio-chal">
              <div className="tats">
                <img src="src/assets/img/Anilladora.jpg" alt="Anilladora" />
                <img
                  src="src/assets/img/InkBanner.png"
                  alt="Banner"
                  id="inkBanner"
                />
                <div id="info">
                  <div className="role centered">Anilladora</div>
                  <div className="name centered">Sherezade</div>
                  <div className="at centered">@sherezade.renshu</div>
                </div>
              </div>
            </Link>

            <Link className="tattoo-artist artists" to="/bio-chal">
              <div className="tats">
                <img src="src/assets/img/Tatuadora.jpg" alt="Tatuadora 1" />
                <img
                  src="src/assets/img/InkBanner.png"
                  alt="Banner"
                  id="inkBanner"
                />
                <div id="info">
                  <div className="role centered">Tatuadora</div>
                  <div className="name centered">Ariadna Erdiel</div>
                  <div className="at centered">@ari.renshu</div>
                </div>
              </div>
            </Link>

            <Link className="tattoo-artist artists" to="/bio-chal">
              <div className="tats">
                <img src="src/assets/img/Tatuadora2.jpg" alt="Anilladora" />
                <img
                  src="src/assets/img/InkBanner.png"
                  alt="Banner"
                  id="inkBanner"
                />
                <div id="info">
                  <div className="role centered">Tatuadora</div>
                  <div className="name centered">Gaia Clément</div>
                  <div className="at centered">@gaia.renshu</div>
                </div>
              </div>
            </Link>

            <Link className="tattoo-artist artists" to="/bio-chal">
              <div className="tats">
                <img src="src/assets/img/Tatuador3.jpg" alt="Tatuador 3" />
                <img
                  src="src/assets/img/InkBanner.png"
                  alt="Banner"
                  id="inkBanner"
                />
                <div id="info">
                  <div className="role centered">Tatuador</div>
                  <div className="name centered">Daniel Sanz</div>
                  <div className="at centered">@dan.renshu</div>
                </div>
              </div>
            </Link>

            <Link className="tattoo-artist artists" to="/bio-chal">
              <div className="tats">
                <img src="src/assets/img/Tatuador4.jpg" alt="Tatuador 4" />
                <img
                  src="src/assets/img/InkBanner.png"
                  alt="Banner"
                  id="inkBanner"
                />
                <div id="info">
                  <div className="role centered">Tatuador</div>
                  <div className="name centered">Alejandro Larra</div>
                  <div className="at centered">@aleks.renshu</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section className="gallery-artist-section accordian">
        <h2 id="gallery">GALERÍA</h2>
        <div className="gallery-artist-container">
          <div class="gallery">
            <img src="src/assets/img/tattoo2.jpg" alt="Tatuaje 2" />
            <img src="src/assets/img/tattoo9.jpg" alt="Tatuaje 9" />
            <img src="src/assets/img/tattoo4.jpg" alt="Tatuaje 4" />
            <img src="src/assets/img/tattoo8.jpg" alt="Tatuaje 8" />
            <img src="src/assets/img/tattoo5.jpg" alt="Tatuaje 5" />
            <img src="src/assets/img/tattoo3.jpg" alt="Tatuaje 3" />
            <img src="src/assets/img/tattoo6.jpg" alt="Tatuaje 6" />
            <img src="src/assets/img/tattoo7.jpg" alt="Tatuaje 7" />
            <img src="src/assets/img/piercing1.jpg" alt="Piercing 1" />
            <img src="src/assets/img/piercing4.jpg" alt="Piercing 4" />
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="maps">
        <h2 id="map">LOCALIZACIÓN</h2>
        <div className="map-container">
          <Map />
        </div>
      </section>
    </div>
  );
}
