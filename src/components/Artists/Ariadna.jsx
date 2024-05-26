import React from "react";
import { Link } from "../../Link.jsx";
import "../../cssComponents/main.css";

export default function Ariadna() {
  return (
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
  );
}
