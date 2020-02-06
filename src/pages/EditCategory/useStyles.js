import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => createStyles({
  table: {
    minWidth: 500,
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    marginLeft: theme.spacing(1)
  },
  buttonAdd: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: theme.spacing(2)
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 0,
    borderRadius: 5,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  buttonBlock: {
    '&:hover': {
      backgroundColor: '#2E434D',
    },
    backgroundColor: '#2E434D',
    color: 'white',
    width: '100%',
    marginTop: 8,
    height: 50,
    fontSize: 20
  }
}));

export default useStyles;
