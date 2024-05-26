import React from "react";
import { Link } from "../../Link.jsx";
import "../../cssComponents/main.css";

const Gaia = () => {
  return (
    <Link className="tattoo-artist artists" to="/bio-chal">
      <div className="tats">
        <img src="src/assets/img/Tatuadora2.jpg" alt="Anilladora" />
        <img src="src/assets/img/InkBanner.png" alt="Banner" id="inkBanner" />
        <div id="info">
          <div className="role centered">Tatuadora</div>
          <div className="name centered">Gaia Clément</div>
          <div className="at centered">@gaia.renshu</div>
        </div>
      </div>
    </Link>
  );
};

export default Gaia;
