import React, { Component } from 'react';
import ReviewsList from '../ReviewsList/ReviewsList';
import { fetchReviews } from '../../services/apiService';

export class Reviews extends Component {
  state = { reviews: [], moviesId: null };

  async componentDidMount() {
    try {
      const response = await fetchReviews(this.props.match.params.movieId);
      this.setState({ reviews: [...response] });
    } catch (error) {
      console.log(error);
    }
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
