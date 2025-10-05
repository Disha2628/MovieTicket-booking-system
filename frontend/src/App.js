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
import { UserProvider, UserContext } from './contexts/UserContext';

function AppContent() {
  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movies" element={<LandingPage />} />
        <Route path="/about" element={
          <>
            <Navbar user={user} />
            <Footer />
          </>
        } />
        <Route path="/movie/:id" element={<><Navbar user={user} />
        <MovieDescription /></>} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<><Navbar user={user} /><ProfilePage /></>} />
        <Route path="/book/:id" element={<><Navbar user={user} /><ShowSelectionPage /></>} />
        <Route path="/seat-layout" element={<><Navbar user={user} /><SeatLayoutPage /></>} />
        <Route path="/booking-confirmation" element={<><Navbar user={user} /><BookingConfirmationPage /></>} />
        <Route path="/payment" element={<><Navbar user={user} /><PaymentPage /></>} />
        <Route path="/booking-history" element={<><Navbar user={user} /><BookingHistoryPage /></>} />
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
