import Backbone from 'backbone';
import $ from 'jquery';

export default Backbone.Model.extend({
  url: 'https://api.backendless.com/v1/data/Messages',
  idAttribute: 'objectId',
  defaults : {
    name: '',
    email: '',
    message: ''
  },

  saveMessage(name, email, subject, message) {
    this.save({
      name: name,
      email: email,
      subject: subject,
      message: message
    }, {
      success: () => {
        console.log('saved');
      },
      error: () => {
        console.log('failed');
      }
    });
  },

  sendMessage(name, email, subject, message) {
    $.ajax({
          type: 'POST',
          url: 'https://api.backendless.com/v1/messaging/email',
          contentType: 'application/json',
          data: JSON.stringify({
            subject: subject,
            bodyparts:{
              textmessage: name + ' : ' + email + ' : '+ message
            },
            to:['bflannery66@gmail.com']
          }),
          success:()=>{
              console.log('sent')
          }
      });
  }
  });
