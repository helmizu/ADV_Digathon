import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(createStyles({
  line: {
    width: 'calc(100% - 16px)',
    height: '1.5px',
    backgroundColor: 'lightgrey',
    margin: '8px'
  },
  footer: {
    flexDirection: 'row'
  },
  lineWrapper: {
    justifyContent: 'center',
    alignItems: 'cemter',
    width: '80%'
  },
  buttonAdd: {
    backgroundColor: '#00E676',
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 0,
    border: 'none',
    color: '#fff',
    cursor: 'pointer'
  },
  buttonRemove: {
    backgroundColor: '#F44336',
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 0,
    border: 'none',
    color: '#fff',
    cursor: 'pointer'
  }
}));


export default useStyles;
