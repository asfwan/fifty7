// src/pages/garrison/GarrisonFeaturesPage.js
import React from "react";
import "../../styles/garrison/garrison-pages.css";

function GarrisonFeaturesPage() {
  const features = [
    {
      title: "State-of-the-Art Facilities",
      description: "Modern audio-visual equipment and lighting systems",
      icon: "🎯"
    },
    {
      title: "Flexible Spaces",
      description: "Modular layouts to suit any event size and type",
      icon: "🏛️"
    },
    {
      title: "Premium Catering",
      description: "Gourmet catering services with customizable menus",
      icon: "🍽️"
    },
    {
      title: "Professional Support",
      description: "Dedicated event coordinators and technical staff",
      icon: "👥"
    },
    {
      title: "Luxury Amenities",
      description: "Premium furnishings and decor options",
      icon: "⭐"
    },
    {
      title: "Easy Accessibility",
      description: "Central location with ample parking and transport links",
      icon: "📍"
    }
  ];

  return (
    <div className="garrison-subpage-container">
      <div className="garrison-subpage-hero">
        <div className="container">
          <h1>Space Features</h1>
          <p>Premium amenities for exceptional events</p>
        </div>
      </div>

      <div className="garrison-subpage-content">
        <div className="container">
          <div className="garrison-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="garrison-feature-card">
                <div className="garrison-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GarrisonFeaturesPage;