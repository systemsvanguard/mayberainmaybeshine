import React from 'react';
import Navbar from './Navbar';
import Loading from './Loading';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import api from './utils/api';
var utils = require('./utils/helpers');
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;

function DayForecast(props) {
  const date = getDate(props.day.dt);
  const icon = props.day.weather[0].icon;
  return (
    <div onClick={props.onClick} className='dayContainer forecast-link'>
      <img className='weather' src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 className='subheader'>{date}</h2>
    </div>
  )
}

DayForecast.propTypes = {
  onClick: PropTypes.func.isRequired
}

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true
    }

    this.makeRequest = this.makeRequest.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    this.makeRequest(this.city);
  }

  componentWillReceiveProps(nextProps) {
    this.city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(this.city);
  }

  makeRequest(city) {
    this.setState(function () {
      return {
        loading: true
      }
    })

    api.getForecast(city)
      .then(function (results) {
        this.setState(function () {
          return {
            loading: false,
            data: results
          }
        })
      }.bind(this));
  }

  handleClick(city) {
    city.city = this.city;
    this.props.history.push({
      pathname: '/detail/' + this.city,
      state: city,
    })
  }

  render() {
    const loading = this.state.loading;
    const data = this.state.data;

    return (
      <div>
        <Navbar
          direction='row'
        />
        {loading
          ? <Loading text='Loading' speed={50} />
          : <div>
              <h1 className='forecast-header'>{this.city}</h1>
              <div className='forecast-container'>
                {data.list.map(function (listItem) {
                  return <DayForecast onClick={this.handleClick.bind(this, listItem)} key={listItem.dt} day={listItem} />
                }, this)}
              </div>
            </div>}
      </div>
    )
  }
}

export default Forecast;
