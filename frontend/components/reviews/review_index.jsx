import React from 'react';

class ReviewIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenchReviews(this.props.benchId);
  }

  render() {
    const { reviews } = this.props;
    let reviewsList;
    if (reviews) {
      const reviewsArr = Object.values(reviews);
      reviewsList = reviewsArr.map(review => {
        return (
          <ul key={review.id}>
            <li>Rating: {review.rating}</li>
            <li>Comment: {review.comment}</li>
          </ul>
        )
      })
    }
    return(
      <div className="reviews">
        <h3>Reviews:</h3>
        {reviewsList}
      </div>
    )
  }
}

export default ReviewIndex;