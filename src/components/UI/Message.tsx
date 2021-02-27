import { Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { FC } from 'react';

interface MessageProps {
  msg: string;
  type: 'danger' | 'success';
}

const Message: FC<MessageProps> = ({ msg, type }) => {
  let typeClass: 'success' | 'info' | 'warning' | 'error' | undefined = 'info';

  if (type === 'danger') {
    typeClass = 'error';
  }

  if (type === 'success') {
    typeClass = 'success';
  }

  return (
    <Box textAlign='left' mb={2}>
      <Alert severity={typeClass}>{msg}</Alert>
    </Box>
  );
};

export default Message;
