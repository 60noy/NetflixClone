import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import key from '../../../utils/key';
import CategorySection from './CategorySection';

class CategorySectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  componentWillMount() {
    this.fetchMoviesFromCategory();
  }
  // fetch movies by category title [in props - name]
  fetchMoviesFromCategory = () => {
    const categoryID = this.props.id;
    const type = this.props.type === 'MOVIE' ? 'movie' : 'tv';
    const movies = [];
    fetch(`https://api.themoviedb.org/3/discover/${type}?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${categoryID}`)
    .then(data => data.json())
    .then((data) => {
      const results = data.results;
      _.forEach(results, (result) => {
        const movie = {
          img: `http://image.tmdb.org/t/p/w185/${result.poster_path}`,
          title: result.name,
          rating: result.vote_average / 2,
          year: type === 'movie' ? moment(result.release_date, 'YYYY-MM-DD').format('YYYY') : moment(result.last_air_date, 'YYYY-MM-DD').format('YYYY'),
          id: result.id,
        };
        movies.push(movie);
      });
      this.setState({ movies });
    });
  }
  // rendersMovieItem
  render() {
    const { name } = this.props;
    const { movies } = this.state;
    return (
      <div>
        { movies.length > 0 && (<CategorySection
          movies={movies}
          name={name}
        />)
      }
      </div>
    );
  }
}
CategorySectionContainer.propTypes = {
  // category name
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['MOVIE', 'TVSHOW']).isRequired,
};
export default CategorySectionContainer;
