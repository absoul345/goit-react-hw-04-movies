/* eslint-disable no-undef */
import React, { Component } from 'react';
import CastList from './CastList/CastList';
import { fetchCast } from '../../services/apiService';
import { withRouter } from 'react-router-dom';

export class Cast extends Component {
  state = { actors: [], id: null, moviesId: null };

  async componentDidMount() {
    try {
      const response = await fetchCast(this.props.match.params.movieId);
      this.setState({ actors: [...response] });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { actors } = this.state;
    return (
      <>
        <CastList actors={actors} />
      </>
    );
  }
}

export default withRouter(Cast);
