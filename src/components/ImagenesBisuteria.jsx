import React, { useState, useEffect } from "react";
import "../cssComponents/bisuteria.css";

const BisuteriaImages = () => {
  const [imagenes, setImagenes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerImagenes = async () => {
      try {
        const response = await fetch("http://localhost:5145/api/Bisuteria");
        if (!response.ok) {
          throw new Error(
            `Error al obtener las imágenes: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        setImagenes(data);
      } catch (error) {
        setError(error.message);
        console.error("Error al obtener las imágenes:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerImagenes();
  }, []);

  return (
    <div className="gallery-image">
      {loading ? (
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          {imagenes.map((imagen, index) => (
            <div className="img-box" key={index}>
              <img
                src={`data:image/jpeg;base64,${imagen.fotografia}`} // Asegúrate de que el campo correcto es 'fotografia'
                alt={imagen.titulo} // Asegúrate de que el campo correcto es 'titulo'
              />
              <div className="transparent-box">
                <div className="caption">
                  <p>{imagen.titulo}</p>
                  <p className="opacity-low">{imagen.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default BisuteriaImages;
