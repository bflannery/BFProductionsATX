import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default React.createClass({
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
