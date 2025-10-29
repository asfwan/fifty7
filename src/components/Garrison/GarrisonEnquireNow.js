import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/garrison/garrison-enquirenow.css";

function GarrisonEnquireNow() {
  const navigate = useNavigate();

  const handleMakeEnquiry = () => {
    navigate("/garrison/enquiry");
  };

  return (
    <>
      {/* Section content */}
      <section className="garrison-enquire-now-section">
        <div className="container desktop-only">
          <div className="section-header">
            <h2>Enquire Now</h2>
            <p>Check availability and pricing for your event</p>
          </div>

          <div className="enquire-cta-container">
            <button
              className="enquire-btn"
              onClick={handleMakeEnquiry}
            >
              CHECK RATES
            </button>
          </div>
        </div>
      </section>

      {/* Sticky mobile button */}
      <div className="mobile-bottom-bar">
        <button
          className="mobile-enquire-btn"
          onClick={handleMakeEnquiry}
        >
          CHECK RATES
        </button>
      </div>
    </>
  );
}

export default GarrisonEnquireNow;
