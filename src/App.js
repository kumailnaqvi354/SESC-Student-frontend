// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';
import Navbar from './nav';
import RegisterCourse from './RegisterCourse';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/RegisterCourse" element={<RegisterCourse />} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
