import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import SearchBox from './SearchBox';
import key from '../../utils/key';
import MovieSearchItem from './MovieSearchItem';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      value: '',
      isLoading: false,

    };
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  fetchMoviesData = () => {
    const { value } = this.state;
    // request movies data with the value in the search box
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${_.lowerCase(value)}&page=1&include_adult=false`)
      .then(data => data.json())
      .then((data) => {
        console.log(`movies${JSON.stringify(data)}`);
        let results = data.results;
        if (results && results.length > 0) {
          results = _.slice(data.results, 5);
          _.uniqBy(results, single => single.name);
          const formattedResults = [];
          // loop each movie result
          _.forEach(results, ((result) => {
            const { name, overview, id } = result;
            const posterPath = result.poster_path;
            console.log(`pp${posterPath}`);
              // create new formatted result movie for passing it to Search component
            const formattedResult = {
              id,
              title: name,
              description: overview && `${overview.substring(0, 80)}...`,
              img: `https://image.tmdb.org/t/p/w92/${posterPath}`,
            };
            if (formattedResult.title) {
              formattedResults.push(formattedResult);
            }
              // add the formatted result to the array
            formattedResults.push(formattedResult);
          }));
          this.setState({ movies: formattedResults, isLoading: false });
        } else this.setState({ isLoading: false });
      });
  }

  // handles every change in search value
  handleInputChange = (value) => {
    this.setState({ value, isLoading: true });
    if (value.length < 1) this.resetComponent();
    else this.fetchMoviesData();
  }
  // handles movie selection - navigates to the movie's page by its id
  handleResultSelect = (movie) => {
    console.log(movie);
    this.setState({ value: movie.title });
    this.props.history.push(`/movie/${movie.id}`);
  }
  resultRenderer = ({ title, description, img }) =>
    <MovieSearchItem title={title} description={description} img={img} />

  render() {
    const { value, movies, isLoading } = this.state;
    return (
      <Grid>
        <Grid.Column width={8}>
          <SearchBox
            onChange={this.handleInputChange}
            onResultSelect={this.handleResultSelect}
            value={value}
            resultRenderer={this.resultRenderer}
            isLoading={isLoading}
            results={movies}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

SearchContainer.propTypes = {
  history: PropTypes.object.isRequired,  // eslint-disable-line react/forbid-prop-types
};

export default withRouter(SearchContainer);