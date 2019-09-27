import React from 'react';
import {render} from 'react-dom';

import App from './components/App';
import './style.css';

import {Store, applyMiddleware} from 'webext-redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';

const middleware = [thunkMiddleware];

const proxyStore = new Store({
  portName: 'youtube-tab'
});

export const storeWithMiddleware = applyMiddleware(proxyStore, ...middleware);

proxyStore.ready().then(() => {
  render(
     <Provider store={proxyStore}>
       <App />
     </Provider>
    ,document.getElementById('app'));
});

