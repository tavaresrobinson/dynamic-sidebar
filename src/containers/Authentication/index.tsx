import React, {lazy} from 'react';
import {Container} from 'components/styled-components';
import {Switch, Route} from 'react-router-dom';
import styles from './Authentication.module.scss';
import {ReactComponent as Logo} from 'assets/svg/_SI.svg';
import {useMedia} from '../../hooks/useMedia';

const Login = lazy(()=> import('components/Login'));
const SignUp = lazy(()=> import('components/SignUp'));
const ForgotPassword = lazy(()=> import('components/ForgotPassword'));
const ResetPassword = lazy(() => import('components/ResetPassword'));
const UserActivation = lazy(()=> import('components/UserActivation'));

const Authentication = () => {
  const isDesktop = useMedia(['(max-width: 998px)'], [false], true);
  return (
    <div className={styles.container}>
      <Logo className={styles.logo}/>
      <Container margin={[10, 50]}>
        <Switch>
          <Route path={'/login'}>
            <Login isDesktop={isDesktop}/>
          </Route>
          <Route path={'/sign-up'}>
            <SignUp isDesktop={isDesktop}/>
          </Route>
          <Route path={'/forgot-password'}>
            <ForgotPassword isDesktop={isDesktop}/>
          </Route>
          <Route path={'/reset-password'}>
            <ResetPassword isDesktop={isDesktop}/>
          </Route>
          <Route path={'/user/activate/:token'}>
            <UserActivation isDesktop={isDesktop}/>
          </Route>
        </Switch>
      </Container>
    </div>

  );
};

export default Authentication;
