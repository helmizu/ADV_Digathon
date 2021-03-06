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
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    width: '100%'
  },
  cardHeader: {
    backgroundColor: '#2E434D',
    color: '#fff'
  },
  iconButtonEdit: {
    borderRadius: 4,
    backgroundColor: '#FFEB3B',
    width: 32,
    height: 32,
    padding: 0,
    margin: '0 4px'
  },
  iconButtonDelete: {
    borderRadius: 4,
    backgroundColor: '#F44336',
    width: 32,
    height: 32,
    padding: 0,
    margin: '0 4px'
  },
  buttonWrapper: {
    padding: '8px 0 0'
  },
  root: {
    borderRadius: 16
  }
}));

export default useStyles;
