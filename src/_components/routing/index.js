import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Catalog from '../../_containers/Catalog';
import Register from '../../_containers/Management/Register';
import NotFound from './NotFound';

function Routing() {
  return (
    <Switch>
      <Route exact path="/">
        <Catalog />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routing;
