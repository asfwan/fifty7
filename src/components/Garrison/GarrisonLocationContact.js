// src/components/garrison/GarrisonLocationContact.js
import React from "react";
import "../../styles/garrison/garrison-locationcontact.css";

function GarrisonLocationContact() {
  return (
    <section className="garrison-location-contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2>Visit Garrison</h2>
          <p>Your destination for premium dining & events</p>
        </div>

        {/* Layout */}
        <div className="location-contact-layout">
          
          {/* Map Section */}
          <div className="map-container">
            <div className="map-placeholder">
              <img
                src="/map.jpg" 
                alt="Garrison Map"
                className="map-image"
              />
              <div className="map-overlay">
                <h4>Get Directions</h4>
                <p>Navigate to our venue using your preferred map</p>
              </div>
            </div>

            <div className="direction-buttons">
              <a href="#" className="direction-btn">🚗 Waze</a>
              <a href="#" className="direction-btn">📍 Google Maps</a>
              <a href="#" className="direction-btn">🧭 Apple Maps</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            
            <div className="contact-item">
              <h5>📍 Location</h5>
              <p>Level 10, Tower A, Pavilion KL<br/>168 Jalan Bukit Bintang, KL</p>
            </div>

            <div className="contact-item">
              <h5>🕒 Operating Hours</h5>
              <p>Mon – Sun: 10:00 AM – 10:00 PM</p>
            </div>

            <div className="contact-item">
              <h5>📞 Phone</h5>
              <p>+603-1234 5678</p>
            </div>

            <div className="contact-item">
              <h5>✉️ Email</h5>
              <p>hello@garrison.my</p>
            </div>

            <div className="contact-item social-section">
              <h5>Follow Us</h5>
              <div className="social-buttons">
                <a href="#" className="social-btn">Instagram</a>
                <a href="#" className="social-btn">Facebook</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default GarrisonLocationContact;
