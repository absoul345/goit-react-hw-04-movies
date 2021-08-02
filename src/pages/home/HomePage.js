import axios from 'axios';
import React, { Component } from 'react';
import styles from './HomePage.module.css';
import MoviesList from '../../components/MoviesList/MoviesList';

export class Home extends Component {
  state = { movies: [] };

  async componentDidMount() {
    const BASE_URL = 'https://api.themoviedb.org';
    const KEY = 'e4343e9435d3c889d6a064dcae0361e0';
    const response = await axios.get(
      `${BASE_URL}/3/trending/all/day?api_key=${KEY}`,
    );
    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.HomeTitle}>Trending Today</h1>
        <MoviesList movies={movies}></MoviesList>
      </div>
    );
  }
}

export default Home;
