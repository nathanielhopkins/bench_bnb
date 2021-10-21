import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.update = this.update.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    const { formType } = this.props;
    const header = formType == 'login' ? 'Log In!' : 'Sign Up!';
    const linkTo = formType == 'login' ? '/signup' : '/login';
    const linkToLabel = formType == 'login' ? "Sign Up" : "Log In";

    if (this.props.currentUser) {
      <Redirect to="/" />
    };

    return(
      <div className='session-form'>
        <h1 className='form-header'>{header}</h1>
        <form>
          <label>Username:
            <input 
              type='text'
              onChange={this.update('username')}
              value={this.state.username}
            />
          </label>
          <label>Password: 
            <input
              type='password'
              onChange={this.update('password')}
              value={this.state.password}
            />
          </label>
          <button 
          onClick={this.handleSubmit.bind(this)}
          >{header}</button>
        </form>
        <Link to={linkTo}>{linkToLabel}</Link>
      </div>
    )
  }
}