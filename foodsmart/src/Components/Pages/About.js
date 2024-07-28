import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Create this CSS file for styling

const About = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Foodsmart</h1>
        <Link to="/donate" className="donate-button">Donate</Link>
      </div>
      <section className="content">
        <h2>About Us</h2>
        <p>We are dedicated to reducing food waste and helping those in need...</p>
      </section>
    </div>
  );
};

export default About;
