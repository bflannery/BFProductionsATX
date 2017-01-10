import React from 'react';
import Scroll from 'react-scroll';
import ContactForm from '../ContactForm';

export default React.createClass({
  render() {
    let Element = Scroll.Element;
    return (
      <div className="contact">
      <Element name="Contact" />
      <h1>Want to connect? </h1>
      <ContactForm />
       </div>
    );
  }
});
