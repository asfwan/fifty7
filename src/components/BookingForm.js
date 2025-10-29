// // src/components/BookingForm.js
// import React, { useState } from "react";
// import "../styles/bookingform.css";


// function BookingForm() {
//   const [formData, setFormData] = useState({
//     checkIn: "",
//     checkOut: "",
//     guests: "1 Room, 2 Guests",
//     special: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       `Searching rooms from ${formData.checkIn} to ${formData.checkOut} for ${formData.guests}`
//     );
//   };

//   return (
//     <div className="booking-form-container">
//       <form className="booking-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Check-in</label>
//           <input
//             type="date"
//             name="checkIn"
//             value={formData.checkIn}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label>Check-out</label>
//           <input
//             type="date"
//             name="checkOut"
//             value={formData.checkOut}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label>Room & Guests</label>
//           <select
//             name="guests"
//             value={formData.guests}
//             onChange={handleChange}
//           >
//             <option>1 Room, 1 Guest</option>
//             <option>1 Room, 2 Guests</option>
//             <option>2 Rooms, 4 Guests</option>
//             <option>3 Rooms, 6 Guests</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Special Rates & Accessibility</label>
//           <select
//             name="special"
//             value={formData.special}
//             onChange={handleChange}
//           >
//             <option value="">None</option>
//             <option value="member">Member Rate</option>
//             <option value="promo">Promotional Code</option>
//             <option value="access">Accessible Room</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <button type="submit" className="check-rates-btn">
//             Check Rates
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default BookingForm;
