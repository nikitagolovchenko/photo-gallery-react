import { Box, Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setError, signup } from '../../store/actions/authActions';
import Input from '../UI/Input';
import Message from '../UI/Message';
import ButtonUI from '../UI/Button';

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(''));
      }
    };
  }, [error, dispatch]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    dispatch(signup({ email, password, firstName }, () => setLoading(false)));
  };

  return (
    <Box className='section' textAlign="center">
      <Container>
        <Box textAlign='center' mb={2}>
          <Typography variant='h2'>Sign Up</Typography>
        </Box>
        <form className='form' onSubmit={submitHandler}>
          {error && <Message type='danger' msg={error} />}
          <Input
            name='firstName'
            value={firstName}
            onChange={e => setFirstName(e.currentTarget.value)}
            placeholder='First name'
            label='First Name'
          />
          <Input
            type='email'
            name='email'
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
            placeholder='Email address'
            label='Email address'
          />
          <Input
            type='password'
            name='password'
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
            placeholder='Password'
            label='Password'
          />
          <ButtonUI
            color='primary'
            type='submit'
            text={loading ? 'Loading...' : 'Sign Up'}
            className='is-primary'
            disabled={loading}
          />
        </form>
      </Container>
    </Box>
  );
};

export default SignUp;
