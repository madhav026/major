
import React from 'react';
import "./home.css";
const Home = () => {
  return (
    <div className="landing">
      <h1>Welcome to DigiXam</h1>
      <p>Your trusted digital examination platform.</p>
      <div id="about-us" className="section">
        <h2>About Us</h2>
        <p>We are a team of experts dedicated to providing secure and reliable digital examination solutions.</p>
      </div>
      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;
