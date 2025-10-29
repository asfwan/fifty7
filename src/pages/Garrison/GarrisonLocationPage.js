// src/components/GarrisonLocationContact.js
import React from "react";
import "../../styles/garrison/garrison-locationcontact.css";

function GarrisonLocationContact() {
  return (
    <section className="garrison-location-contact-section">
      <div className="container">
        
        <div className="section-header">
          <h2>Location & Access</h2>
          <p>Find us and reach out for enquiries or venue information</p>
        </div>

        <div className="location-single-layout">
          
          {/* Map + Get Directions */}
          <div className="map-container">
            <div className="map-placeholder">
              <img 
                src="/Images/garrison-map.jpg"
                alt="Garrison Location Map"
                className="map-image"
              />
              <div className="map-overlay">
                <h4>Garrison Event Space</h4>
                <p>Click to view larger map</p>
              </div>
            </div>

            <div className="transportation-links">
              <h4>Get Directions</h4>
              <div className="transport-buttons">
                <a 
                  href="https://waze.com/ul?q=Garrison+Event+Space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transport-btn waze-btn"
                >
                  <span className="transport-icon">🚗</span> Waze
                </a>
                <a 
                  href="https://maps.google.com/?q=Garrison+Event+Space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transport-btn google-btn"
                >
                  <span className="transport-icon">🗺️</span> Google Maps
                </a>
                <a 
                  href="https://maps.apple.com/?q=Garrison+Event+Space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transport-btn apple-btn"
                >
                  <span className="transport-icon">📱</span> Apple Maps
                </a>
              </div>
            </div>
          </div>

          {/* Combined Contact Info */}
          <div className="contact-info combined">
            <h4 className="contact-title">Contact Information</h4>

            <div className="contact-grid">
              <div className="contact-box">
                <span className="icon">📍</span>
                <div>
                  <h5>Address</h5>
                  <p>123 Event Street<br/>Downtown District<br/>City 12345</p>
                </div>
              </div>

              <div className="contact-box">
                <span className="icon">📞</span>
                <div>
                  <h5>Phone</h5>
                  <p>+1 (555) 123-4567</p>
                  <p>+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="contact-box">
                <span className="icon">✉️</span>
                <div>
                  <h5>Email</h5>
                  <p>events@garrison.com</p>
                  <p>enquiries@garrison.com</p>
                </div>
              </div>

              <div className="contact-box">
                <span className="icon">🕒</span>
                <div>
                  <h5>Operating Hours</h5>
                  <p>Mon–Sun: 8:00 AM – 1:00 AM</p>
                  <p>24/7 Enquiry Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="social-links">
            <h5>Follow Us</h5>
            <div className="social-buttons">
              <a href="#" className="social-btn facebook">Facebook</a>
              <a href="#" className="social-btn instagram">Instagram</a>
              <a href="#" className="social-btn linkedin">LinkedIn</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default GarrisonLocationContact;
