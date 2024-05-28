import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import usePageTitle from "../UsePageTitle";
import ImagenesAitor from "../components/ImagenesAitor";
import ImagenesChal from "../components/ImagenesChal";
import "../cssComponents/bios.css";

export default function BibliotecaImg() {
  usePageTitle("Biblioteca - Renshu Ink");
  return (
    <>
      <Nav />
      <h2 className="pageTitle">Imágenes de Aitor</h2>
      <div className="container">
        <ImagenesAitor />
      </div>
      <h2 className="pageTitle">Imágenes de Chal</h2>
      <div className="container">
        <ImagenesChal />
      </div>
      <Footer />
    </>
  );
}
