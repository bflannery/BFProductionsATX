import React from 'react';
import store from '../store';
export default React.createClass({

  render() {

    return (

        <form onSubmit={this.handleSubmit} className="contact-form">
          <div className="left-contact">
            <input type='text'   ref="name" placeholder='Name' />
            <input type='email'  ref="email" placeholder='Email' />
            <input type="text"   ref="subject" placeholder="Subject"/>
          </div>
          <div className="right-contact">
            <textarea type="text" ref="message" placeholder="Message" rows='15' cols='38'></textarea>
            </div>
            <input type="submit" value="Send Message"/>
        </form>
      );
  },

  handleSubmit(e) {
    e.preventDefault();
    const name = this.refs.name.value;
    const email= this.refs.email.value;
    const subject= this.refs.subject.value;
    const message= this.refs.message.value;

    store.message.saveMessage(name, email, subject, message);
    store.message.sendMessage(name, email, subject, message);

    this.refs.name.value = '';
    this.refs.email.value = '';
    this.refs.subject.value = '';
    this.refs.message.value = '';
  }
});
