import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ImagenesAitor from "../components/ImagenesAitor";
import usePageTitle from "../UsePageTitle";

export default function ChalPage() {
  usePageTitle("Chal - Renshu Ink");
  return (
    <>
      <body className="bioBody">
        <Nav />
        <div className="page-container">
          <h2 className="bioH2">Chal</h2>
          <div className="bio-container">
            <img
              className="profPic"
              src="src/assets/img/Tatuador1.jpeg"
              alt="Tatuador Chal"
            />
            <p className="bioText">
              conocido por su estilo único que combina influencias del arte
              tradicional japonés con un toque contemporáneo. Con más de una
              década de experiencia en el mundo del tatuaje. Además de tatuar,
              Chal es un ferviente defensor de la cultura del tatuaje,
              participando activamente en talleres y seminarios para educar a la
              próxima generación de artistas.
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
