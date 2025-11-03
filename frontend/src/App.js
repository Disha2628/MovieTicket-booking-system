import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MovieDescription from './pages/MovieDescription';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ShowSelectionPage from './pages/ShowSelectionPage';
import SeatLayoutPage from './pages/SeatLayoutPage';
import BookingConfirmationPage from './pages/BookingConfirmationPage';
import PaymentPage from './pages/PaymentPage';
import BookingHistoryPage from './pages/BookingHistoryPage';
import About from './components/About';
import { UserProvider, UserContext } from './contexts/UserContext';

function AppContent() {
  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
    <Navbar user={user} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movies" element={<LandingPage />} />
        <Route path="/about" element={
          <>
            <About />
            <Footer />
          </>
        } />
        <Route path="/movie/:id" element={<>
        <MovieDescription /></>} />
        <Route path="/register" element={<><RegistrationPage /></>} />
        <Route path="/login" element={<><LoginPage /></>} />
        <Route path="/profile" element={<><ProfilePage /></>} />
        <Route path="/book/:id" element={<><ShowSelectionPage /></>} />
        <Route path="/seat-layout" element={<><SeatLayoutPage /></>} />
        <Route path="/booking-confirmation" element={<><BookingConfirmationPage /></>} />
        <Route path="/payment" element={<><PaymentPage /></>} />
        <Route path="/forgot-password" element={<><h1 style={{color : "white"}}>IF YOU FORGOT YOUR PASSWORD THEN GET THE FUCK OUT OF HERE BITCH!</h1></>} />
        <Route path="/booking-history" element={<><BookingHistoryPage /></>} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
