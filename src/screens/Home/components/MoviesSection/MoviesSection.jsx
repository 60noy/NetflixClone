import React, { Component } from 'react';
import _ from 'lodash';
import CategorySectionContainer from '../../../Home/containers/CategorySectionContainer';
import key from '../../../../utils/key';

let id = 0;

const categorySectionRenderer = (category) => {
  id += 1;
  return (<CategorySectionContainer
    key={id}
    id={category.id}
    name={category.name}
    type={category.type}
  />);
};
class MoviesSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }
  componentWillMount() {
    this.fetchCategories();
  }
  fetchMoviesCategories = (categories) => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`)
    .then(data => data.json())
    .then((data) => {
      const genres = data.genres;
      _.forEach(genres, (category) => {
        const formattedCategory = {
          id: category.id,
          name: category.name,
          type: 'MOVIE',
        };
        categories.push(formattedCategory);
      });
      this.setState({ categories });
    });
  }
  // fetch tv shows categories and return the promise
  fetchTVShowsCategories = categories =>
  fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${key}&language=en-US`)
    .then(data => data.json())
    .then((data) => {
      const genres = data.genres;
      _.forEach(genres, (category) => {
        const formattedCategory = {
          id: category.id,
          name: category.name,
          type: 'TVSHOW',
        };
        categories.push(formattedCategory);
      });
    })
  // fetch tv shows categories and movies categories one after another
  fetchCategories = () => {
    const categories = [];
    this.fetchTVShowsCategories(categories).then(this.fetchMoviesCategories(categories));
  }
  render() {
    const { categories } = this.state;
    return (
      <div style={{ paddingTop: '2%', background: '#212121' }}>
        {categories.map(categorySectionRenderer)}
      </div>
    );
  }
}
export default MoviesSection;
