import { makeStyles, createStyles } from '@material-ui/core';

export default makeStyles(() => createStyles({
  container: {
    textAlign: 'center'
  },
  buttonStyle: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 32px',
    margin: 'auto'
  },
  textStyle: {
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    textShadow: '2px 2px rgba(255, 105, 135, .3)',
    fontSize: 250,
    padding: '0 32px',
    marginBottom: 0,
    marginTop: 48
  },
  subTextStyle: {
    color: '#d3d3d3',
    fontSize: 100,
    marginTop: 0
  },
  link: {
    textDecoration: 'none'
  }
}));

