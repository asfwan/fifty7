import React from "react";
import "../../styles/garrison/garrison-herobanner.css";

function GarrisonHeroBanner() {
  return (
    <section className="garrison-hero-banner">
      {/* Scrolling Text */}
      <div className="scrolling-text">
        <div className="scrolling-content">
          20% OFF FOR ALL EVENTS THIS NOVEMBER • 20% OFF FOR ALL EVENTS THIS NOVEMBER • 20% OFF FOR ALL EVENTS THIS NOVEMBER •
        </div>
      </div>

      {/* === Video Background === */}
      <div className="video-container">
        <video
          className="hero-video"
          src="/Videos/Garrison/garrison.mp4"
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          disablePictureInPicture
        />
      </div>

      {/* Optional overlay (if you want dark tint over video for contrast) */}
      <div className="video-overlay"></div>

      {/* Dots (kept for structure if you want future slides) */}
      <div className="carousel-dots single-video">
        <button className="dot active" />
      </div>

      {/* WhatsApp Floating Icon */}
      <div className="whatsapp-float">
        <a 
          href="https://wa.me/6512345678" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <img src="/Images/Garrison/whatsapp.png" alt="WhatsApp" />
        </a>
      </div>
    </section>
  );
}

export default GarrisonHeroBanner;
