import { Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setSuccess } from '../../store/actions/authActions';
import Message from '../UI/Message';

const Dashboard: React.FC = () => {
  const { user, needVerification, success } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return (
    <section className='section'>
      <Container>
        {needVerification && (
          <Message type='success' msg='Please verify your email address' />
        )}
      </Container>
    </section>
  );
};

export default Dashboard;
