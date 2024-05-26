import React from "react";
import { Link } from "../../Link.jsx";
import "../../cssComponents/main.css";

const Daniel = () => {
  return (
    <Link className="tattoo-artist artists" to="/bio-chal">
      <div className="tats">
        <img src="src/assets/img/Tatuador3.jpg" alt="Tatuador 3" />
        <img src="src/assets/img/InkBanner.png" alt="Banner" id="inkBanner" />
        <div id="info">
          <div className="role centered">Tatuador</div>
          <div className="name centered">Daniel Sanz</div>
          <div className="at centered">@dan.renshu</div>
        </div>
      </div>
    </Link>
  );
};

export default Daniel;
