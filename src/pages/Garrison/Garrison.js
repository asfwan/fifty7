// src/pages/Garrison/Garrison.js
import React from "react";
import GarrisonHeroBanner from "../../components/Garrison/GarrisonHeroBanner";
import GarrisonBookNow from "../../components/Garrison/GarrisonBookNow";
// import GarrisonBookingForm from "../../components/Garrison/GarrisonBookNow";
import GarrisonEnquireNow from "../../components/Garrison/GarrisonEnquireNow";
import GarrisonLocationContact from "../../components/Garrison/GarrisonLocationContact"; // We'll create this next
import GarrisonNavbar from "../../components/Garrison/GarrisonNavbar";
import GarrisonMore from "../../components/Garrison/GarrisonMore";

function Garrison() {
  return (
    <div>
      <GarrisonNavbar />
      <GarrisonHeroBanner />
      <GarrisonBookNow />
      <GarrisonMore />
      {/* <GarrisonBookingForm /> */}
      <GarrisonEnquireNow /> {/* New section with calendar & rates */}
      {/* <GarrisonLocationContact /> */}
    </div>
  );
}

export default Garrison;