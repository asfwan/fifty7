// src/pages/Home.js - FINAL VERSION
import React from "react";
import HeroBanner from "../components/HeroBanner";
import BookNow from "../components/BookNow";
import OurStory from "../components/OurStory";
import OurBusiness from "../components/OurBusiness";
// import BookingForm from "../components/BookingForm";

function Home() {
  return (
    <div>
      <HeroBanner 
        videoSrc="/Videos/handcraft.mp4"
        title="Welcome to FiftySevenSG"
        subtitle="Where timeless elegance meets personalized luxury."
        buttonText="Discover More"
        buttonLink="#about"
      />

      {/* <BookingForm /> */}

      <BookNow
        subtitle="Luxury Experience"
        title="Your favorite destination designed to create memories"
        description="FiftySevenSG represents the pinnacle of luxury and craftsmanship. From exquisite accommodations to curated experiences, every detail reflects our dedication to creating unforgettable moments."
        buttonText="Reserve Yours"
        buttonLink="#book"
        imageSrc="/Images/BookNow/57 entrance.jpg"
      />

      <OurStory 
        subtitle="Our Heritage"
        title="The FiftySevenSG Story"
        content="We started with the simple idea of bringing the best from us to you. From our founder to our front-line workers, we put careful consideration into what our clients want and need."
        content2="Our journey began with a vision to create spaces that blend heritage with modern luxury. FiftySevenSG stands as a testament to this vision, offering sanctuaries of elegance and comfort."
        mainImage="/Images/OurStory/pantry.jpg"
        galleryImages={[
          "/Images/OurStory/upstairshall.jpg",
          "/Images/OurStory/upstairshall2.jpg",
          "/Images/OurStory/insideentrance.jpg"
        ]}
      />

      <OurBusiness 
        subtitle="Our Business"
        title="A world of craftsmanship and creativity"
        description="From bespoke interiors to curated spaces and lifestyle ventures, our businesses share a common thread — an obsession with quality, detail, and timeless character."
      />
    </div>
  );
}

export default Home;