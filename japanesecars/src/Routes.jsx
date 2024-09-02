import React from 'react';
import { Route, Switch }
  from 'react-router-dom';


import Signup from './components/Signup';
import Page404 from './components/404';  
import Login from './components/Login';

const Routes = () => (
  <Switch>
    <Route
      exact path='/'
      component={Login}
    />
    <Route path="/about" component={Signup} />
    <Route component={Page404} />
  </Switch>
)


export default Routes;