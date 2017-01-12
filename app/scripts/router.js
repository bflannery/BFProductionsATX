import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Scroll from 'react-scroll';


import LandingPage from './Components/Containers/LandingPage';
import About from './Components/Containers/About';
import Portfolio from './Components/Containers/Portfolio';
import Contact from './Components/Containers/Contact';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={LandingPage}>
    <Route path="/About" component = {LandingPage} />
    <Route path="/Portfolio" component = {LandingPage} />
    <Route path="/Contact" component = {LandingPage} />
    </Route>
  </Router>
);

export default router;
