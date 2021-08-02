import axios from 'axios';
import React, { Component } from 'react';
import MovieSearchForm from '../../components/movieSearchForm/MovieSearchForm';
import MoviesList from '../../components/MoviesList/MoviesList';
import queryString from 'query-string';
import styles from '../../components/MoviesList/MovieList.module.css';

export class Movies extends Component {
  state = { movies: [] };

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);

    if (queryParams?.query) {
      this.onChangeQuary(queryParams.query);
    }
  }

  onChangeQuary = async query => {
    const BASE_URL = 'https://api.themoviedb.org';
    const KEY = 'e4343e9435d3c889d6a064dcae0361e0';
    await axios
      .get(
        `${BASE_URL}/3/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`,
      )
      .then(response => {
        this.setState({ movies: response.data.results });
      });
  };
  render() {
    const { movies } = this.state;
    const { location } = this.props;
    return (
      <div className={styles.MovieContainer}>
        <MovieSearchForm onSubmit={this.onChangeQuary} />
        <MoviesList movies={movies} location={location}></MoviesList>
      </div>
    );
  }
}

export default Movies;
