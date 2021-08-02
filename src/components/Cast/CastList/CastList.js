import React from 'react';
import styles from './CastList.module.css';

const CastList = ({ actors }) => {
  return (
    <ul className={styles.CastList}>
      {actors.map(({ profile_path, name, character, id }) => (
        <li className={styles.CastItem} key={id}>
          {profile_path !== null ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
          ) : (
            <img
              className={styles.CastImg}
              src="https://cdn.pixabay.com/photo/2015/07/19/11/05/panels-851426_960_720.jpg"
              alt=""
            />
          )}

          <h2 className={styles.CastName}>{name}</h2>
          <p>Character:{character}</p>
        </li>
      ))}
    </ul>
  );
};

export default CastList;
