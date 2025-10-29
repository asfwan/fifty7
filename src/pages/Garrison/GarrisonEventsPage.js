// src/pages/garrison/GarrisonEventsPage.js
import React from "react";
import "../../styles/garrison/garrison-pages.css";

function GarrisonEventsPage() {
  const eventTypes = [
    {
      title: "Corporate Events",
      description: "Professional meetings, conferences, and corporate gatherings",
      features: ["Audio-visual equipment", "Catering services", "Professional setup"]
    },
    {
      title: "Weddings",
      description: "Elegant wedding ceremonies and receptions",
      features: ["Bridal suite", "Custom decorations", "Wedding planning"]
    },
    {
      title: "Private Parties",
      description: "Birthdays, anniversaries, and special celebrations",
      features: ["Custom themes", "Entertainment setup", "Catering options"]
    },
    {
      title: "Product Launches",
      description: "Professional product unveilings and brand events",
      features: ["Stage setup", "Media support", "Networking areas"]
    }
  ];

  return (
    <div className="garrison-subpage-container">
      <div className="garrison-subpage-hero">
        <div className="container">
          <h1>Types of Events</h1>
          <p>Perfect venues for every occasion</p>
        </div>
      </div>

      <div className="garrison-subpage-content">
        <div className="container">
          <div className="garrison-events-grid">
            {eventTypes.map((event, index) => (
              <div key={index} className="garrison-event-card">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <ul className="garrison-event-features">
                  {event.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GarrisonEventsPage;