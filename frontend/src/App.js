import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MovieDescription from './components/MovieDescription';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; 
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movies" element={<LandingPage />} />
        <Route path="/about" element={
          <>
            <Navbar />
            <Footer />
          </>
        } />
        <Route path="/movie/:id" element={<><Navbar />
        <MovieDescription /></>} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;