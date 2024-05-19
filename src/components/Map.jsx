import React from "react";

export default function GoogleMap() {
  return (
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3037.623263382894!2d-3.7058132869957303!3d40.417195971320446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI1JzAxLjkiTiAzwrA0MicxMS42Ilc!5e0!3m2!1ses!2sfi!4v1715162269902!5m2!1ses!2sfi"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
