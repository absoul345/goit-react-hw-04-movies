import React from 'react';
import styles from './ReviewsList.module.css';

const ReviewsList = ({ reviews }) => {
  return (
    <ul className={styles.ReviewsList}>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li className={styles.ReviewsItem} key={id}>
            {}
            <h2 className={styles.ReviewsName}>{author}</h2>
            <p className={styles.ReviewsContent}>{content}</p>
          </li>
        ))
      ) : (
        <h2 className={styles.ReviewsEmpty}>
          We don't have any reviews for this movie.
        </h2>
      )}
    </ul>
  );
};

export default ReviewsList;
