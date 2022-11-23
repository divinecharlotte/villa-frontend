import React from 'react';
import Nav from '../nav/Nav';
import './MainPage.css';
import villa2 from '../../assets/images/villa2.jpg';
import villa5 from '../../assets/images/villa5.jpg';
import villa4 from '../../assets/images/villa4.jpg';
import villa6 from '../../assets/images/villa6.jpg';

const Main = () => (
  <div>
    <Nav />
    Main
    <div className="mainPage">
      <img src={villa2} alt="villa advert" />
      <img src={villa6} alt="villa advert" />
      <img src={villa5} alt="villa advert" />
      <img src={villa4} alt="villa advert" />
    </div>
  </div>
);

export default Main;
