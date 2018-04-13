import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';  // BrowserRouter - what interacts with the history library and decides exactly what to do based on a chanage inside theURL
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>  {/* Switch component will decide to match the first route that match the current URL */}
          {/* put the most specific path on top, and put the root route at the bottom */}
          <Route path="/posts/new" component={ PostsNew } />
          <Route path="/posts/:id" component={ PostsShow } />  {/* ":id" is a wildcard where the path is passed */}
          <Route path="/" component={ PostsIndex } /> {/* all path contain "/" also be executed by this route eg. /posts */}
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
