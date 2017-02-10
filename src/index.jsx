import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Main from 'Container/Main';
import Search from 'Comps/Search';
import store from './store';

const App = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Search} />
      </Route>
    </Router>
  </Provider>
  );

render(App, document.getElementById('app'));
