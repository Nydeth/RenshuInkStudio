import React, { useState, useEffect } from "react";
import "../cssComponents/formularioContacto.css";

function TatuadorSelector() {
  const [tatuadores, setTatuadores] = useState([]);

  useEffect(() => {
    fetch("https://7409-139-47-81-118.ngrok-free.app/api/Tatuadores/NombresId")
      .then((response) => response.json())
      .then((data) => {
        setTatuadores(data);
      })
      .catch((error) =>
        console.error("Error al obtener los datos de los tatuadores:", error)
      );
  }, []);

  return (
    <select className="input-field" id="selectTatuadores">
      {tatuadores.map((tatuador) => (
        <option key={tatuador.id} value={tatuador.id}>
          {tatuador.nombre}
        </option>
      ))}
    </select>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    publicidad: false,
    telefono: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://tu-api.com/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Datos enviados exitosamente
        console.log("Datos enviados exitosamente");
      } else {
        // Error al enviar los datos
        console.error("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error al enviar los datos", error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Formulario de Contacto</h2>
      <div className="form-group">
        <label htmlFor="nombre" className="label">
          Nombre:
        </label>
        <input
          type="text"
          className="input-field"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          type="email"
          className="input-field"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="label">
          <input
            type="checkbox"
            name="publicidad"
            checked={formData.publicidad}
            onChange={handleChange}
          />
          Recibir publicidad
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="telefono" className="label">
          Teléfono:
        </label>
        <input
          type="tel"
          className="input-field"
          id="telefono"
          name="telefono"
          value={formData.telefono || ""}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="selectTatuadores" className="label">
          Selecciona un tatuador:
        </label>
        <TatuadorSelector />
      </div>
      <button type="submit" className="submit-button">
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;