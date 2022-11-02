import React from 'react';
import { Link } from 'react-router-dom';
import profile2 from '../../assets/images/profile2.jpg';
import './SignIn.css';

const SignIn = () => (
  <div className="signin-container">
    <form action="">
      <img src={profile2} alt="profile" className="profile" />
      <input type="email" name="" placeholder="email" required />
      <input type="password" name="" placeholder="password" required />
      <button className="submit" type="button">SignIn</button>
      <p>
        Don&apos;t have  an account?
        <Link to="/SignUp">SignUp</Link>
      </p>
    </form>
  </div>
);

export default SignIn;
