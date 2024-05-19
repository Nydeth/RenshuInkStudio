import React, {useState, useEffect} from "react";

const BibliotecaChal =  () =>{
    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        const obtenerImagenes = async () => {
            try {
                const nombreTatuador = 'chal';
                const response = await fetch(`http://localhost:5145/api/ImagenesTattoo/tatuador/${nombreTatuador}`);
                const data = await response.json();
                setImagenes(data);
            } catch (error) {
                console.error('Error al obtener las imágenes:', error);
            }
        };

        obtenerImagenes();
    }, []);

    // Dividir las imágenes en dos grupos
    const mitad = Math.ceil(imagenes.length / 2);
    const primerGrupo = imagenes.slice(0, mitad);
    const segundoGrupo = imagenes.slice(mitad);

    return (
        <div id="imagenesContainer" style={{ display: 'flex' }}>
            <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap' }}>
                {primerGrupo.map((imagen, index) => (
                    <img
                        key={index}
                        src={`data:image/jpeg;base64,${imagen.fotografia}`}
                        alt={imagen.titulo}
                        style={{ width: 'calc(20% - 20px)', marginBottom: '20px', marginRight: '20px' }}
                    />
                ))}
            </div>
            <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap' }}>
                {segundoGrupo.map((imagen, index) => (
                    <img
                        key={index}
                        src={`data:image/jpeg;base64,${imagen.fotografia}`}
                        alt={imagen.titulo}
                        style={{ width: 'calc(20% - 20px)', marginBottom: '20px', marginRight: '20px' }}
                    />
                ))}
            </div>
        </div>
    );
};
export default BibliotecaChal;