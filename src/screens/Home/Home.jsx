import React from 'react';
import SliderContainer from '../../containers/SliderContainer';
import MoviesSection from '../../containers/MoviesSection';

const Home = () => (
  <div>
    <SliderContainer
      movieID="67499"
      type="TVSHOW"
    />
    <MoviesSection />
  </div>
);

export default Home;
