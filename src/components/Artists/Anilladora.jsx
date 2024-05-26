import React from "react";
import { Link } from "../../Link";

const Anilladora = () => {
  return (
    <div className="tats">
      <Link className="tattoo-artist artists" to="/bio-chal">
        <img src="src/assets/img/Anilladora.jpg" alt="Anilladora" />
        <img src="src/assets/img/InkBanner.png" alt="Banner" id="inkBanner" />
        <div id="bis-info">
          <div className="bis-role centered">Anilladora</div>
          <div className="name centered">Sherezade</div>
          <div className="at centered">@sherezade.renshu</div>
        </div>
      </Link>
    </div>
  );
};

export default Anilladora;
