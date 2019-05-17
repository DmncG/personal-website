import React, { Component } from 'react';
import { About, Home } from '../components';

class ViewHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <div className="viewhome-container__div">
        <Home />
        <About />
      </div>
    );
  }
}

export default ViewHome;
