// src/pages/garrison/GarrisonAboutPage.js
import React from "react";
import "../../styles/garrison/garrison-pages.css";

function GarrisonAboutPage() {
  return (
    <div className="garrison-subpage-container">
      <div className="garrison-subpage-hero">
        <div className="container">
          <h1>About Garrison</h1>
          <p>Discover our story and commitment to excellence</p>
        </div>
      </div>

      <div className="garrison-subpage-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img 
                src="/Images/garrison-about.jpg" 
                alt="About Garrison" 
                className="garrison-content-image"
              />
            </div>
            <div className="col-md-6">
              <div className="garrison-content-text">
                <h2>Our Legacy of Excellence</h2>
                <p>
                  Garrison represents our unwavering commitment to excellence in hospitality and design. 
                  From exquisite interiors to meticulously curated events, every detail reflects our 
                  dedication to creating unforgettable experiences for our guests.
                </p>
                <p>
                  Founded with a vision to redefine luxury event spaces, Garrison combines timeless 
                  elegance with modern sophistication. Our team of experienced professionals works 
                  tirelessly to ensure that every event exceeds expectations.
                </p>
                <div className="garrison-features-list">
                  <div className="garrison-feature-item">
                    <span className="garrison-feature-icon">✓</span>
                    <span>Over 10 years of excellence in hospitality</span>
                  </div>
                  <div className="garrison-feature-item">
                    <span className="garrison-feature-icon">✓</span>
                    <span>Professional event planning team</span>
                  </div>
                  <div className="garrison-feature-item">
                    <span className="garrison-feature-icon">✓</span>
                    <span>Customized experiences for every client</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GarrisonAboutPage;