// src/components/57Directive/OurTeam57.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/57directive/ourteam57.css";

function OurTeam57() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const teamMembers = [
    {
      id: 1,
      title: "Our Team",
      description: "Meet our dedicated team of professionals committed to delivering exceptional experiences",
      image: "/Images/57Directive/Team/group.jpg",
    },
    {
      id: 2,
      title: "Luqman",
      description: "Perfect for corporate events, weddings, galas and product launches.",
      image: "/Images/57Directive/Team/luqman.jpg",
      route: "/garrison/events",
    },
    {
      id: 3,
      title: "Amelia",
      description: "Designer",
      image: "/Images/57Directive/Team/amelia.jpg",
      route: "/garrison/about",
    },
    {
      id: 3,
      title: "Ahmad",
      description: "Designer",
      image: "/Images/57Directive/Team/ahmad.jpg",
      route: "/garrison/about",
    },
    {
      id: 3,
      title: "Am",
      description: "Designer",
      image: "/Images/57Directive/Team/am.jpg",
      route: "/garrison/about",
    },
    {
      id: 3,
      title: "Farah",
      description: "Designer",
      image: "/Images/57Directive/Team/farah.jpg",
      route: "/garrison/about",
    },
    {
      id: 3,
      title: "Izzati",
      description: "Designer",
      image: "/Images/57Directive/Team/izzati.jpg",
      route: "/garrison/about",
    },
    {
      id: 3,
      title: "Mirhan",
      description: "Designer",
      image: "/Images/57Directive/Team/mirhan.jpg",
      route: "/garrison/about",
    },
    {
      id: 3,
      title: "Muhaymin",
      description: "Designer",
      image: "/Images/57Directive/Team/muhaymin.jpg",
      route: "/garrison/about",
    },
    {
      id: 3,
      title: "Nabila",
      description: "Designer",
      image: "/Images/57Directive/Team/nabila.jpg",
      route: "/garrison/about",
    },
    {
      id: 3,
      title: "Naufal",
      description: "Designer",
      image: "/Images/57Directive/Team/naufal.jpg",
      route: "/garrison/about",
    },
    {
      id: 3,
      title: "Redzuan",
      description: "Designer",
      image: "/Images/57Directive/Team/redzuan.jpg",
      route: "/garrison/about",
    },
    {
      id: 3,
      title: "Rizal",
      description: "Designer",
      image: "/Images/57Directive/Team/rizal.jpg",
      route: "/garrison/about",
    },
    {
      id: 3,
      title: "Tim",
      description: "Designer",
      image: "/Images/57Directive/Team/tim.jpg",
      route: "/garrison/about",
    },
    {
      id: 3,
      title: "Yana",
      description: "Designer",
      image: "/Images/57Directive/Team/yana.jpg",
      route: "/garrison/about",
    },
    {
      id: 3,
      title: "Zul",
      description: "Designer",
      image: "/Images/57Directive/Team/zul.jpg",
      route: "/garrison/about",
    },
    // {
    //   id: 3,
    //   title: "Amelia",
    //   description: "Designer",
    //   image: "/Images/57Directive/Team/amelia.jpg",
    //   route: "/garrison/about",
    // },
    // {
    //   id: 3,
    //   title: "Amelia",
    //   description: "Designer",
    //   image: "/Images/57Directive/Team/amelia.jpg",
    //   route: "/garrison/about",
    // },
    // {
    //   id: 3,
    //   title: "Amelia",
    //   description: "Designer",
    //   image: "/Images/57Directive/Team/amelia.jpg",
    //   route: "/garrison/about",
    // },
    // {
    //   id: 3,
    //   title: "Amelia",
    //   description: "Designer",
    //   image: "/Images/57Directive/Team/amelia.jpg",
    //   route: "/garrison/about",
    // },
    // {
    //   id: 3,
    //   title: "Amelia",
    //   description: "Designer",
    //   image: "/Images/57Directive/Team/amelia.jpg",
    //   route: "/garrison/about",
    // },
    // {
    //   id: 3,
    //   title: "Amelia",
    //   description: "Designer",
    //   image: "/Images/57Directive/Team/amelia.jpg",
    //   route: "/garrison/about",
    // },
    visualViewport
    // ...rest of team members
  ];

  const nextSlide = () => setCurrentSlide(prev => prev === teamMembers.length - 1 ? 0 : prev + 1);
  const prevSlide = () => setCurrentSlide(prev => prev === 0 ? teamMembers.length - 1 : prev - 1);

  // // Auto-advance slides
  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 5000);
  //   return () => clearInterval(interval);
  // }, [currentSlide]);

  // Touch handlers for mobile swipe
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
    <section id="team" className="team-57-section">
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {teamMembers.map(member => (
            <div key={member.id} className="carousel-slide">
              <div className="team-item">
                <div 
                  className="team-image-wrapper"
                  onClick={() => member.route && navigate(member.route)}
                  style={{ cursor: member.route ? "pointer" : "default" }}
                >
                  <img
                    src={member.image}
                    alt={member.title}
                    className="team-image"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/1200x800/f8f3e7/63100d?text=Team+Member";
                    }}
                  />
                  <div className="team-overlay always-visible">
                    <h4 className="team-member-title">{member.title}</h4>
                    <p className="team-member-role">{member.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Below */}
        <div className="carousel-navigation-below">
          <button className="nav-arrow nav-prev" onClick={prevSlide}>‹</button>
          <span className="slide-counter">{currentSlide + 1}/{teamMembers.length}</span>
          <button className="nav-arrow nav-next" onClick={nextSlide}>›</button>
        </div>
      </div>
    </section>
  );
}

export default OurTeam57;
