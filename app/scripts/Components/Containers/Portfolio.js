import React from 'react';
import { browserHistory } from 'react-router';

import Scroll from 'react-scroll';

import Projects from '../../Collections/projectsCollection';
import Carousel from '../Carousel';

var Element = Scroll.Element;

export default React.createClass({

  render() {
    let portfolioPreview = Projects.map((project, i) => {
      return <Carousel key={i} project={project}/>;
    });
    return (

      <div className="portfolio-page">
      <Element name="Portfolio"/>
      <div className="recent-title-container">
        <h3 className="recent-title"> Recent Work </h3>
      </div>

        <ul className="projects-container">
          {portfolioPreview}
        </ul>
      </div>
    );
  }
});
