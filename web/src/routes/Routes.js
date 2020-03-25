import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Finances from '../pages/Finances';
import NewFinance from '../pages/NewFinance';
import Private from './Private.routes';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login}/>
        <Private path="/dashboard" component={Dashboard}/>
        <Private path="/finances" component={Finances} />
        <Private path="/add/finance" component={NewFinance} />
      </Switch>
    </BrowserRouter>
  );
}
