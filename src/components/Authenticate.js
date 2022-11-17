import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './signup/SignUp.css';
import './signin/SignIn.css';
import { HideForms } from './authenticateSlice';
import Signin from './signin/SignIn';

const Authenticate = () => {
  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState(true);
  const ChangePage = (status) => setActivePage(status);

  return (
    <div className="auth-wrapper">
      <div
        className="auth-bg"
        onClick={() => dispatch(HideForms())}
        aria-hidden="true"
      />
      {activePage && <Signin ChangePage={ChangePage} />}
      {/* {!activePage && <Signup ChangePage={ChangePage} />} */}
    </div>
  );
};

export default Authenticate;
