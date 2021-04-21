import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div id="hero" class="d-flex align-items-center">
    <div className="container text-center position-relative">
      <h1>24/7 Care is available</h1>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti.</h2>
      <Link to='/about' className='main-btn'>About</Link>
    </div>
  </div>
  );
}

export default HeroSection;