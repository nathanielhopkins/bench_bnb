import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login"><span>Login</span></Link>
      &nbsp;or&nbsp;
      <Link to="/signup"><span>Sign up!</span></Link>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hello, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;