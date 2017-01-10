import Backbone from 'backbone';
import store from '../store';
import message from '../Models/messageModel';

export default Backbone.Collection.extend({
  model: message,
  url: 'https://api.backendless.com/v1/files/Messages',

  parse(messages) {
    console.log(messages.data);
    return messages.data
  }
});
