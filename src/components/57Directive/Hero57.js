import React from "react";
import "../../styles/57directive/hero57.css";

function Hero57() {
  return (
    <section className="hero57-banner">
      {/* Scrolling Text */}
      {/* <div className="scrolling-text">
        <div className="scrolling-content">
          57 DIRECTIVE • DESIGN • RENOVATE • BUILD • 57 DIRECTIVE • DESIGN • RENOVATE • BUILD • 57 DIRECTIVE •
        </div>
      </div> */}

      {/* === Video Background === */}
      <div className="video-container">
        <video
          className="hero-video"
          src="/Videos/57Directive/directive.mp4"
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          disablePictureInPicture
        />
      </div>

      {/* Optional overlay (slight tint for text contrast) */}
      <div className="video-overlay"></div>

      {/* Placeholder for future text/content */}
      <div className="hero57-content">
        {/* Example (uncomment if needed):
        <h1>57 Directive</h1>
        <p>Renovate. Redefine. Revive.</p> */}
      </div>

      {/* WhatsApp Floating Icon */}
      {/* <div className="whatsapp-float">
        <a
          href="https://wa.me/6592304357"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <img src="/Images/57Directive/whatsapp.png" alt="WhatsApp" />
        </a>
      </div> */}
    </section>
  );
}

export default Hero57;
