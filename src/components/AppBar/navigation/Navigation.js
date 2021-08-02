import React from 'react';
import routes from '../../../routes';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.containerNav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to={routes.home}
            className={styles.Nav}
            activeClassName={styles.NavActive}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={routes.movies}
            className={styles.Nav}
            activeClassName={styles.NavActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
