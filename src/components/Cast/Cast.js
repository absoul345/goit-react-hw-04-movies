/* eslint-disable no-undef */
import axios from 'axios';
import React, { Component } from 'react';
import CastList from './CastList/CastList';

export class Cast extends Component {
  state = { actors: [], id: null, moviesId: null };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const BASE_URL = 'https://api.themoviedb.org';
    const KEY = 'e4343e9435d3c889d6a064dcae0361e0';
    const cast = await axios.get(
      `${BASE_URL}/3/movie/${movieId}/credits?api_key=${KEY}`,
    );
    this.setState({ actors: cast.data.cast });
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

export default Cast;
