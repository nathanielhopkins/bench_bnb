import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

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

  update(property) {
    return e => this.setState({[property]: e.target.value })
  }

  handleSubmit() {
    return e => console.log(this.state);
  }

  render() {
    const { benchId } = this.props;
    return(
      <div className='review-form'>
        <h3>Leave a Review:</h3>
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
          onClick={this.handleSubmit()}
          className='review-form-button review-submit'
          >Submit Review</button>
        <Link to={`/benches/${benchId}`}>
          <button className='review-form-button'>Cancel</button>
        </Link>
      </div>
    )
  }
};

export default ReviewForm;