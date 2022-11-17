import React from 'react';
import villa2 from '../../assets/images/villa2.jpg';
import villa6 from '../../assets/images/villa6.jpg';
import villa5 from '../../assets/images/villa5.jpg';

const HomeSlide = () => (
  <div className="slide-cont">
    <div className="slide-wrapper">
      <div className="slide-img slide-img1"><img src={villa2} alt="villa advert" /></div>
      <div className="slide-img slide-img3"><img src={villa6} alt="villa advert" /></div>
      <div className="slide-img slide-img4"><img src={villa5} alt="villa advert" /></div>
    </div>
  </div>
);

export default HomeSlide;
