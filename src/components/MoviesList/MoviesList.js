import React from 'react';
import MoviePreview from '../MoviePreview/MoviePreview';
import { Link, withRouter } from 'react-router-dom';
import styles from './MovieList.module.css';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={styles.MoviesGallery}>
      {movies.map(({ id, poster_path, original_title }) => (
        <li className={styles.MoviesItem} key={id}>
          <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
            <MoviePreview
              poster_path={poster_path}
              original_title={original_title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
