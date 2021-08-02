import axios from 'axios';
import React, { Component } from 'react';
import ReviewsList from '../ReviewsList/ReviewsList';

export class Reviews extends Component {
  state = { reviews: [], moviesId: null };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const BASE_URL = 'https://api.themoviedb.org';
    const KEY = 'e4343e9435d3c889d6a064dcae0361e0';
    const newReviews = await axios.get(`
${BASE_URL}/3/movie/${movieId}/reviews?api_key=${KEY}`);
    this.setState({ reviews: newReviews.data.results });
  }
  render() {
    const { reviews } = this.state;
    return (
      <>
        <ReviewsList reviews={reviews}></ReviewsList>
      </>
    );
  }
}

export default Reviews;
