import React from "react";

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.47SAleKF6Q2L_lOyX-sbEgHaEK?w=296&h=180&c=7&r=0&o=5&pid=1.7"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://cdn.toolset.com/wp-content/uploads/2020/05/toolset-homepage-hero-section-example.png"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Third slide"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
