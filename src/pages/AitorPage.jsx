import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ImagenesAitor from "../components/ImagenesAitor";
import usePageTitle from "../UsePageTitle";

export default function AitorPage() {
  usePageTitle("Aitor");
  return (
    <>
      <body className="bioBody">
        <Nav />
        <div className="page-container">
          <h2 className="bioH2">Aitor</h2>
          <div className="bio-container">
            <img
              className="profPic"
              src="src/assets/img/Tatuador1.jpeg"
              alt="Tatuador Aitor"
            />
            <p className="bioText">
              Fundador de Renshu Ink, un estudio de tatuajes en el corazón de la
              ciudad, donde su equipo de talentosos artistas trabaja para llevar
              las visiones de sus clientes a la realidad. Con más de 15 años de
              experiencia en la industria del tatuaje, Aitor ha perfeccionado un
              estilo que fusiona elementos del realismo con detalles geométricos
              y abstractos. Su pasión por el arte comenzó a temprana edad, lo
              que lo llevó a estudiar bellas artes antes de dedicarse por
              completo al tatuaje.
            </p>
          </div>
          <div class="sign">
            <span class="fast-flicker">Ú</span>LTIMOS &nbsp;
            <span class="flicker"> T</span>RABAJOS
          </div>
        </div>
        <div className="container">
          <ImagenesAitor />
        </div>
        <Footer />
      </body>
    </>
  );
}
