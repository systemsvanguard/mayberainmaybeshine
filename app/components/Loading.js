import React from 'react';
import PropTypes from 'prop-types';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.originalText = props.text;
    this.state = {
      text: this.originalText
    };
  }

  componentDidMount() {
    const stopper = this.originalText + '...';
    this.interval = window.setInterval(function () {
      if (this.state.text === stopper) {
        this.setState(function () {
          return {
            text: this.originalText
          }
        });
      } else {
        this.setState(function (prevState) {
          return {
            text: prevState.text + '.'
          }
        });
      }
    }.bind(this), this.props.speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <div className='loading'>
          {this.state.text}
      </div>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 100
}

export default Loading;
