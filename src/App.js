import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';
import MainPage from './components/main/MainPage';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/MainPage" element={<MainPage />} />

    </Routes>
  </div>
);

export default App;
