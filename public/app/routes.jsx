import React from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import Nav from './nav';
import Home from '../home/home';
import Search from '../search/search';
import rootReducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(rootReducer);
// const history = syncHistoryWithStore(browserHistory, store);

const Routes = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default Routes;
