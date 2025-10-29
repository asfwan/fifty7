// src/components/HeroBanner.js
import React from "react";
import "../styles/herobanner.css";

function HeroBanner({
  videoSrc = "/Videos/handcraft.mp4",
  posterImg = "/Images/hero-poster.jpg",
  bgImage = null, // New prop: background image
  title = "Welcome to FiftySevenSG",
  subtitle = "Where timeless elegance meets personalized luxury.",
  buttonText = "Discover More",
  buttonLink = "#rooms",
}) {
  const heroStyle = bgImage
    ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }
    : {};

  return (
    <section id="home" className="hero-banner position-relative text-white" style={heroStyle}>
      {/* Video element */}
      {videoSrc && (
        <video
          className="hero-video"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          poster={posterImg}
          aria-hidden="true"
        />
      )}

      {/* gradient overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Content */}
      <div className="container hero-content">
        <h1 className="hero-title display-5 fw-bold">{title}</h1>
        <p className="hero-sublead lead mb-4">{subtitle}</p>
        {buttonText && buttonLink && (
          <a href={buttonLink} className="btn btn-outline-light btn-lg px-4">
            {buttonText}
            <img
              src="/Images/down-arrow-white.png"
              alt=""
              className="ms-2 down-arrow"
            />
          </a>
        )}
      </div>
    </section>
  );
}

export default HeroBanner;
