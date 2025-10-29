// src/components/BookNow.js
import React from "react";
import "../styles/booknow.css";

function BookNow({
  subtitle = "Book Now",
  title = "Your favorite destination designed to create memories",
  description = "A suite at Raffles Singapore is one of the world's most desirable addresses. Evoking the elegant, old-world glamour of a true grande dame, our 115 suites blend lofty architectural splendour and authentic details with all the comfort bestowed by modern technology and design.",
  buttonText = "Reserve Yours",
  buttonLink = "#book",
  imageSrc = "/Images/BookNow/57 entrance.jpg"
}) {
  return (
    <section className="booknow-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT COLUMN — IMAGE */}
          <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
            <div className="image-wrapper">
              <img
                src={imageSrc}
                alt="Luxury Suite"
                className="booknow-img"
              />
            </div>
          </div>

          {/* RIGHT COLUMN — TEXT */}
          <div className="col-md-6">
            <div className="text-content">
              <h5 className="section-subtitle">{subtitle}</h5>
              <h2 className="section-title">{title}</h2>
              <p className="section-desc">{description}</p>
              <a href={buttonLink} className="explore-btn">
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookNow;