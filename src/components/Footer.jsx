import React from "react";
import "../cssComponents/footer.css";

export default function Footer() {
  return (
    <footer>
      <div id="social">
        <a className="facebookBtn smGlobalBtn" href="#" ></a>
        <a className="twitterBtn smGlobalBtn" href="#" ></a>
        <a className="linkedinBtn smGlobalBtn" href="#" ></a>
        <a className="pinterestBtn smGlobalBtn" href="#" ></a>
        <a className="tumblrBtn smGlobalBtn" href="#" ></a>
      </div>
      <center>
        <a id="Renshu">
          <img src="src/assets/img/OniPi.png" alt="logotipo" className="logo" />
          <div className="brandName">Renshu Ink Studio ©</div>
        </a>
      </center>
      <div className="terms">
      <a href="/Home.html">Aviso legal</a> |
      <a href="/Home.html"> Privacidad del sitio</a> |
      <a href="/Home.html"> Condiciones de uso</a>
      </div>
    </footer>
  );
}
