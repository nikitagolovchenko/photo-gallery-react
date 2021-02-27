import { CssBaseline, Typography } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/sections/Header';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import {
  getUserById,
  setLoading,
  setNeedVerification,
} from './store/actions/authActions';
import firebase from './firebase/config';
import Loader from './components/UI/Loader';
import Homepage from './components/pages/Homepage';
import PublicRoute from './components/auth/PublicRoute';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import ForgotPassword from './components/pages/ForgotPassword';
import PrivateRoute from './components/auth/PrivateRoute';
import Dashboard from './components/pages/Dashboard';
import './styles.css';

const App: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);

  // Check if user exists
  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        dispatch(setLoading(true));
        await dispatch(getUserById(user.uid));

        if (!user.emailVerified) {
          dispatch(setNeedVerification());
        }
      }
      dispatch(setLoading(false));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      <CssBaseline />

      {loading && <Loader />}
      {!loading && (
        <BrowserRouter>
          <Header />
          <Switch>
            <PublicRoute path='/' component={Homepage} exact />
            <PublicRoute path='/signup' component={SignUp} exact />
            <PublicRoute path='/signin' component={SignIn} exact />
            <PublicRoute path='/forgot-password' component={ForgotPassword} exact />
            <PrivateRoute path="/dashboard" component={Dashboard} exact />
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
