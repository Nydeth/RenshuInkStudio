import React, { useState } from 'react';
import "../cssComponents/cookiesNotification.css";
const CookieNotification = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(
    localStorage.getItem('cookiesAccepted')
  );

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', true);
    setAcceptedCookies(true);
  };

  if (acceptedCookies) {
    return null; // No mostrar la notificación si las cookies ya han sido aceptadas
  }

  return (
    <div className="cookie-notification">
      <p>Este sitio web utiliza cookies. Al continuar, aceptas el uso de cookies.</p>
      <button onClick={acceptCookies}>Aceptar</button>
    </div>
  );
};

export default CookieNotification;