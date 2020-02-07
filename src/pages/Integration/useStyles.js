import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => createStyles({
  buttonBlock: {
    background: theme.palette.secondary.dark,
    color: 'white',
    width: 'calc(100% - 16px)',
    margin: '6px 0 0 16px',
    height: 52,
    fontSize: 20
  }
}));

export default useStyles;
