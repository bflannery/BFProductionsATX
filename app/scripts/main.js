import React from 'react';
import ReactDom from 'react-dom';
import router from './router';
import $ from 'jquery';




let appContainer = document.getElementById('app-container');

$(document).ajaxSend((evt, xhr, opts) => {
        console.log(opts.type);

        xhr.setRequestHeader('application-id', config.appId);
        xhr.setRequestHeader('secret-key', config.secretKey);
        xhr.setRequestHeader('application-type', 'REST');
        xhr.setRequestHeader('user-token', window.localStorage.getItem('user-token'));

  });


ReactDom.render(router, appContainer);
