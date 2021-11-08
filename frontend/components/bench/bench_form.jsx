import React from 'react';
import { Redirect } from 'react-router';


class BenchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      description: "",
      seating: 2,
      lat: this.props.lat,
      lng: this.props.lng
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
    const bench = Object.assign({}, this.state);
    this.props.createBench({bench: bench})
      .then(this.props.history.replace("/"));
  }

  render() {
    return(
      <div className='bench-form-container'>
        <h3 className="bench-form-title">Create A Bench!</h3>
        <form className="bench-form">
          <div className='bench-field'>
            <label>Decription:</label>
            <input 
              type='text' 
              className='bench-field'
              value={this.state.description}
              onChange={this.update('description')}
            />
          </div>
          <div className='bench-field'>
            <label>Number of Seats:</label>
            <input
              type='number'
              className='bench-field'
              value={this.state.seating}
              onChange={this.update('seating')}
            />
          </div>
          <div className='bench-field'>
            <label>Latitude:</label>
            <input
              type='number'
              className='bench-field'
              value={this.state.lat}
              disabled
            />
          </div>
          <div className='bench-field'>
            <label>Longitude:</label>
            <input
              type='number'
              className='bench-field'
              value={this.state.lng}
              disabled
            />
          </div>
        </form>
        <div className="button-holder">
          <button 
            type="submit" 
            className="bench-form-button"
            onClick={this.handleSubmit.bind(this)}
          >Create Bench</button>
        </div>
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