import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return(
    <div className='not-found'>
      <h2>Sorry, something went wrong. Cannot find the page you're looking for.</h2>
      <img 
        src='https://c.tenor.com/8ApsefKQh2gAAAAC/starwars-droids.gif'
        alt='star wars: these arent the droids youre looking for'
      />
      <Link to='/' >
        <button className='error-nav-link'>Back to Page</button>
      </Link>
    </div>
  )
};

export default NotFound;