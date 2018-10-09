import React from 'react';
import Navbar from './Navbar';
import queryString from 'query-string';
var utils = require('./utils/helpers');
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;

class DayDetail extends React.Component {
  render() {
    const date = getDate(this.props.location.state.dt);
    const icon = this.props.location.state.weather[0].icon;
    const props = this.props.location.state;
    return (
      <div>
        <Navbar direction='row' />
        <div className='dayContainer'>
          <img className='weather' src={'/app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
          <p>{date}</p>
          <p>{props.city}</p>
          <p>{props.weather[0].description}</p>
          <p>min temp: {convertTemp(props.temp.min)} degrees</p>
          <p>max temp: {convertTemp(props.temp.max)} degrees</p>
          <p>humidity: {props.humidity}</p>
        </div>
      </div>
    )
  }

}

export default DayDetail;
