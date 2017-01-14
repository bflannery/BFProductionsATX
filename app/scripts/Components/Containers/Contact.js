import React from 'react';
import Scroll from 'react-scroll';
import ContactForm from '../ContactForm';

export default React.createClass({
  render() {
    let Element = Scroll.Element;
    return (

      <div className="contact-page">
        <Element name="Contact" />
        <div className="contact-title-container">

          <h3 className="contact-title"> Contact Me</h3>
        </div>

        <div className="contact">

          <h5> Lets Grab Coffee </h5>
          <ContactForm />
       </div>
       </div>
    );
  }
});
