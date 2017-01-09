import React from 'react';
import {Link} from 'react-router';
import store from '../store';
import HeaderNav from './HeaderNav';

export default React.createClass({
  render() {
    return (
      <div className="header">
        <h1 className="site-title">BFProductions</h1>
        <HeaderNav />
        </div>
    );
  }
});
