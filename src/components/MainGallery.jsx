import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const MainGallery = () => {
  return (
    <section className="gallery-artist-section accordian">
        <h2 id="gallery">GALERÍA</h2>
        <div className="gallery-artist-container">
          <div className="gallery">
            <img src="src/assets/img/tattoo2.jpg" alt="Tatuaje 2" />
            <img src="src/assets/img/tattoo9.jpg" alt="Tatuaje 9" />
            <img src="src/assets/img/tattoo4.jpg" alt="Tatuaje 4" />
            <img src="src/assets/img/tattoo8.jpg" alt="Tatuaje 8" />
            <img src="src/assets/img/tattoo5.jpg" alt="Tatuaje 5" />
            <img src="src/assets/img/tattoo3.jpg" alt="Tatuaje 3" />
            <img src="src/assets/img/tattoo6.jpg" alt="Tatuaje 6" />
            <img src="src/assets/img/tattoo7.jpg" alt="Tatuaje 7" />
            <img src="src/assets/img/piercing1.jpg" alt="Piercing 1" />
            <img src="src/assets/img/piercing4.jpg" alt="Piercing 4" />
          </div>
        </div>
      </section>
  );
};

export default MainGallery;
