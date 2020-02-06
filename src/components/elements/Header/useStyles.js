import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  header: {
    width: '100%',
    padding: '0 8px 24px',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  line: {
    backgroundColor: theme.palette.secondary.main,
    height: '1.5px',
    width: 'calc(100%)',
  },
  text: {
    color: theme.palette.secondary.dark,
    fontWeight: '800',
    padding: '0 0 24px 0',
  }
}));

export default useStyles;
