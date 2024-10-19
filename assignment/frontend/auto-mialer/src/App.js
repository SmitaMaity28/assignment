import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Registration from './components/Registration';
import JobPost from './components/JobPost';
import Verification from './components/Verification';
import Logout from './components/Logout';
import logo from './assets/logo.svg'
import './App.css';

function App() {
  return (
    <BrowserRouter>

        <div className="wrapper">
          <div className="head">
        <img src={logo} alt="" />
        <span>
          {sessionStorage.getItem("authtoken") ? <Logout></Logout> : 'contact'}
        </span>
          </div>
          <div className='body-data'>
          <Routes>
          <Route path="/register"   element={<Registration/>} />
        <Route path="/"   element={<Registration/>} />
        <Route path="/post-job" element={<JobPost/>} />
        <Route path="/verify" element={<Verification/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
