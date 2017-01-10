import React from 'react';
import Scroll from 'react-scroll';
export default React.createClass({
  render() {
    let Element = Scroll.Element;
    return (
      <div className="portfolio">
      <Element name="Portfolio" />
      <span> Portfolio </span>
       </div>
    );
  }
});
