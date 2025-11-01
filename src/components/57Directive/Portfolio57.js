// src/components/57Directive/Features57.js
import React, { useState, useEffect } from "react";
import "../../styles/57directive/portfolio57.css";

function Portfolio57() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const featuresItems = [
    // {
    //   id: 1,
    //   title: "Our Features",
    //   description: "Explore key highlights of our services",
    //   image: "/Images/57Directive/Features/kitchen.jpeg",
    // },
    {
      id: 2,
      title: "APARTMENTS",
      description: "Recognized for outstanding business excellence",
      image: "/Images/57Directive/Portfolio/apartment.jpg",
    },
    {
      id: 3,
      title: "CONDO",
      description: "Exquisite quality designs and fittings",
      image: "/Images/57Directive/Portfolio/condo.jpg",
    },
    {
      id: 3,
      title: "OFFICE",
      description: "Exquisite quality designs and fittings",
      image: "/Images/57Directive/Portfolio/office.jpg",

    },
    {
      id: 3,
      title: "RESTAURANT",
      description: "Exquisite quality designs and fittings",
      image: "/Images/57Directive/Portfolio/restaurant.jpg",
    },
    {
      id: 3,
      title: "RETAIL",
      description: "Exquisite quality designs and fittings",
      image: "/Images/57Directive/Portfolio/retail.jpg",
    },
    // {
    //   id: 3,
    //   title: "NEWS",
    //   description: "Exquisite quality designs and fittings",
    //   image: "/Images/57Directive/Features/news.jpeg",
    // },
    // {
    //   id: 3,
    //   title: "NEWS",
    //   description: "Exquisite quality designs and fittings",
    //   image: "/Images/57Directive/Features/news2.jpeg",
    // },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) =>
      prev === featuresItems.length - 1 ? 0 : prev + 1
    );

  const prevSlide = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? featuresItems.length - 1 : prev - 1
    );

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 5000);
  //   return () => clearInterval(interval);
  // }, [currentSlide]);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section id="features" className="features57-section">
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {featuresItems.map((item) => (
            <div key={item.id} className="carousel-slide">
              <div className="feature-item">
                <div className="feature-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="feature-image"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/1200x800/f8f3e7/63100d?text=Feature+Image";
                    }}
                  />
                  <div className="feature-overlay always-visible">
                    <h4 className="feature-title">{item.title}</h4>
                    <p className="feature-description">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-navigation-below">
          <button className="nav-arrow" onClick={prevSlide}>
            ‹
          </button>
          <span className="slide-counter">
            {currentSlide + 1}/{featuresItems.length}
          </span>
          <button className="nav-arrow" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio57;
