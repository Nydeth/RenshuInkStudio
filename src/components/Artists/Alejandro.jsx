import React from "react";
import { Link } from "../../Link.jsx";
import "../../cssComponents/main.css";

const Alejandro = () => {
  return (
    <Link className="tattoo-artist artists" to="/bio-chal">
      <div className="tats">
        <img src="src/assets/img/Tatuador4.jpg" alt="Tatuador 4" />
        <img src="src/assets/img/InkBanner.png" alt="Banner" id="inkBanner" />
        <div id="info">
          <div className="role centered">Tatuador</div>
          <div className="name centered">Alejandro Larra</div>
          <div className="at centered">@aleks.renshu</div>
        </div>
      </div>
    </Link>
  );
};

export default Alejandro;
