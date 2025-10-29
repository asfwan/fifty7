// src/components/OurStory.js
import React from "react";
import "../styles/ourstory.css";

function OurStory({
  subtitle = "Superior Service",
  title = "Personalized Attention",
  content = "We started with the simple idea of bringing the best from us to you. From our founder to our front-line workers, we put careful consideration into what our clients want and need.",
  content2 = "When we first enquired about the design we wanted, we were quoted S$50,000 which led to the decision of doing all these ourselves and documenting the process on how we transformed the space.",
  mainImage = "/Images/OurStory/pantry.jpg",
  galleryImages = [
    "/Images/OurStory/upstairshall.jpg",
    "/Images/OurStory/upstairshall2.jpg",
    "/Images/OurStory/insideentrance.jpg"
  ]
}) {
  return (
    <section className="personal-sanctuary-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT COLUMN — TEXT */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="text-content">
              <h5 className="section-subtitle">{subtitle}</h5>
              <h2 className="section-title">{title}</h2>
              <p className="section-desc">{content}</p>
              <p className="section-desc">{content2}</p>
            </div>

            {/* Image Row (3 small pictures) */}
            <div className="row image-gallery mt-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="col-4">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="gallery-img img-fluid rounded-1"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — IMAGE */}
          <div className="col-md-6 text-center">
            <img
              src={mainImage}
              alt="Interior Design"
              className="main-img img-fluid rounded-1 shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;