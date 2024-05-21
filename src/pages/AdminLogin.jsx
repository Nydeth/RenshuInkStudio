import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import "../cssComponents/adminLogin.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5145/api/Credenciales/VerificarCredenciales?email=${email}&password=${password}`
      );
      console.log(response.data);
      const token = response.data;
      sessionStorage.setItem("token", token);
      window.location.href = "/src/html/menuOpciones.html";
    } catch (error) {
      console.error("Error al realizar la petición:", error);
      setError("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  return (
    <body className="adminBody">
      <Nav />
      <div className="container">
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMG9R3YYx5qSw/p66Y5StieB3E6zc5s5Q6LbxKt"
            crossorigin="anonymous"
          />
        </Helmet>
        <div className="login-form-wrap">
          <div className="login-box">
            <div className="login-content-warp">
              <div className="profile-form">
                <img src="../src/assets/img/OniPi.png" alt="logo" />
                <span className="profile-title">Renshu Ink Studio</span>
              </div>
              {error && <p className="error">{error}</p>}
              <form onSubmit={handleSubmit} className="adminForm">
                <div className="email-input">
                  <span className="email">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <input
                    type="text"
                    name="Correo"
                    id="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo electrónico"
                  />
                </div>

                <div className="password-input">
                  <span className="password">
                    <i className="fas fa-key"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                  />
                </div>
                <div className="butn-sign">
                  <button type="submit">Iniciar sesión</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}
