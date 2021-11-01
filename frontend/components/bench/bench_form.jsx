import React from 'react';
import { Redirect } from 'react-router';


class BenchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      description: "",
      seating: 2,
      lat: 0,
      lng: 0
    }

    this.cancelForm = this.cancelForm.bind(this);
    this.update = this.update.bind(this);
  }

  cancelForm (e) {
    e.preventDefault();
    this.props.history.replace("/")
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
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
              value={this.state.description}
              onChange={this.update('description')}
            />
          </label>
          <label className='bench-field'>Number of Seats:
            <input
              type='number'
              className='bench-field'
              value={this.state.seating}
              onChange={this.update('seating')}
            />
          </label>
          <label className='bench-field'>Latitude:
            <input
              type='number'
              className='bench-field'
              value={this.state.lat}
              disabled
            />
          </label>
          <label className='bench-field'>Longitude:
            <input
              type='number'
              className='bench-field'
              value={this.state.lng}
              disabled
            />
          </label>
          <div className="button-holder">
            <input 
              type="submit" 
              value="Create Bench" 
              className="bench-form-button"
              onClick={this.handleSubmit.bind(this)}
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