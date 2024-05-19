import React, { useState, useEffect } from 'react';
import { Link } from "../Link.jsx";
import "../cssComponents/galeria.css";

const BibliotecaAitor = () => {
    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        const obtenerImagenes = async () => {
            try {
                const nombreTatuador = 'Aitor';
                const response = await fetch(`http://localhost:5145/api/ImagenesTattoo/tatuador/${nombreTatuador}`);
                const data = await response.json();
                setImagenes(data);
            } catch (error) {
                console.error('Error al obtener las imágenes:', error);
            }
        };

        obtenerImagenes();
    }, []);

    useEffect(() => {
        // Agregar el efecto de blanco y negro
        const interval = setInterval(() => {
            const imagenesConColor = document.querySelectorAll('.color-original');
            imagenesConColor.forEach((imagen) => {
                imagen.classList.remove('blanco-negro');
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Dividir las imágenes en dos grupos
    const mitad = Math.ceil(imagenes.length / 2);
    const primerGrupo = imagenes.slice(0, mitad);
    const segundoGrupo = imagenes.slice(mitad);

    return (
        <div className="galeria-container">
            <h2 className="nombre-artista">
                Aitor <a href="https://www.instagram.com/aitor/" target="_blank" rel="noopener noreferrer">@aitor</a>
            </h2>
            <div className="imagenes-container">
                {primerGrupo.map((imagen, index) => (
                    <img
                        key={index}
                        src={`data:image/jpeg;base64,${imagen.fotografia}`}
                        alt={imagen.titulo}
                        className="imagen-galeria blanco-negro color-original"
                    />
                ))}
                {segundoGrupo.map((imagen, index) => (
                    <img
                        key={index}
                        src={`data:image/jpeg;base64,${imagen.fotografia}`}
                        alt={imagen.titulo}
                        className="imagen-galeria blanco-negro color-original"
                    />
                ))}
            </div>
        </div>
    );
};

export default BibliotecaAitor;
