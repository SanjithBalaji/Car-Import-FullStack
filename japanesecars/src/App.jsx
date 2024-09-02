import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import LoginPage from './components/Login';
import SignupPage from './components/Signup';
import ButtonAppBar from './components/ButtonAppBar';
import SubAppBar from './components/SubAppBar';
import Tax from './components/Tax';
import Rules from './components/rules';
import Register from './components/Register';
import rdata from './components/rdata';
import Edit from './components/edit';

function App() {
  return (
    
    <div>
      
      <BrowserRouter>
        <ButtonAppBar />
        <Switch>
    
          <Route exact path="/" component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/appbar" component={ButtonAppBar} />
          <Route path="/subappbar" component={SubAppBar} />
          <Route path="/tax" component={Tax} />
          <Route path="/Rules" component={Rules} />
          <Route path="/register" component={Register}/>
          <Route path="/rdata" component={rdata}/>
          <Route path="/edit" component={Edit}/>
        </Switch>
      </BrowserRouter>  
    </div>
  );
}

export default App;
