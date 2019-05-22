import React, { Component } from 'react';
import { About, Home } from '../../components';

class ViewHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: window.scrollY,
      inVal: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ scrollY: window.scrollY });
  }

  bgToggle = () => {
    const { scrollY } = this.state;
    if (scrollY > 1000) {
      return 'about';
    }

    return 'home';
  }

  render() {
    const { scrollY, inVal } = this.state;
    return (
      <div className={`viewhome-container__div viewhome-container__div--${this.bgToggle()}`}>
        <Home />
        <About scrollY={scrollY} inVal={inVal} />
      </div>
    );
  }
}

export default ViewHome;
