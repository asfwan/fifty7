// src/components/GarrisonBookingForm.js
import React, { useState } from "react";
import "../../styles/garrison/garrison-bookingform.css";

function GarrisonBookingForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState({
    eventType: "",
    guests: "",
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const eventTypes = [
    "Corporate Event",
    "Wedding", 
    "Private Party",
    "Product Launch",
    "Conference",
    "Other"
  ];

  // Mock data for booked dates - in real app, this would come from API
  const bookedDates = [
    '2025-10-25', '2025-10-26', '2025-10-30',
    '2025-11-05', '2025-11-06', '2025-11-12',
    '2025-11-15', '2025-11-20', '2025-11-25'
  ];

  const handleDateSelect = (date) => {
    const dateString = date.toISOString().split('T')[0];
    if (!isDateBooked(date)) {
      setSelectedDate(dateString);
      setFormData(prev => ({ ...prev, date: dateString }));
    }
  };

  const isDateBooked = (date) => {
    const dateString = date.toISOString().split('T')[0];
    return bookedDates.includes(dateString);
  };

  const isDatePast = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate) {
      alert("Please select a date");
      return;
    }
    // Here you would typically send the data to your backend
    setShowPopup(true);
    // Reset form
    setSelectedDate("");
    setFormData({
      eventType: "",
      guests: "",
      name: "",
      email: "", 
      phone: "",
      message: "",
      date: ""
    });
  };

  // Calendar generation functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Previous month days
    const prevMonth = new Date(currentMonth);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    const prevMonthDays = getDaysInMonth(prevMonth);

    for (let i = firstDay - 1; i >= 0; i--) {
      const day = prevMonthDays - i;
      const date = new Date(prevMonth.getFullYear(), prevMonth.getMonth(), day);
      days.push({ day, date, isCurrentMonth: false });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      days.push({ day, date, isCurrentMonth: true });
    }

    // Next month days
    const totalCells = 42; // 6 weeks
    let nextMonthDay = 1;
    while (days.length < totalCells) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, nextMonthDay);
      days.push({ day: nextMonthDay, date, isCurrentMonth: false });
      nextMonthDay++;
    }

    return days;
  };

  const formatMonthYear = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const calendarDays = generateCalendar();

  return (
    <section className="garrison-booking-form-section">
      <div className="container">
        <div className="section-header">
          <h2>Book Your Event</h2>
          <p>Check availability and book your special occasion</p>
        </div>

        <div className="booking-layout">
          {/* Calendar Section - Left */}
          <div className="calendar-section">
            <div className="calendar-header">
              <button 
                className="nav-arrow" 
                onClick={() => navigateMonth(-1)}
              >
                ‹
              </button>
              <h3>{formatMonthYear(currentMonth)}</h3>
              <button 
                className="nav-arrow" 
                onClick={() => navigateMonth(1)}
              >
                ›
              </button>
            </div>

            <div className="calendar-weekdays">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="weekday">{day}</div>
              ))}
            </div>

            <div className="calendar-days">
              {calendarDays.map((dayObj, index) => {
                const isBooked = isDateBooked(dayObj.date);
                const isPast = isDatePast(dayObj.date);
                const isSelected = selectedDate === dayObj.date.toISOString().split('T')[0];
                const isDisabled = isBooked || isPast || !dayObj.isCurrentMonth;

                return (
                  <button
                    key={index}
                    className={`calendar-day ${
                      !dayObj.isCurrentMonth ? 'other-month' : ''
                    } ${isSelected ? 'selected' : ''} ${
                      isDisabled ? 'disabled' : ''
                    } ${isBooked ? 'booked' : ''}`}
                    onClick={() => !isDisabled && handleDateSelect(dayObj.date)}
                    disabled={isDisabled}
                  >
                    {dayObj.day}
                    {isBooked && <span className="booked-indicator">●</span>}
                  </button>
                );
              })}
            </div>

            <div className="calendar-legend">
              <div className="legend-item">
                <span className="legend-color available"></span>
                <span>Available</span>
              </div>
              <div className="legend-item">
                <span className="legend-color booked"></span>
                <span>Booked</span>
              </div>
              <div className="legend-item">
                <span className="legend-color selected"></span>
                <span>Selected</span>
              </div>
            </div>
          </div>

          {/* Form Section - Right */}
          <div className="form-section">
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="selected-date-display">
                {selectedDate ? (
                  <p><strong>Selected Date:</strong> {new Date(selectedDate).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                ) : (
                  <p>Please select a date from the calendar</p>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Event Type *</label>
                  <select 
                    name="eventType" 
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Event Type</option>
                    {eventTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Number of Guests *</label>
                  <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                    max="500"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us more about your event..."
                />
              </div>

              <div className="form-submit">
                <button type="submit" className="submit-btn">
                  Check Availability & Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Thank You!</h3>
            <p>Thank you for your enquiries. Our representative will contact you soon.</p>
            <button 
              onClick={() => setShowPopup(false)}
              className="popup-close-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default GarrisonBookingForm;
