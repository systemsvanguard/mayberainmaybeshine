import React from 'react';
import { Link } from 'react-router-dom';

function NotFound () {
  return (
    <div className='not-found'>
      <h1>This page doesn't exist</h1>
      <Link to='/'>Home Page</Link>
    </div>
  )
}


export default NotFound;
