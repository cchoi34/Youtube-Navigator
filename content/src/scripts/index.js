import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'webext-redux';
import './content.css';

import App from './components/app/App';

const proxyStore = new Store({
  portName: 'youtube-tab'
});

const anchor = document.createElement('div');
anchor.id = 'testing';

document.body.insertBefore(anchor, document.body.childNodes[0]);

proxyStore.ready().then(() => {
  render(
    <Provider store={proxyStore}>
      <App/>
    </Provider>
   , document.getElementById('testing'));
});
