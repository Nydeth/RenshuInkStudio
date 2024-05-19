import React from 'react'

export default function AdminLogin() {
  return (
    <div>
        <h1>Login</h1>
        <form action="/admin/login" method="post">
            <label htmlFor="Correo">Correo: </label>
            <input type="text" name="Correo" id="Correo"/><br/>
            <label htmlFor="password">Contraseña: </label>
            <input type="password" name="password" id="password"/><br/>
            <button type="submit">Iniciar Sesion</button><br/>
        </form>
    </div>
  )
}