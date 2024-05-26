import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../cssComponents/about.css";
import GaleriaEstudio from "../components/GaleriaEstudio";

export default function SobreNosotros() {
  return (
    <>
      <Nav />
      <h1 className="aboutTitle">Sobre nosotros</h1>
      <center className="aboutCenter">
        <h2 className="aboutText">
          ¡Bienvenidos a Renshu Ink Studio! Desde 2006, hemos sido el hogar del
          arte corporal excepcional. Con tatuadores experimentados en una
          variedad de géneros, desde el tradicional hasta el realismo, estamos
          dedicados a hacer realidad tus visiones. Creemos en la colaboración
          con nuestros clientes, asegurando que cada diseño sea único y
          personalizado.
        </h2>
      </center>
      <h1 className="galleryTitle">Nuestro Estudio</h1>
      <GaleriaEstudio />      
      <Footer />
    </>
  );
}
