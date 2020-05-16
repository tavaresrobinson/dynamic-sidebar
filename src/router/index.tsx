import React, { FC, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import useGlobal from 'store';

const Authentication = lazy(() => import('containers/Authentication'));
const Home = lazy(() => import('containers/Home'));
const Confirmation = lazy(() => import('containers/Confirmation'));
// const [{isAuthenticated}] = useGlobal();

const RouterOutlet: FC = () => {
  return (
    <Switch>
      <Route exact path={'/home'} component={Home} />
      <Route path={'/login'} component={Authentication} />
      <Route path={'/sign-up'} component={Authentication} />
      <Route path={'/reset-password'} component={Authentication} />
      <Route path={'/forgot-password'} component={Authentication} />
      <Route path={'/confirmation'} component={Confirmation} />
      <Route path={'/user/activate/:token'} component={Authentication} />
      <Route path={'/dashboard'} component={Authentication} />
      <Route path={'/menu1'} component={Authentication} />
      <Route path={'/menu2'} component={Authentication} />
      <Route path={'/observation'} component={Authentication} />
      <Route path={'/reporting'} component={Authentication} />
      <Route path={'/settings'} component={Authentication} />
      <Route render={() => <Redirect to={'/login'} />} />

    </Switch>
  );
};

export default RouterOutlet;
