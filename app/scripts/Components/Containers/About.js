import React from 'react';
import Scroll from 'react-scroll';

export default React.createClass({
  render() {
    let Element = Scroll.Element;
    return (
      <div className="about">
      <Element name="About" />
        <div className="about-container">
          <h3> Hi! Im Brian! </h3>
          <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
          </div>
          <img className="avatar" src='../../assets/images/about-avatar.jpg'/>
          </div>
    );
  }
});
