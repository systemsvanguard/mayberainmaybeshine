import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from './Loading';
import api from './utils/api';

class Enter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState(function () {
      return {
        inputText: ''
      }
    });
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState(function () {
      return {
        inputText: value
      }
    });
  }

  render() {
    const city = this.state.inputText;

    return (
      <div className='enter-container' style={{ flexDirection: this.props.direction }}>
        <input
          className='form-control'
          type='text'
          placeholder='Mississauga'
          value={this.state.inputText}
          onChange={this.handleChange}
        />
        <Link
          to={{
            pathname: 'forecast',
            search: '?city=' + city
          }} >
          <button
            className='btn'
            onClick={this.handleClick.bind(null, city)}
            disabled={!this.state.inputText}
            >
            Show Weather
          </button>
        </Link>
      </div>
    )
  }
}

Enter.propTypes = {
  direction: PropTypes.string.isRequired
}

Enter.defaultProps = {
  direction: 'row'
}

export default Enter;
