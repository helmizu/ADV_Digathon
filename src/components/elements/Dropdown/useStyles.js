import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => createStyles({
  formControl: {
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default useStyles;
