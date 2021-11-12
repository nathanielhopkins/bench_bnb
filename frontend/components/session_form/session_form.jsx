import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class SessionForm extends React.Component {
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
    this.props.processForm({user: user});
  }

  render() {
    const { formType } = this.props;
    const header = formType == 'login' ? 'Log In!' : 'Sign Up!';
    const linkTo = formType == 'login' ? '/signup' : '/login';
    const linkToLabel = formType == 'login' ? "sign up" : "log in";
    const errors = Object.values(this.props.errors.session).map(error => {
      return <li className='session-error' key={error}>{error}</li>
    });

    const formRender = (
      <div className='session-form'>
        <h1 className='form-header'>{header}</h1>
        <p>Please {formType} or <Link className='link-to' to={linkTo}>{linkToLabel} instead</Link></p>
        <ul className='session-errors'>
          {errors}
        </ul>
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
      </div>
    );
    
    return(
      this.props.currentUser.id ? <Redirect to='/' /> : formRender
    )
  }
}