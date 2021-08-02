import React, { Component } from 'react';
import styles from './MovieSearchForm.module.css';
import { withRouter } from 'react-router';

export class MovieSearchForm extends Component {
  state = { query: '' };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.query}`,
    });
  };

  render() {
    return (
      <form className={styles.SearchBar} onSubmit={this.handleSubmit}>
        <input
          className={styles.SearchForm}
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
          placeholder="Search Movie"
        ></input>
        <button className={styles.SearchBtn} type="submit" />
      </form>
    );
  }
}

export default withRouter(MovieSearchForm);
