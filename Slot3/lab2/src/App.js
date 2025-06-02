import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // cần để Carousel hoạt động
import './App.css';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import MenuSection from './components/MenuSection';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <MenuSection />
      <BookingForm />
    </div>
  );
}

export default App;
