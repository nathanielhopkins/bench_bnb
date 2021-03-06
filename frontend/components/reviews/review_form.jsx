import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      rating: 5,
      comment: "",
      author: this.props.author,
      benchId: this.props.benchId
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearReviewErrors();
  }

  update(property) {
    return e => this.setState({[property]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    let review = Object.assign({}, this.state);
    let history = this.props.history;
    this.props.createBenchReview(review)
      .then(() => history.replace(`/benches/${this.props.benchId}`));
  }

  render() {
    const { benchId } = this.props;
    const errors = this.props.errors.map(error => {
      return <li className='session-error' key={error}>{error}</li>
    });
    return(
      <div className='review-form'>
        <h3>Leave a Review:</h3>
        <ul className='session-errors'>
          {errors}
        </ul>
        <label>Rating:
          <br/>
          <input 
            type='number' 
            min='1'
            max='5'
            value={this.state.rating}
            onChange={this.update('rating')}
            className="review-form-rating"
          />
        </label>
        <label>Comment:
          <br/>
          <textarea 
            cols='30'
            rows='10'
            onChange={this.update('comment')}
            value={this.state.comment}
            className='review-form-comment'
            />
        </label>
        <button 
          onClick={this.handleSubmit}
          className='review-form-button review-submit'
          >Submit Review</button>
        <Link to={`/benches/${benchId}`}>
          <button className='review-form-button'>Cancel</button>
        </Link>
      </div>
    )
  }
};

export default withRouter(ReviewForm);