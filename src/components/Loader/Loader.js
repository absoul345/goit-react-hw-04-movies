import React, { Component } from 'react';
import LoadingSpinn from 'react-loader-spinner';
import styles from './Loader.module.css';

export class Loader extends Component {
  render() {
    return (
      <div className={styles.loader}>
        <LoadingSpinn
          type="Oval"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }
}

export default Loader;
