import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import store from './store';

import App from './Components/Containers/App';
import LandingPage from './Components/Containers/LandingPage';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={LandingPage} />
    </Route>
  </Router>
);

export default router;
