import React from 'react';
import {browserHistory} from 'react-router';
import Header from '../Header';
import Footer from '../Footer';

export default React.createClass({
  render(){
      return(
        <div className="app-container">
            {this.props.children}
        </div>
      );
  }
});
