import React, { Component } from 'react';
import MovieSearchForm from '../../components/movieSearchForm/MovieSearchForm';
import MoviesList from '../../components/MoviesList/MoviesList';
import queryString from 'query-string';
import styles from '../../components/MoviesList/MovieList.module.css';
import { fetchSearch } from '../../services/apiService';

export class Movies extends Component {
  state = { movies: [] };

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);

    if (queryParams?.query) {
      this.onChangeQuary(queryParams.query);
    }
  }

  onChangeQuary = async query => {
    try {
      const response = await fetchSearch(query);
      this.setState({ movies: [...response] });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { movies } = this.state;
    const { location } = this.props;
    return (
      <div className={styles.MovieContainer}>
        <MovieSearchForm onSubmit={this.onChangeQuary} />
        <MoviesList movies={movies} location={location} />
      </div>
    );
  }
}

export default Movies;
