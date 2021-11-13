import React from 'react';
import { Redirect } from 'react-router';


class BenchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      description: "",
      seating: 2,
      lat: this.props.lat,
      lng: this.props.lng,
      photoFile: null,
      photoUrl: null
    }

    this.cancelForm = this.cancelForm.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.clearBenchErrors();
  }

  cancelForm (e) {
    e.preventDefault();
    this.props.clearBenchErrors();
    this.props.history.replace("/")
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  }

  handleFile(e) {
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    }
    if (file) {
      fileReader.readAsDataURL(file);
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('bench[description]', this.state.description);
    formData.append('bench[seating]', this.state.seating);
    formData.append('bench[lat]', this.state.lat);
    formData.append('bench[lng]', this.state.lng);
    if(this.state.photoFile){
      formData.append('bench[photo]', this.state.photoFile);
    }

    this.props.createBench(formData)
      .then(() => this.props.history.replace("/"))
    
  }

  render() {
    const errors = Object.values(this.props.errors).map(error => {
      return <li className='session-error' key={error}>{error}</li>
    });
    const imagePreview = this.state.photoUrl ? 
      <img src={this.state.photoUrl} className='img-preview'/> : 
      <h3>Add an Image</h3>
    return(
      <div className='bench-form-container'>
        <h3 className="bench-form-title">Create A Bench!</h3>
        <ul className='bench-form-errors'>
          {errors}
        </ul>
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
          <div className='bench-photo-input'>
            <h3>Image Preview</h3>
            {imagePreview}
            <input 
              type='file' 
              onChange={this.handleFile.bind(this)}
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