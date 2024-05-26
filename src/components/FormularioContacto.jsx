import React, { useState, useEffect } from "react";
import "../cssComponents/formularioContacto.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../cssComponents/Submit.scss"

function TatuadorSelector() {
  const [tatuadores, setTatuadores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5145/api/Tatuadores/NombresId")
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
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, telefono: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5145/api/Clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Datos enviados exitosamente");
      } else {
        console.error("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error al enviar los datos", error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="formName">Formulario de Contacto</h2>
      <h2 className="formH2">Para pedir cita o cualquier otra consulta sobre un tatuaje rellena este formulario:</h2>
      <div className="form-group">
        <label htmlFor="nombre" className="label">
          Nombre
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
          Correo electrónico
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
      <div className="form-group phone">
        <label htmlFor="telefono" className="label">
          Teléfono
        </label>
        <PhoneInput
          country={"es"}
          value={formData.telefono}
          onChange={handlePhoneChange}
          inputProps={{
            name: "telefono",
            required: true,
            className: "input-field",
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="selectTatuadores" className="label">
          ¿Con quién te gustaría contactar?
        </label>
        <TatuadorSelector />
      </div>
      <div className="form-group">
        <label className="label">
          Recibir publicidad
          <input
            type="checkbox"
            name="publicidad"
            checked={formData.publicidad}
            onChange={handleChange}
            className="checkbox"
          />
        </label>
      </div>
      <div className="button-container-1 submit-button" type="submit">
      <span className="mas">Enviar</span>
    <button id='work' type="button" name="Hover">Enviar</button>
  </div>
    </form>
  );
}

export default ContactForm;