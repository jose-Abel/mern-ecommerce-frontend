import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';

const Router = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/signin" exact component={Signin}/>
          
          <Route path="/signup" exact component={Signup}/>

          <Route exact path="/" component={Home} />
    
        </Switch>
    </BrowserRouter>
  );
};

export default Router;