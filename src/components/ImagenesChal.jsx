import React, { useState, useEffect } from "react";

const ImagenesChal = ({ idTatuador }) => {
  const [imagenes, setImagenes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerImagenes = async () => {
      try {
        const response = await fetch(
          `http://localhost:5145/api/ImagenesTattoo`
        );
        console.log("Response:", response);

        if (!response.ok) {
          throw new Error(
            `Error al obtener las imágenes: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log("Data:", data);
        setImagenes(data);
      } catch (error) {
        setError(error.message);
        console.error("Error al obtener las imágenes:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerImagenes();
  }, [idTatuador]);

  const ultimasTres = imagenes.slice(-3);

  return (
    <div className="about-gallery">
        {loading ? (
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <>
            {ultimasTres.map((imagen, index) => (
              <div className="about-img-box" key={index}>
                <img
                className="about-image"
                  src={`data:image/jpeg;base64,${imagen.fotografia}`}
                  alt={imagen.titulo}
                />
                <div className="about-transparent-box">
                  <div className="about-caption">
                    <p>{imagen.titulo}</p>
                    <p className="about-opacity-low">{imagen.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
  );
};

export default ImagenesChal;
