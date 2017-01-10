import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

import Scroll from 'react-scroll';


let scroller = Scroll.scroller;


export default React.createClass({

  componentDidMount() {
    let path = this.props.route.path.slice(1);
    let offset;
    let route = this.props.route.path.slice(1);
    if (route === 'Home') {
      offset = 0;
    } else if (route === 'About') {
      offset = -300;
    } else if (route === 'Portfolio') {
      offset = -220;
    } else if (route === 'Connect') {
      offset = -225;
    } else if (route === 'Contact') {
      offset = -60;
    }
    scroller.scrollTo(`${path}`, {
      duration: 100,
      offset: offset,
      delay: 100,
      smooth: true,
    });
  },

  render() {
    return (
      <div className="home-container">
      <div className="home">
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      </div>
      </div>
    );
  }
});
