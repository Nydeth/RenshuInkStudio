import React from "react";
import "../cssComponents/footer.css";

export default function Footer() {
  return (
    <footer>
      <div id="social">
        <a class="facebookBtn smGlobalBtn" href="#" ></a>
        <a class="twitterBtn smGlobalBtn" href="#" ></a>
        <a class="linkedinBtn smGlobalBtn" href="#" ></a>
        <a class="pinterestBtn smGlobalBtn" href="#" ></a>
        <a class="tumblrBtn smGlobalBtn" href="#" ></a>
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
