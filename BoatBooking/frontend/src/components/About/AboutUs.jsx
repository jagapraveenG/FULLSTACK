// AboutPage.jsx

import React from 'react';
import './about.css';
import Navbar from '../Navbar/Nabar';

function AboutPage() {
  return (
    <div>
        <header>
            <Navbar/>
        </header>
    <div className="AboutPage">
      <header className="Hero">
        <div className="HeroContent">
          <h1 className="HeroTitle">BoatQueen: Where Adventure Reigns, Memories Sail On</h1>
          <p className="HeroSubtitle">Beyond Boat Bookings, We Craft Unforgettable Voyages.</p>
        </div>
      </header>
      
      <section className="StoryAndServices">
        <div className="Story">
          <h2 className="SectionTitle">Our Story</h2>
          <p>BoatQueen isn't just a platform, it's a passion project born from a deep love for the ocean and the stories it weaves...</p>
        </div>
        
        <div className="Services">
          <h2 className="SectionTitle">Why Choose BoatQueen?</h2>
          <ul>
            <li>Beyond Boats: We curate exceptional experiences, not just vessels...</li>
            <li>Unmatched Variety: From sleek yachts to charming sailboats...</li>
            <li>Expertise at Your Fingertips: Our crew isn't just skilled...</li>
            <li>Effortless Elegance: Leave the logistics to us...</li>
          </ul>
        </div>
      </section>
      
      {/* Additional sections (Destinations, Boat Types, Testimonials) can be added similarly */}
      
      <footer className="Footer">
        <button className="StartJourneyBtn">Start Your Journey</button>
      </footer>
    </div>
    </div>
  );
}

export default AboutPage;
