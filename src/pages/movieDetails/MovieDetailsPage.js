/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import styles from './MoviesDetailsPage.module.css';
import { NavLink, Route, withRouter } from 'react-router-dom';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import routes from '../../routes';
import { fetchMovieDetails } from '../../services/apiService';

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
    try {
      const response = await fetchMovieDetails(this.props.match.params.movieId);
      this.setState(response);
    } catch (error) {
      console.log(error);
    }
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
                <NavLink
                  to={{
                    pathname: `${match.url}/cast`,
                    state: { from: this.props.location.state.from },
                  }}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `${match.url}/reviews`,
                    state: { from: this.props.location.state.from },
                  }}
                >
                  Reviews
                </NavLink>
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

export default withRouter(MovieDetails);
