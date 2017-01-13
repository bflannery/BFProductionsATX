import React from 'react';
import Scroll from 'react-scroll';
import ContactForm from '../ContactForm';

export default React.createClass({
  render() {
    let Element = Scroll.Element;
    return (
      <div className="contact">
      <h3> Want to connect? </h3>
      <ContactForm />
      <Element name="Contact" />
       </div>
    );
  }
});
