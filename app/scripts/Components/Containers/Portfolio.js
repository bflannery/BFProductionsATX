import React from 'react';
import { browserHistory } from 'react-router';

import Scroll from 'react-scroll';

import Examples from '../../Collections/projectsCollection';
import PortfolioPreview from '../PortfolioPreview';

var Element = Scroll.Element;

export default React.createClass({
  render() {
    let portfolioPreview = Examples.map((example, i) => {
      return <PortfolioPreview key={i} example={example}/>;
    });
    return (
      <div className="portfolio-page">
        <Element name="Portfolio" />
        <ul className="portfolio-sides">
          {portfolioPreview}
        </ul>
      </div>
    );
  }
});
