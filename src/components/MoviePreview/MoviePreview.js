import React from 'react';
import styles from '../MoviesList/MovieList.module.css';

const MoviePreview = ({ poster_path }) => {
  return (
    <div className={styles.ImgMoviesItem}>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
    </div>
  );
};

export default MoviePreview;
