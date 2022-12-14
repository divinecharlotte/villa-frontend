import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';
import MainPage from './components/main/MainPage';
import Reservation from './components/reservation/Reservation';
import CreateVilla from './components/create/CreateVilla';
import Delete from './components/delete/Delete';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/Reservation" element={<Reservation />} />
      <Route path="/CreateVilla" element={<CreateVilla />} />
      <Route path="/Delete" element={<Delete />} />

    </Routes>
  </div>
);

export default App;
