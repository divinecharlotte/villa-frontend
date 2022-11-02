import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import HomeSlides from './HomeSlides';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <HomeSlides />
    <h1>PLAN BOOKING</h1>
    <button type="button" className="explore">
      Explore the App
      <MdNavigateNext />
    </button>
  </div>
);

export default Home;
