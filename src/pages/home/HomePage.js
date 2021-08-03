import React, { Component } from 'react';
import styles from './HomePage.module.css';
import { fetchTrending } from '../../services/apiService';
import MoviesList from '../../components/MoviesList/MoviesList';

export class HomePage extends Component {
  state = { movies: [] };

  async componentDidMount() {
    const response = await fetchTrending();
    this.setState({ movies: [...response] });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.HomeTitle}>Trending Today</h1>
        <MoviesList movies={movies} />
      </div>
    );
  }
}

export default HomePage;
