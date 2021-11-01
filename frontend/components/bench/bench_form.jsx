import React from 'react';
import { Redirect } from 'react-router';


class BenchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      description: "",
      seating: null,
      lat: null,
      lng: null
    }

    this.cancelForm = this.cancelForm.bind(this);
  }

  cancelForm (e) {
    e.preventDefault();
    this.props.history.replace("/")
  }

  render() {
    return(
      <div className='bench-form-container'>
        <h3 className="bench-form-title">Create A Bench!</h3>
        <form className="bench-form">
          <label className='bench-field'>Decription:
            <input 
              type='text' 
              className='bench-field'
            />
          </label>
          <label className='bench-field'>Number of Seats:
            <input
              type='number'
              className='bench-field'
              defaultValue='2'
            />
          </label>
          <label className='bench-field'>Latitude:
            <input
              type='number'
              className='bench-field'
              disabled
            />
          </label>
          <label className='bench-field'>Longitude:
            <input
              type='number'
              className='bench-field'
              disabled
            />
          </label>
          <div className="button-holder">
            <input 
              type="submit" 
              value="Create Bench" 
              className="bench-form-button"
            />
          </div>
        </form>
        <div className="button-holder">
          <button 
            className="bench-form-button"
            onClick={this.cancelForm}
          >Cancel</button>
        </div>
      </div>
    )
  }
}

export default BenchForm;