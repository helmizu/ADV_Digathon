import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
  cardHeader: {
    backgroundColor: '#2E434D',
    color: '#fff'
  },
  iconButtonEdit: {
    '&:hover': {
      backgroundColor: '#FFEB3B',
    },
    borderRadius: 4,
    backgroundColor: '#FFEB3B',
    width: 32,
    height: 32,
    padding: 0,
    margin: '0 4px',
    color: '#fff',
  },
  iconButtonDelete: {
    '&:hover': {
      backgroundColor: '#F44336',
    },
    borderRadius: 4,
    backgroundColor: '#F44336',
    width: 32,
    height: 32,
    padding: 0,
    margin: '0 4px',
    color: '#fff'
  },
  buttonWrapper: {
    padding: '8px 0 0',
  },
  root: {
    '&:hover': {
      maxHeight: '100vh'
    },
    maxHeight: 200,
    minHeight: 200,
    borderRadius: 16
  },
  line: {
    width: 'calc(100% - 16px)',
    height: '1.5px',
    backgroundColor: 'lightgrey',
    margin: '8px'
  },
}));

export default useStyles;
