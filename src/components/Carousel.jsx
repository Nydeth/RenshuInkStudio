import React from "react";

const Carousel = ({ carouselMessages }) => {
  return (
    <div className="carousel slide carousel-fade bg-dark" data-bs-ride="carousel" data-bs-interval={7000}>
      <div className="carousel-inner">
        {carouselMessages.map((message, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img
              src={`src/assets/img/Carousel${index + 1}.jpg`}
              className="d-block w-100"
              alt={`Carousel image ${index + 1}`}
            />
            <div className="carousel-caption">
              <h1 className="title">{message.title}</h1>
              <p className="description">
                {message.description}
                <br />
                {message.description2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
