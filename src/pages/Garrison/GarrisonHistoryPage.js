// src/pages/garrison/GarrisonHistoryPage.js
import React from "react";
import "../../styles/garrison/garrison-pages.css";

function GarrisonHistoryPage() {
  const timeline = [
    {
      year: "2010",
      title: "Foundation",
      description: "Garrison was founded with a vision to create premium event spaces"
    },
    {
      year: "2013",
      title: "First Major Renovation",
      description: "Complete refurbishment to incorporate modern design elements"
    },
    {
      year: "2016",
      title: "Award Recognition",
      description: "Received Excellence in Hospitality Award"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented advanced booking and event management systems"
    },
    {
      year: "2024",
      title: "Present Day",
      description: "Continuing to set standards in luxury event hosting"
    }
  ];

  return (
    <div className="garrison-subpage-container">
      <div className="garrison-subpage-hero">
        <div className="container">
          <h1>Our History</h1>
          <p>A legacy of excellence and innovation</p>
        </div>
      </div>

      <div className="garrison-subpage-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="garrison-content-text">
                <h2>Our Journey</h2>
                <p>
                  Our journey began with a simple yet powerful vision: to create spaces 
                  that seamlessly blend heritage with modern luxury. Garrison stands as 
                  a testament to this vision, offering a sanctuary of elegance and comfort 
                  in the heart of the city.
                </p>
                <p>
                  Over the years, we have evolved while staying true to our core values 
                  of excellence, attention to detail, and unparalleled service. Each chapter 
                  of our history has been marked by innovation and a commitment to exceeding 
                  our clients' expectations.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img 
                src="/Images/garrison-history.jpg" 
                alt="Garrison History" 
                className="garrison-content-image"
              />
            </div>
          </div>

          <div className="garrison-timeline-section">
            <h2 className="text-center">Our Timeline</h2>
            <div className="garrison-timeline">
              {timeline.map((item, index) => (
                <div key={index} className="garrison-timeline-item">
                  <div className="garrison-timeline-year">{item.year}</div>
                  <div className="garrison-timeline-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GarrisonHistoryPage;