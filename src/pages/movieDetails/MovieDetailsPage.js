/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import React, { Component } from 'react';
import styles from './MoviesDetailsPage.module.css';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import routes from '../../routes';

export class MovieDetails extends Component {
  state = {
    title: null,
    vote_average: null,
    overview: null,
    poster_path: null,
    release_date: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const BASE_URL = 'https://api.themoviedb.org';
    const KEY = 'e4343e9435d3c889d6a064dcae0361e0';
    const response = await axios.get(
      `${BASE_URL}/3/movie/${movieId}?api_key=${KEY}`,
    );
    this.setState({ ...response.data });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.movies);
  };

  render() {
    const { title, vote_average, overview, poster_path, genres } = this.state;
    const { match } = this.props;
    return (
      <>
        <button
          type="button"
          className={styles.Btn}
          onClick={this.handleGoBack}
        >
          Go back
        </button>
        <div className={styles.SectionDitails}>
          {poster_path && (
            <img
              className={styles.PosterMovie}
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            />
          )}
          <div className={styles.DescriptionMovie}>
            <h1>{title}</h1>
            <ul>
              <li className={styles.DescrItem}>
                <p>User Score:{vote_average}</p>
              </li>
              <li className={styles.DescrItem}>
                <h2>Overview</h2>
                <p>{overview}</p>
              </li>
              <li className={styles.DescrItem}>
                <h2>Genres</h2>
                <ul className={styles.Genres}>
                  {genres.map(genre => (
                    <li className={styles.GenresItem} key={genre.id}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.SectionAdditionl}>
          <div className={styles.NavListAdditional}>
            <h2>Additional Information</h2>
            <ul>
              <li>
                <NavLink to={`${match.url}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </div>
          <Route
            path={`${match.path}/cast`}
            render={props => {
              return <Cast {...props} cast={this.state.cast} />;
            }}
          />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </div>
      </>
    );
  }
}

export default MovieDetails;
