import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';  // BrowserRouter - what interacts with the history library and decides exactly what to do based on a chanage inside theURL

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>

      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
