import React from 'react';
import {Link} from 'react-router';
import store from '../store';
import HeaderNav from './HeaderNav';

export default React.createClass({
  render() {
    return (
      <div className="header">
        <HeaderNav />
        <div className="intro-container">
        <h3> Im Brian </h3>
        <h4> I take the photos & write the code </h4>
        </div>
        </div>
    );
  }
});
