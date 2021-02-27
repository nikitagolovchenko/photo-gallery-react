import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { RootState } from '../../store';
import useStyles from '../../styles';
import ButtonUI from '../UI/Button';
import { signOut } from './../../store/actions/authActions';

const Header: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);
  const classes = useStyles();

  const logoutClickHandler = () => {
    dispatch(signOut());
  };

  return (
    <AppBar position='static' className={classes.header} >
      <Toolbar>
        <Button
          color='inherit'
          to={!authenticated ? '/' : '/dashboard'}
          component={Link}
          className={classes.navTitle}
        >
          AppName
        </Button>

        {!authenticated ? (
          <div className='buttons'>
            <ButtonUI
            color="inherit"
              text='Sign up'
              onClick={() => history.push('/signup')}
              className='is-primary'
            />
            <ButtonUI color="inherit" text='Sign in' onClick={() => history.push('/signin')} />
          </div>
        ) : (
          <ButtonUI color="inherit" text='Sign Out' onClick={logoutClickHandler} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
