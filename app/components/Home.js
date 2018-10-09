import React from 'react';
import Enter from './Enter';
import Navbar from './Navbar';

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     city: ''
  //   }
  //   this.handleClick = this.handleClick.bind(this);
  // }
  //
  // handleClick(value) {
  //   this.setState(function () {
  //     return {
  //       city: value
  //     }
  //   });
  //
  //   api.getCurrentWeather(value)
  //     .then(function (data) {
  //       console.log(data);
  //       });
  //     })
  // }


  render() {
    return (
      <div className='container'>
        <Navbar
          // onClick={this.handleClick}
          direction='row'
        />
        <div className='home-container' style={{ backgroundImage: "url('app/images/pattern.svg')"}}>
          <h1 className='header'>Enter a City & Province</h1>
          <Enter
            direction='column'
            // onClick={this.handleClick}
          />
        </div>
      </div>
    )
  }
}

export default Home;
