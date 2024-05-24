import React, { useState, useEffect } from "react";
import "../cssComponents/biblioteca.css";

const BibliotecaChal = () => {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const obtenerImagenes = async () => {
      try {
        const nombreTatuador = "chal";
        const response = await fetch(
          `http://localhost:5145/api/ImagenesTattoo/tatuador/${nombreTatuador}`
        );
        const data = await response.json();
        setImagenes(data);
      } catch (error) {
        console.error("Error al obtener las imágenes:", error);
      }
    };

    obtenerImagenes();
  }, []);

  // Dividir las imágenes en dos grupos
  const mitad = Math.ceil(imagenes.length / 2);
  const primerGrupo = imagenes.slice(0, mitad);
  const segundoGrupo = imagenes.slice(mitad);

  return (
    <div id="imgContainer">
      <div className="imgWrap">
        {primerGrupo.map((imagen, index) => (
          <img
            className="bioGal"
            key={index}
            src={`data:image/jpeg;base64,${imagen.fotografia}`}
            alt={imagen.titulo}
          />
        ))}
      </div>
      <div className="imgWrap">
        {segundoGrupo.map((imagen, index) => (
          <img
            className="bioGal"
            key={index}
            src={`data:image/jpeg;base64,${imagen.fotografia}`}
            alt={imagen.titulo}
          />
        ))}
      </div>
    </div>
  );
};
export default BibliotecaChal;
