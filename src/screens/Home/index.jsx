import React from 'react';
import { Link } from 'react-router-dom';
import CarouselContainer from '../../containers/CarouselContainer';

const WatchMovie = () => (
  <div>
    <CarouselContainer />
    <Link to="/movie" >movie </Link>
  </div>
);

export default WatchMovie;
