import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';
import { About, Home } from '../../components';

class ViewHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: window.scrollY,
      inVal: false
    };
  }

  bgToggle = () => {
    const { scrollY } = this.state;
    if (scrollY > 1000) {
      return 'about';
    }

    return 'home';
  }

  aboutOnEnter = () => this.setState({ inVal: true });

  aboutOnLeave = () => this.setState({ inVal: false });

  render() {
    const { inVal } = this.state;
    return (
      <div className="viewhome-container__div">
        <Home />
        <About inVal={inVal} aboutOnEnter={this.aboutOnEnter} aboutOnLeave={this.aboutOnLeave} />
      </div>
    );
  }
}

export default ViewHome;
