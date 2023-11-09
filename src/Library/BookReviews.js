// components/BookReviews.js
import React, { useState } from 'react';
import './BookReviews.css'; // Import the CSS file

const BookReviews = ({ book, reviews }) => {
  const [userReview, setUserReview] = useState('');
  const [userRating, setUserRating] = useState(0);

  const handleSubmitReview = () => {
    if (userReview && userRating >= 1 && userRating <= 5) {
      // Add the user's review and rating to the reviews array for this book
      const newReview = { userReview, userRating };
      reviews.push(newReview);
      setUserReview('');
      setUserRating(0);
    }
  };

  const averageRating = () => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, review) => acc + review.userRating, 0);
    return (totalRating / reviews.length).toFixed(2);
  };

  return (
    <div className="book-reviews">
      <h3>User Reviews for {book.title}</h3>
      <p className="average-rating">
        Average Rating: {averageRating()} <span className="star-rating">★</span>
      </p>
      <div>
        {reviews.map((review, index) => (
          <div key={index} className="review-section">
            <p>User Review: {review.userReview}</p>
            <p>
              User Rating:{' '}
              {[...Array(review.userRating)].map((_, i) => (
                <span key={i} className="star-rating">
                  ★
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
      <div className="leave-review">
        <h4>Leave a Review</h4>
        <textarea
          placeholder="Your review..."
          value={userReview}
          onChange={(e) => setUserReview(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={userRating}
          onChange={(e) => setUserRating(parseInt(e.target.value))}
        />
        <button onClick={handleSubmitReview}>Submit Review</button>
      </div>
    </div>
  );
};

export default BookReviews;
