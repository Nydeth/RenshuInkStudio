import React, { useState, useEffect } from "react";

const ImagenesAitor = ({ idTatuador }) => {
  const [imagenes, setImagenes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerImagenes = async () => {
      try {
        const response = await fetch(`http://localhost:5145/api/ImagenesTattoo`);
        console.log('Response:', response); // Imprimir la respuesta

        if (!response.ok) {
          throw new Error(`Error al obtener las imágenes: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Data:', data); // Imprimir los datos
        setImagenes(data);
      } catch (error) {
        setError(error.message);
        console.error('Error al obtener las imágenes:', error);
      } finally {
        setLoading(false);
      }
    };

    obtenerImagenes();
  }, [idTatuador]);

  // Dividir las imágenes en dos filas
  const primeraFila = imagenes.slice(0, 3);
  const segundaFila = imagenes.slice(3, 6);

  return (
    <div className="imgContainer">
      {loading ? (
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <div className="bioGallery">
            {primeraFila.map((imagen, index) => (
              <img
                className="bioImg"
                key={index}
                src={`data:image/jpeg;base64,${imagen.fotografia}`}
                alt={imagen.titulo}
              />
            ))}
          </div>
          <div className="bioGallery gal2">
            {segundaFila.map((imagen, index) => (
              <img
                className="bioImg"
                key={index}
                src={`data:image/jpeg;base64,${imagen.fotografia}`}
                alt={imagen.titulo}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImagenesAitor;
