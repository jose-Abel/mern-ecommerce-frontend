import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import Menu from './core/Menu';

const Router = () => {
  return (
    <BrowserRouter>
        <Menu/>
        <Switch>
          <Route path="/signin" component={Signin}/>
          
          <Route path="/signup" component={Signup}/>

          <Route exact path="/" component={Home} />
    
        </Switch>
    </BrowserRouter>
  );
};

export default Router;