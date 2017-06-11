import React from 'react';
import CarouselContainer from './containers/CarouselContainer';
import MoviesSection from './components/MoviesSection';
import Navbar from '../App/components/Navbar';

const Home = () => (
  <div>
    <Navbar />
    <CarouselContainer />
    <MoviesSection />
  </div>
);

export default Home;
