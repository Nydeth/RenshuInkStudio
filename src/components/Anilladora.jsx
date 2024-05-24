import React from "react";
import { Link } from "../Link.jsx";
import "../cssComponents/main.css";

const Anilladora = () => {
  return (
    <Link className="tattoo-artist artists" to="/bio-chal">
      <div className="tats">
        <img src="src/assets/img/Anilladora.jpg" alt="Anilladora" />
        <img src="src/assets/img/InkBanner.png" alt="Banner" id="inkBanner" />
        <div id="bis-info">
          <div className="bis-role centered">Anilladora</div>
          <div className="name centered">Sherezade</div>
          <div className="at centered">@sherezade.renshu</div>
        </div>
      </div>
    </Link>
  );
};

export default Anilladora;
