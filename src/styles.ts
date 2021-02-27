import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  navTitle: {
    marginRight: 'auto',
    fontSize: theme.typography.h6.fontSize,
  },
  header: {
    marginBottom: theme.spacing(3),
  },
}));

export default useStyles;
