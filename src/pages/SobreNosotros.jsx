import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import usePageTitle from "../UsePageTitle";
import "../cssComponents/about.css";

export default function SobreNosotros() {
  usePageTitle("Sobre Nosotros");
  return (
    <>
      <Nav />
        <h1 className="aboutTitle">Sobre nosotros</h1>
        <center>
        <h2 className="aboutText">
          ¡Bienvenidos a Renshu Ink Studio! Desde 2006, hemos sido el hogar del
          arte corporal excepcional. Con tatuadores experimentados en una
          variedad de géneros, desde el tradicional hasta el realismo, estamos
          dedicados a hacer realidad tus visiones. Creemos en la colaboración
          con nuestros clientes, asegurando que cada diseño sea único y
          personalizado.
        </h2>
        </center>
        
        <h1 className="galleryTitle">Galería</h1>

        {/* Galería de imágenes */}
      <div className="image-gallery">
        <img
          src="src/assets/img/Carousel1.jpg"
          alt="Descripción de la imagen"
          className="about-gallery-image"
        />
        <img
          src="src/assets/img/Carousel2.jpg"
          alt="Descripción de la imagen"
          className="about-gallery-image"
        />
        <img
          src="src/assets/img/Carousel3.jpg"
          alt="Descripción de la imagen"
          className="about-gallery-image"
        />
        <img
          src="src/assets/img/Carousel4.jpg"
          alt="Descripción de la imagen"
          className="about-gallery-image"
        />
        <img
          src="src/assets/img/Carousel1.jpg"
          alt="Descripción de la imagen"
          className="about-gallery-image"
        />
        <img
          src="src/assets/img/Carousel2.jpg"
          alt="Descripción de la imagen"
          className="about-gallery-image"
        />
        <img
          src="src/assets/img/Carousel3.jpg"
          alt="Descripción de la imagen"
          className="about-gallery-image"
        />
        <img
          src="src/assets/img/Carousel4.jpg"
          alt="Descripción de la imagen"
          className="about-gallery-image"
        />
      </div>
      <Footer />
    </>
  );
}