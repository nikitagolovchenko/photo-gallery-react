import { Box, Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  setError,
  sendPasswordResetEmail,
  setSuccess,
} from '../../store/actions/authActions';
import Input from '../UI/Input';
import Message from '../UI/Message';
import ButtonUI from '../UI/Button';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error, success } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(''));
      }
      if (success) {
        dispatch(setSuccess(''));
      }
    };
  }, [error, dispatch, success]);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(sendPasswordResetEmail(email, 'Email sent!'));
    setLoading(false);
  };

  return (
    <Box className='section' textAlign='center'>
      <Container>
        <Box mb={2}>
          <Typography variant='h2'>Reset Password</Typography>
        </Box>
        <form className='form' onSubmit={submitHandler}>
          {error && <Message type='danger' msg={error} />}
          {success && <Message type='success' msg={success} />}
          <Input
            type='email'
            name='email'
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
            placeholder='Email address'
            label='Email address'
          />
          <ButtonUI
            type='submit'
            color='primary'
            text={loading ? 'Loading...' : 'Send password reset email'}
            className='is-primary'
            disabled={loading}
          />
        </form>
      </Container>
    </Box>
  );
};

export default ForgotPassword;
