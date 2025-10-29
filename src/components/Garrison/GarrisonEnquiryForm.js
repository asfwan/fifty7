// src/components/GarrisonEnquiryForm.js
import React, { useState } from "react";
import "../../styles/garrison/garrison-enquiryform.css";

function GarrisonEnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    preferredDate: "",
    numberOfGuests: "",
    eventDetails: ""
  });

  const eventTypes = [
    "Wedding",
    "Birthday Party",
    "Corporate Event",
    "Anniversary",
    "Family Gathering",
    "Other"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! We'll contact you within 24 hours.");
    
    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      eventType: "",
      preferredDate: "",
      numberOfGuests: "",
      eventDetails: ""
    });
  };

  return (
    <section className="garrison-enquiry-form-section">
      <div className="container">
        <div className="form-header">
          <h1>Make an Enquiry</h1>
          <p>Fill out the form below and we'll get back to you within 24 hours</p>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          {/* Row 1: Full Name & Email */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Row 2: Phone Number & Event Type */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="eventType">Event Type</label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
              >
                <option value="">Select Event Type</option>
                {eventTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3: Preferred Date & Number of Guests */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="preferredDate">Preferred Date</label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="numberOfGuests">Number of Guests</label>
              <input
                type="number"
                id="numberOfGuests"
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleChange}
                placeholder="Estimated guests"
                min="1"
              />
            </div>
          </div>

          {/* Event Details Textarea */}
          <div className="form-group full-width">
            <label htmlFor="eventDetails">Event Details & Requirements</label>
            <textarea
              id="eventDetails"
              name="eventDetails"
              value={formData.eventDetails}
              onChange={handleChange}
              placeholder="Tell us about your event, special requirements, or any questions you have..."
              rows="6"
            />
          </div>

          {/* Submit Button */}
          <div className="form-submit">
            <button type="submit" className="submit-btn">
              Send Enquiry
            </button>
          </div>
        </form>

        <div className="form-footer">
          <p>We'll contact you within 24 hours to discuss your event requirements.</p>
        </div>
      </div>
    </section>
  );
}

export default GarrisonEnquiryForm;