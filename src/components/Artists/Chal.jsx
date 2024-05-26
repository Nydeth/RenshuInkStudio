import React from "react";
import { Link } from "../../Link.jsx";
import "../../cssComponents/main.css";

export default function Chal() {
  return (
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
  );
}
