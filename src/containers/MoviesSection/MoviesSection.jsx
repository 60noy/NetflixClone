import React from 'react';
import CategorySectionContainer from './CategorySectionContainer';
// TODO: add to props the genres in order to let the user add new section
const MoviesSection = () => (
  <CategorySectionContainer
    id={16}
    name="Animation"
    type="TVSHOW"
  />
);

export default MoviesSection;
