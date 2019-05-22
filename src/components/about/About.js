import React from 'react';
import PropTypes from 'prop-types';
import Fade from '@material-ui/core/Fade';
import { Waypoint } from 'react-waypoint';
import './_about.scss';

// Transition Styles

const About = (props) => {
  const { inVal, aboutOnEnter, aboutOnLeave } = props;
  return (
    <Waypoint onEnter={aboutOnEnter} onLeave={aboutOnLeave}>
      <div >
        <Fade in={inVal} timeout={{ enter: 3000, exit: 3000 }} unmountOnExit mountOnEnter>
          <div className="about-container__div">
            <p className="about-bg-text__p">About</p>
          </div>
        </Fade>
      </div>
    </Waypoint>
  );
};

About.propTypes = {
  inVal: PropTypes.bool.isRequired,
  aboutOnEnter: PropTypes.func.isRequired,
  aboutOnLeave: PropTypes.func.isRequired,
};

export default About;
