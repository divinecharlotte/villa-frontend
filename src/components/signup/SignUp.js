import React from 'react';
import { Link } from 'react-router-dom';
import profile2 from '../../assets/images/profile2.jpg';
import './SignUp.css';

const SignUp = () => (
  <div className="signup-container">
    <form action="">
      <img src={profile2} alt="profile" className="profile" />
      <input type="name" placeholder="user name" required />
      <input type="email" name="" placeholder="email" required />
      <input type="password" name="" placeholder="password" required />
      <input type="password" name="" placeholder="confirm your password" required />
      <button className="submit" type="button">register</button>
      <p>
        Already have an account?
        <Link to="/SignIn">SignIn</Link>
      </p>
    </form>
  </div>
);

export default SignUp;
