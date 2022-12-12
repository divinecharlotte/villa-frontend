import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngellist } from 'react-icons/fa';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
// import { GrClose } from 'react-icons/gr';
// import { GiHamburgerMenu } from 'react-icons/gi';
import './Nav.css';

const Nav = () =>

//   const showHideNavbar = () => {
//     if (window.innerWidth >= 768) {
//       navRef.current.classList.toggle('a');
//     } else {
//       navRef.current.classList.toggle('hidden');
//     }
//   };

//   const logoutUser = (e) => {
//     e.preventDefault();
//     dispatch(removeUSER());
//     localStorage.removeItem('user');
//     alert('USER SIGNED OUT SUCCESSFULLY!');
//     navigate('/');
//   };

  (
    <>
      <nav className="nav">
        <div className="nav-items">
          <button type="button" className="nav-item">
            <NavLink to="/MainPage">
            Villas
            </NavLink>
          </button>
          <button type="button" className="nav-item">
            <NavLink to="/Reservation">
            My reservations
            </NavLink>
          </button>
          <button type="button" className="nav-item">
            <NavLink to="/Reservation">
            Reserver a Villa
            </NavLink>
          </button>
          <button type="button" className="nav-item">
            <NavLink  to="/CreateVilla ">
            Create a Villa
            </NavLink>
          </button>
          <button type="button" className="nav-item">
            <NavLink to="/Delete">
            Delete a Villa
            </NavLink>
          </button>
        </div>
        {/*
        {user.length > 0 ? (
          <button
            type="button"
            className="sign-out-button"
            onClick={logoutUser}
          >
            Sign Out
          </button>
        ) : (
          ''
        )} */}

        <div className="nav-footer">
          <ul className="links-container">
            <li className="links contacts">
              <a href="https://github.com/NatiDeme">
                <BsGithub className="links" />
              </a>
            </li>
            <li className="links contacts">
              <a href="https://www.linkedin.com/in/abdul-ali-5400bb216/">
                <BsLinkedin className="links" />
              </a>
            </li>
            <li className="links contacts">
              <a href="https://angel.co/u/taiwo-damola-adediran">
                <FaAngellist className="links" />
              </a>
            </li>
            <li className="links contacts">
              <a href="https://twitter.com/divine_maina">
                <BsTwitter className="links" />
              </a>
            </li>
          </ul>
          <h2 className="heading">&#169; 2022 All rights reserved</h2>
        </div>
      </nav>
    </>
  );
export default Nav;
