import { CssBaseline } from '@material-ui/core';
import React, { FC } from 'react';
import useStyles from './styles';

const App: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <CssBaseline />
      <div>Hello World!</div>
    </div>
  );
};

export default App;
