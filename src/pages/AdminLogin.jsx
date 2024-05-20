import React, { useState } from 'react';
import axios from 'axios';
import "../cssComponents/adminLogin.css"

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5145/api/Credenciales/VerificarCredenciales?email=${email}&password=${password}`);
      console.log(response.data); // Aquí podrías manejar la respuesta de la API, por ejemplo, guardar el token en el estado
      // Aquí podrías redirigir al usuario a la página de administrador o hacer cualquier otra acción necesaria
      const token = response.data; // Suponiendo que la respuesta es directamente el token
      sessionStorage.setItem('token', token);
      window.location.href = '/src/html/menuOpciones.html';
    } catch (error) {
      console.error('Error al realizar la petición:', error);
      setError('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="Correo">Correo: </label>
        <input type="text" name="Correo" id="Correo" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label htmlFor="password">Contraseña: </label>
        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button type="submit">Log in</button><br />
      </form>
    </div>
  );
}