import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import HomeSlides from './HomeSlides';
import { ShowForms } from '../authenticateSlice';
import Authenticate from '../Authenticate';
import './Home.css';
import Nav from '../nav/Nav';

const Home = () => {
  const dispatch = useDispatch();
  const authforms = useSelector((state) => state.authforms);
  const handleNavigate = () => dispatch(ShowForms());
  return (
    <div className="home-container">
      <Nav />
      <HomeSlides />
      <h1>PLAN BOOKING</h1>
      <button type="button" className="explore" onClick={handleNavigate}>
        Explore the App
        <MdNavigateNext />
      </button>
      {authforms.visible && <Authenticate />}
    </div>
  );
};
export default Home;
