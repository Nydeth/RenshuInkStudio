import React from "react";
import { Link } from "../Link.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import "../cssComponents/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Equipo() {
  return (
    <div className="main-container">  
    <Nav/>
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
            <Link className="tattoo-artist" to="/bio-chal">
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

            <Link className="tattoo-artist" to="/bio-chal">
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

            <Link className="tattoo-artist" to="/bio-chal">
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

            <Link className="tattoo-artist" to="/bio-chal">
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

            <Link className="tattoo-artist" to="/bio-chal">
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

            <Link className="tattoo-artist" to="/bio-chal">
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
      <Footer/>
    </div>
  );
}
