import React, { Component } from 'react';
import '../styles/name.scss';

export default class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeState: '',
    };
  }

  // Determines class name for Name root div depending on the time
  toggleTimeState = () => {
    let time = new Date();
    switch (time.getHours()) {
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
        this.setState({ timeState: 'name morning' });
        break;
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
        this.setState({ timeState: 'name day' });
        break;
      case 18:
      case 19:
      case 20:
        this.setState({ timeState: 'name sunset' });
        break;
      case 21:
      case 22:
      case 23:
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.setState({ timeState: 'name night' });
        break;
      default:
        break;
    }
  };

  // checks time state every 5 seconds and changes depending on time
  componentDidMount() {
    this.toggleTimeState();
    const self = this;
    self.interval = setInterval(function () {
      self.toggleTimeState();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className={this.state.timeState}>
        <div className="text-container">
          <h1 className="text">Alex Verdin</h1>
          <h3 className="text">Web Developer</h3>
        </div>
      </div>
    );
  }
}
