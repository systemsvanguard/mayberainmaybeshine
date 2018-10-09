import React from 'react';
import Enter from './Enter'
import PropTypes from 'prop-types';

function Navbar(props) {
    return (
      <div className='navbar'>
        <h1>Maybe Rain | Maybe Shine</h1>
        <Enter
          direction={props.direction}
          // onClick={this.props.onClick}
        />
      </div>
    )
}

Navbar.propTypes = {
  direction: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  direction: 'row'
}



export default Navbar;
