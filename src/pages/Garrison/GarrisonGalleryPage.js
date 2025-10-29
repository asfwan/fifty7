// src/pages/Garrison/GarrisonGalleryPage.js
import React from "react";
import "../../styles/garrison/garrison-gallery.css";

function GarrisonGalleryPage() {
  return (
    <div className="garrison-gallery-page">
      <div className="container">
        <div className="page-header">
          <h1>Garrison Gallery</h1>
          <p>Explore our beautiful event space through these captivating images</p>
        </div>
        
        <div className="gallery-grid">
          {/* Add your gallery images here */}
          <div className="gallery-item">
            <img src="/Images/garrison-gallery-1.jpg" alt="Garrison Event Space" />
          </div>
          <div className="gallery-item">
            <img src="/Images/garrison-gallery-2.jpg" alt="Garrison Event Space" />
          </div>
          <div className="gallery-item">
            <img src="/Images/garrison-gallery-3.jpg" alt="Garrison Event Space" />
          </div>
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
}

export default GarrisonGalleryPage;