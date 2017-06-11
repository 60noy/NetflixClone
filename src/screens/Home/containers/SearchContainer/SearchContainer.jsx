import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import SearchBox from './SearchBox';
import key from '../../../../utils/key';
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
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${value}&page=1&include_adult=false`)
      .then(data => data.json())
      .then((data) => {
        console.log(`movies${JSON.stringify(data)}`);
        let results = data.results;
        if (results && results.length > 0) {
          results = data.results;
          _.uniqBy(results, single => single.name);
          const formattedResults = [];
          // loop each movie result
          _.forEach(results, ((result) => {
            const type = result.media_type;
            if ((type === 'movie' || type === 'tv') && result.poster_path) {
              const { overview, id } = result;
              const posterPath = result.poster_path;
                // create new formatted result movie for passing it to Search component
              const formattedResult = {
                id,
                title: type === 'movie' ? result.title : result.name,
                description: overview && `${overview.substring(0, 100)}...`,
                img: `http://image.tmdb.org/t/p/w75/${posterPath}`,
              };
              formattedResults.push(formattedResult);
            }
          }));
          this.setState({ movies: formattedResults, isLoading: false });
        } else this.setState({ isLoading: false });
      },
          );
  }

  // handles every change in search value
  handleInputChange = (value) => {
    this.setState({ value, isLoading: true });
    if (value.length === 0) this.resetComponent();
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
